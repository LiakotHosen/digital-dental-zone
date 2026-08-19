/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Blog Engine
   Fetches posts from Supabase, falls back to js/blog-data.js
   Handles listing page with search/filters and single post view.
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  const FALLBACK = window.DDZ_BLOG_POSTS || [];
  const cfg = window.DDZ_CONFIG || {};

  let cachedPosts = null;
  let activeFilter = 'all';
  let searchQuery = '';

  /* ── Enhanced Markdown → HTML Parser ── */
  function mdToHtml(md) {
    if (!md) return '';
    const lines = md.split('\n');
    let html = '';
    let inList = false;
    let listType = '';
    let inTable = false;

    const closeList = () => {
      if (inList) {
        html += '</' + listType + '>';
        inList = false;
      }
    };

    const closeTable = () => {
      if (inTable) {
        html += '</tbody></table></div>';
        inTable = false;
      }
    };

    lines.forEach((line) => {
      const t = line.trim();

      // Check Table
      if (t.startsWith('|') && t.endsWith('|')) {
        closeList();
        const cells = t.split('|').slice(1, -1).map(c => c.trim());
        if (cells.every(c => /^[-:]+$/.test(c))) {
          // Table header separator line
          return;
        }
        if (!inTable) {
          html += '<div class="table-responsive"><table class="blog-table"><thead><tr>';
          cells.forEach(c => { html += '<th>' + inlineFormat(c) + '</th>'; });
          html += '</tr></thead><tbody>';
          inTable = true;
        } else {
          html += '<tr>';
          cells.forEach(c => { html += '<td>' + inlineFormat(c) + '</td>'; });
          html += '</tr>';
        }
        return;
      } else {
        closeTable();
      }

      // Check Headings
      if (/^###\s+/.test(t)) {
        closeList();
        html += '<h3>' + inlineFormat(t.replace(/^###\s+/, '')) + '</h3>';
      } else if (/^##\s+/.test(t)) {
        closeList();
        html += '<h2>' + inlineFormat(t.replace(/^##\s+/, '')) + '</h2>';
      } else if (/^#\s+/.test(t)) {
        closeList();
        html += '<h1>' + inlineFormat(t.replace(/^#\s+/, '')) + '</h1>';
      } else if (/^-\s+/.test(t)) {
        if (!inList || listType !== 'ul') { closeList(); html += '<ul>'; inList = true; listType = 'ul'; }
        html += '<li>' + inlineFormat(t.replace(/^-\s+/, '')) + '</li>';
      } else if (/^\d+\.\s+/.test(t)) {
        if (!inList || listType !== 'ol') { closeList(); html += '<ol>'; inList = true; listType = 'ol'; }
        html += '<li>' + inlineFormat(t.replace(/^\d+\.\s+/, '')) + '</li>';
      } else if (t.startsWith('>')) {
        closeList();
        html += '<blockquote>' + inlineFormat(t.replace(/^>\s*/, '')) + '</blockquote>';
      } else if (t === '' || t === '---') {
        closeList();
        if (t === '---') html += '<hr class="blog-divider">';
      } else {
        closeList();
        html += '<p>' + inlineFormat(t) + '</p>';
      }
    });
    closeList();
    closeTable();
    return html;
  }

  function inlineFormat(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  /* ── Language & Field Helpers ── */
  function isBn() {
    return document.body.classList.contains('bn-mode');
  }

  function pick(post, field) {
    const isBengali = isBn();
    if (isBengali) {
      if (post[field + '_bn']) return post[field + '_bn'];
      if (post[field + '_en']) return post[field + '_en'];
    } else {
      if (post[field + '_en']) return post[field + '_en'];
      if (post[field + '_bn']) return post[field + '_bn'];
    }
    return post[field + '_bn'] || post[field + '_en'] || '';
  }

  function fmtDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(isBn() ? 'bn-BD' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
      return '';
    }
  }

  /* ── Determine Post Category for Filtering ── */
  function getPostCategory(post) {
    const text = (
      (post.slug || '') + ' ' +
      (post.title_en || '') + ' ' + (post.title_bn || '') + ' ' +
      (post.excerpt_en || '') + ' ' + (post.excerpt_bn || '') + ' ' +
      (post.tags ? post.tags.join(' ') : '')
    ).toLowerCase();

    if (/implant|surgery|সার্জারি|ইমপ্ল্যান্ট|extraction|তুলে/.test(text)) return 'implant';
    if (/root[- ]?canal|rct|এন্ডোমোটর|ক্যানাল|ব্যথামুক্ত|pulpotomy/.test(text)) return 'rct';
    if (/crown|zirconia|porcelain|pmma|veneer|ক্যাপ|ক্রাউন|জিরকোনিয়া|পোর্সেলিন|ইনলে|অনলে/.test(text)) return 'crown';
    if (/invisalign|ortho|brace|aligner|অ্যালাইনার|ব্রেসেস|বাঁকা/.test(text)) return 'ortho';
    if (/pediatric|child|kid|দুধ দাঁত|শিশু/.test(text)) return 'kids';
    return 'general';
  }

  /* ── Load posts from Supabase or fallback ── */
  async function loadPosts() {
    if (cachedPosts && cachedPosts.length > 0) return cachedPosts;
    try {
      const client = await window.DDZ.supabase();
      if (client) {
        const { data, error } = await client
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });
        if (!error && data && data.length > 0) {
          cachedPosts = data.map((p) => ({
            slug: p.slug,
            language: p.language || (p.title_bn && !p.title_en ? 'bn' : 'en'),
            title_en: p.title_en, title_bn: p.title_bn,
            excerpt_en: p.excerpt_en, excerpt_bn: p.excerpt_bn,
            body_en: p.body_en, body_bn: p.body_bn,
            tags: p.tags || [],
            author: p.author || 'Dr. Nusrat Naiem',
            published: p.published_at,
            cover: p.cover_image,
            category: getPostCategory(p)
          }));
          return cachedPosts;
        }
      }
    } catch (e) {
      console.warn('[DDZ Blog] Offline mode, using local blog data fallback.');
    }
    cachedPosts = FALLBACK.map(p => ({
      ...p,
      category: getPostCategory(p)
    }));
    return cachedPosts;
  }

  /* ── Filter Posts Helper ── */
  function filterPosts(posts, filter, query) {
    const isBengali = isBn();
    return posts.filter(post => {
      // 1. Language or Category Tab Filter
      if (filter === 'bn' && post.language !== 'bn' && !post.title_bn) return false;
      if (filter === 'en' && post.language !== 'en' && !post.title_en) return false;
      if (['implant', 'rct', 'crown', 'ortho', 'kids'].includes(filter)) {
        if (post.category !== filter) return false;
      }

      // 2. Search Query Filter
      if (query && query.trim() !== '') {
        const q = query.toLowerCase().trim();
        const haystack = (
          (post.title_en || '') + ' ' + (post.title_bn || '') + ' ' +
          (post.excerpt_en || '') + ' ' + (post.excerpt_bn || '') + ' ' +
          (post.tags ? post.tags.join(' ') : '')
        ).toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }

  /* ── Update Count Badges ── */
  function updateCounts(allPosts) {
    const countAll = document.getElementById('count-all');
    const countBn = document.getElementById('count-bn');
    const countEn = document.getElementById('count-en');
    const countImplant = document.getElementById('count-implant');
    const countRct = document.getElementById('count-rct');
    const countCrown = document.getElementById('count-crown');
    const countOrtho = document.getElementById('count-ortho');
    const countKids = document.getElementById('count-kids');

    if (countAll) countAll.textContent = allPosts.length;
    if (countBn) countBn.textContent = allPosts.filter(p => p.language === 'bn' || p.title_bn).length;
    if (countEn) countEn.textContent = allPosts.filter(p => p.language === 'en' || p.title_en).length;
    if (countImplant) countImplant.textContent = allPosts.filter(p => p.category === 'implant').length;
    if (countRct) countRct.textContent = allPosts.filter(p => p.category === 'rct').length;
    if (countCrown) countCrown.textContent = allPosts.filter(p => p.category === 'crown').length;
    if (countOrtho) countOrtho.textContent = allPosts.filter(p => p.category === 'ortho').length;
    if (countKids) countKids.textContent = allPosts.filter(p => p.category === 'kids').length;
  }

  /* ── Render Blog Listing ── */
  async function renderListing() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    const allPosts = await loadPosts();
    const isBengali = isBn();
    updateCounts(allPosts);

    const filtered = filterPosts(allPosts, activeFilter, searchQuery);

    // Update Result text
    const resultsText = document.getElementById('blog-results-text');
    if (resultsText) {
      const count = filtered.length;
      if (isBengali) {
        resultsText.textContent = `মোট ${count}টি পোস্ট পাওয়া গেছে`;
      } else {
        resultsText.textContent = `Showing ${count} of ${allPosts.length} articles`;
      }
    }

    if (!filtered.length) {
      grid.innerHTML = `
        <div class="blog-empty-state">
          <div class="empty-icon">🔍</div>
          <h3>${isBengali ? 'কোনো পোস্ট পাওয়া যায়নি' : 'No articles found'}</h3>
          <p>${isBengali ? 'অন্য কোনো কিওয়ার্ড বা ফিল্টার ব্যবহার করে পুনরায় চেষ্টা করুন।' : 'Try clearing your search or selecting another category filter.'}</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = '';

    filtered.forEach((post) => {
      const slug = post.slug || '';
      const title = pick(post, 'title') || (isBengali ? post.title_en : post.title_bn) || 'Dental Article';
      const excerpt = pick(post, 'excerpt') || (isBengali ? post.excerpt_en : post.excerpt_bn) || '';
      const tag = (post.tags && post.tags[0]) || (isBengali ? 'দাঁতের যত্ন' : 'Dental Care');
      const langBadge = post.language === 'bn' ? 'বাংলা' : 'English';

      const card = document.createElement('a');
      card.className = 'blog-card hover-lift reveal-scale';
      card.href = '/blog/' + encodeURIComponent(slug);

      const cover = document.createElement('div');
      cover.className = 'blog-card-cover';
      if (post.cover) {
        const img = document.createElement('img');
        img.src = post.cover.startsWith('/') ? post.cover : '/' + post.cover;
        img.alt = title;
        img.loading = 'lazy';
        img.onerror = () => {
          cover.innerHTML = `<div class="blog-cover-fallback">🦷 ${tag}</div>`;
        };
        cover.appendChild(img);
      } else {
        cover.innerHTML = `<div class="blog-cover-fallback">🦷 ${tag}</div>`;
      }

      // Add Language indicator chip
      const chip = document.createElement('span');
      chip.className = 'blog-cover-lang-chip';
      chip.textContent = langBadge;
      cover.appendChild(chip);

      const body = document.createElement('div');
      body.className = 'blog-card-body';

      const meta = document.createElement('div');
      meta.className = 'blog-card-meta';
      const tg = document.createElement('span');
      tg.className = 'blog-tag';
      tg.textContent = tag;
      const dt = document.createElement('span');
      dt.textContent = fmtDate(post.published);
      meta.appendChild(tg);
      meta.appendChild(dt);

      const h3 = document.createElement('h3');
      h3.className = 'blog-card-title';
      h3.textContent = title;

      const ex = document.createElement('p');
      ex.className = 'blog-card-excerpt';
      ex.textContent = excerpt;

      const link = document.createElement('span');
      link.className = 'blog-card-link';
      link.innerHTML = `${isBengali ? 'সম্পূর্ণ পড়ুন' : 'Read Full Article'} <span class="arrow">→</span>`;

      body.appendChild(meta);
      body.appendChild(h3);
      body.appendChild(ex);
      body.appendChild(link);

      card.appendChild(cover);
      card.appendChild(body);
      grid.appendChild(card);
    });

    // Animate cards
    setTimeout(() => {
      grid.querySelectorAll('.reveal-scale').forEach((el) => el.classList.add('revealed'));
    }, 50);
  }

  /* ── Setup Search & Filter Listeners ── */
  function setupControls() {
    const searchInput = document.getElementById('blog-search-input');
    const clearBtn = document.getElementById('blog-search-clear');
    const filterPills = document.querySelectorAll('.blog-pill');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.style.display = searchQuery ? 'block' : 'none';
        }
        renderListing();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        renderListing();
      });
    }

    if (filterPills.length > 0) {
      filterPills.forEach((pill) => {
        pill.addEventListener('click', () => {
          filterPills.forEach((p) => p.classList.remove('active'));
          pill.classList.add('active');
          activeFilter = pill.dataset.filter || 'all';
          renderListing();
        });
      });
    }
  }

  /* ── Single Post page ── */
  async function renderPost() {
    const container = document.getElementById('blog-post');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const pathMatch = window.location.pathname.match(/\/blog\/([^/]+)\/?$/);
    const slug = (pathMatch ? decodeURIComponent(pathMatch[1]) : '') || params.get('slug') || '';

    const posts = await loadPosts();
    const isBengali = isBn();

    let post = posts.find((p) => (p.slug || '') === slug);
    if (!post && slug) {
      post = posts.find(p => p.slug && p.slug.includes(slug));
    }
    if (!post) {
      post = posts[0];
    }

    if (!post) {
      container.innerHTML = `
        <div style="text-align:center;padding:60px 20px;">
          <h2>${isBengali ? 'পোস্টটি পাওয়া যায়নি।' : 'Post not found.'}</h2>
          <a href="/blog/" class="btn-primary" style="margin-top:16px;">← ${isBengali ? 'ব্লগে ফিরে যান' : 'Back to Blog'}</a>
        </div>
      `;
      return;
    }

    const title = pick(post, 'title') || post.title_bn || post.title_en || '';
    const body = pick(post, 'body') || post.body_bn || post.body_en || '';
    const tag = (post.tags && post.tags[0]) || (isBengali ? 'দাঁতের চিকিৎসা' : 'Dental Care');

    document.title = title + ' — Digital Dental Zone, Barishal';

    const header = document.createElement('div');
    header.className = 'blog-post-header';
    header.innerHTML = `
      <a href="/blog/" class="blog-post-back">← ${isBengali ? 'সকল ব্লগ পোস্টে ফিরে যান' : 'Back to All Articles'}</a>
      <div class="blog-card-meta" style="display:inline-flex;margin:12px 0 8px;">
        <span class="blog-tag">${tag}</span>
        <span>·</span>
        <span>${fmtDate(post.published)}</span>
      </div>
      <h1 class="blog-post-title">${title}</h1>
      <div class="blog-post-meta">
        <span>👨‍⚕️ ${post.author || (isBengali ? 'ডাঃ নুসরাত নাঈম' : 'Dr. Nusrat Naiem')}</span>
        <span>·</span>
        <span>📍 ডিজিটাল ডেন্টাল জোন, বরিশাল</span>
      </div>
    `;

    const cover = document.createElement('div');
    cover.className = 'blog-post-cover';
    if (post.cover) {
      const coverSrc = post.cover.startsWith('/') ? post.cover : '/' + post.cover;
      cover.innerHTML = `<img src="${coverSrc}" alt="${title}">`;
    } else {
      cover.innerHTML = `<div class="blog-cover-fallback">🦷 ${title}</div>`;
    }

    const content = document.createElement('div');
    content.className = 'blog-post-content';
    content.innerHTML = mdToHtml(body);

    const cta = document.createElement('div');
    cta.className = 'blog-cta';
    cta.innerHTML = `
      <div class="section-tag" style="margin-bottom:16px;">
        ${isBn() ? 'অভিজ্ঞ চিকিৎসকের পরামর্শ' : 'Book a Consultation'}
      </div>
      <h2 class="section-h2" style="font-size:clamp(22px,3.5vw,34px);">
        ${isBn() ? 'আপনার সুস্থ ও সুন্দর হাসির যত্ন <em>আজই শুরু করুন</em>' : 'Start your healthy smile journey <em>today</em>'}
      </h2>
      <p class="section-sub" style="margin:0 auto 24px;color:var(--muted);">
        ${isBn() ? 'ডাঃ নুসরাত নাঈমের সাথে সরাসরি পরামর্শ বা সিরিয়ালের জন্য যোগাযোগ করুন:' : 'Call or WhatsApp to book your appointment with Dr. Nusrat Naiem:'}
      </p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
        <a href="${cfg.whatsapp || 'https://wa.me/8801674878470'}" target="_blank" class="btn-primary">
          ${isBn() ? '💬 হোয়াটসঅ্যাপে পরামর্শ নিন' : '💬 WhatsApp Now'}
        </a>
        <a href="tel:01674878470" class="btn-secondary">
          📞 01674-878470
        </a>
      </div>
    `;

    container.innerHTML = '';
    container.appendChild(header);
    container.appendChild(cover);
    container.appendChild(content);
    container.appendChild(cta);
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.blogPage;
    if (page === 'listing') {
      setupControls();
      renderListing();
    }
    if (page === 'post') {
      renderPost();
    }

    document.addEventListener('ddz-langchange', () => {
      if (page === 'listing') renderListing();
      if (page === 'post') renderPost();
    });
  });
})();