/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Blog
   Fetches posts from Supabase, falls back to js/blog-data.js
   Handles both the listing page and the ?slug= post page.
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  const FALLBACK = window.DDZ_BLOG_POSTS || [];
  const cfg = window.DDZ_CONFIG || {};

  /* ── Minimal markdown → HTML (headings, bold, lists, paragraphs) ── */
  function mdToHtml(md) {
    if (!md) return '';
    const lines = md.split('\n');
    let html = '';
    let inList = false;
    let listType = '';

    const closeList = () => {
      if (inList) {
        html += '</' + listType + '>';
        inList = false;
      }
    };

    lines.forEach((line) => {
      const t = line.trim();

      // Escape basic HTML to keep content safe
      let esc = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      if (/^###\s+/.test(esc)) {
        closeList();
        html += '<h3>' + inlineFormat(esc.replace(/^###\s+/, '')) + '</h3>';
      } else if (/^##\s+/.test(esc)) {
        closeList();
        html += '<h2>' + inlineFormat(esc.replace(/^##\s+/, '')) + '</h2>';
      } else if (/^-\s+/.test(esc)) {
        if (!inList || listType !== 'ul') { closeList(); html += '<ul>'; inList = true; listType = 'ul'; }
        html += '<li>' + inlineFormat(esc.replace(/^-\s+/, '')) + '</li>';
      } else if (/^\d+\.\s+/.test(esc)) {
        if (!inList || listType !== 'ol') { closeList(); html += '<ol>'; inList = true; listType = 'ol'; }
        html += '<li>' + inlineFormat(esc.replace(/^\d+\.\s+/, '')) + '</li>';
      } else if (esc === '') {
        closeList();
      } else {
        closeList();
        html += '<p>' + inlineFormat(esc) + '</p>';
      }
    });
    closeList();
    return html;
  }

  function inlineFormat(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  /* ── Helpers ── */
  function isBn() {
    return document.body.classList.contains('bn-mode');
  }

  function pick(post, field) {
    if (isBn() && post[field + '_bn']) return post[field + '_bn'];
    if (post[field + '_en']) return post[field + '_en'];
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

  /* ── Load posts (supabase first, then fallback) ── */
  async function loadPosts() {
    try {
      const client = await window.DDZ.supabase();
      if (client) {
        const { data, error } = await client
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data.map((p) => ({
            slug: p.slug,
            language: p.language,
            title_en: p.title_en, title_bn: p.title_bn,
            excerpt_en: p.excerpt_en, excerpt_bn: p.excerpt_bn,
            body_en: p.body_en, body_bn: p.body_bn,
            tags: p.tags || [],
            author: p.author,
            published: p.published_at,
            cover: p.cover_image
          }));
        }
      }
    } catch (e) { /* offline */ }
    return FALLBACK;
  }

  function buildSlug(title, i) {
    const base = (title || 'post').toLowerCase()
      .replace(/[^a-z0-9\u0980-\u09FF]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return base + '-' + (i + 1);
  }

  /* ── Listing page ── */
  async function renderListing() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const allPosts = await loadPosts();
    const isBengali = isBn();

    // Filter posts strictly by current active language
    const posts = allPosts.filter((p) => {
      if (isBengali) {
        return p.language === 'bn' || (!p.language && Boolean(p.title_bn));
      } else {
        return p.language === 'en' || (!p.language && Boolean(p.title_en));
      }
    });

    if (!posts.length) {
      grid.innerHTML = '<p style="color:var(--muted);text-align:center;grid-column:1/-1;">' +
        (isBengali ? 'এই ভাষায় কোনো ব্লগ পোস্ট পাওয়া যায়নি।' : 'No blog posts found in this language.') + '</p>';
      return;
    }

    grid.innerHTML = '';

    posts.forEach((post, i) => {
      const slug = post.slug || buildSlug(pick(post, 'title'), i);
      const title = pick(post, 'title');
      const excerpt = pick(post, 'excerpt');
      const tag = (post.tags && post.tags[0]) || (isBengali ? 'দাঁতের যত্ন' : 'Dental Care');

      const card = document.createElement('a');
      card.className = 'blog-card hover-lift reveal';
      card.href = '/blog/' + encodeURIComponent(slug);

      const cover = document.createElement('div');
      cover.className = 'blog-card-cover';
      if (post.cover) {
        const img = document.createElement('img');
        img.src = post.cover;
        img.alt = title;
        img.loading = 'lazy';
        cover.appendChild(img);
      } else {
        const fb = document.createElement('div');
        fb.className = 'blog-cover-fallback';
        fb.textContent = title.split(' ').slice(0, 4).join(' ');
        cover.appendChild(fb);
      }

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
      link.textContent = isBengali ? 'সম্পূর্ণ পড়ুন →' : 'Read more →';

      body.appendChild(meta);
      body.appendChild(h3);
      body.appendChild(ex);
      body.appendChild(link);

      card.appendChild(cover);
      card.appendChild(body);
      grid.appendChild(card);
    });

    // Re-trigger reveal on injected cards
    grid.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'));
  }

  /* ── Post page ── */
  async function renderPost() {
    const container = document.getElementById('blog-post');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const pathMatch = window.location.pathname.match(/\/blog\/([^/]+)\/?$/);
    const slug = (pathMatch ? decodeURIComponent(pathMatch[1]) : '') || params.get('slug') || '';

    const posts = await loadPosts();
    const isBengali = isBn();

    let post = posts.find((p) => (p.slug || '') === slug);
    if (post) {
      if (isBengali && post.language === 'en') {
        const bnSister = posts.find((p) => p.slug === (slug + '-bn') || (p.language === 'bn' && p.title_bn));
        if (bnSister) post = bnSister;
      } else if (!isBengali && post.language === 'bn') {
        const enSister = posts.find((p) => p.slug === slug.replace(/-bn$/, '') || (p.language === 'en' && p.title_en));
        if (enSister) post = enSister;
      }
    } else {
      post = posts.find((p) => isBengali ? p.language === 'bn' : p.language === 'en') || posts[0];
    }

    if (!post) {
      container.innerHTML = '<p style="color:var(--muted);text-align:center;">' +
        (isBengali ? 'পোস্টটি পাওয়া যায়নি।' : 'Post not found.') + '</p>';
      return;
    }

    const title = pick(post, 'title');
    const excerpt = pick(post, 'excerpt');
    const body = pick(post, 'body');

    document.title = title + ' | Digital Dental Zone';

    const header = document.createElement('div');
    header.className = 'blog-post-header';
    header.innerHTML =
      '<a href="/blog/" class="blog-post-back">← ' + (isBengali ? 'ব্লগ তালিকায় ফিরে যান' : 'Back to Blog') + '</a>' +
      '<a href="/blog/" class="blog-card-meta" style="display:inline-flex;margin-bottom:8px;">' +
        '<span class="blog-tag">' + ((post.tags && post.tags[0]) || (isBengali ? 'দাঁতের চিকিৎসা' : 'Dental Care')) + '</span>' +
      '</a>' +
      '<h1 class="blog-post-title">' + title + '</h1>' +
      '<div class="blog-post-meta">' +
        '<span>' + (post.author || (isBengali ? 'ডাঃ নুসরাত নাঈম' : 'Dr. Nusrat Naiem')) + '</span>' +
        '<span>·</span>' +
        '<span>' + fmtDate(post.published) + '</span>' +
      '</div>';

    const cover = document.createElement('div');
    cover.className = 'blog-post-cover';
    if (post.cover) {
      const img = document.createElement('img');
      img.src = post.cover;
      img.alt = title;
      cover.appendChild(img);
    } else {
      cover.textContent = title;
    }

    const content = document.createElement('div');
    content.className = 'blog-post-content';
    content.innerHTML = mdToHtml(body);

    const cta = document.createElement('div');
    cta.className = 'blog-cta';
    cta.innerHTML =
      '<div class="section-tag" style="margin-bottom:16px;">' +
        (isBn() ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book an Appointment') +
      '</div>' +
      '<h2 class="section-h2" style="font-size:clamp(24px,4vw,38px);">' +
        (isBn() ? 'আপনার দাঁতের যত্ন <em>আজই শুরু করুন</em>' : 'Start your dental care <em>today</em>') +
      '</h2>' +
      '<p class="section-sub" style="margin:0 auto 24px;color:var(--muted);">' +
        (isBn() ? 'ডাঃ নুসরাতের সাথে পরামর্শ নিতে কল করুন 01674-878470।' : 'Call 01674-878470 to book a consultation with Dr. Nusrat.') +
      '</p>' +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
        '<a href="' + (cfg.whatsapp || 'https://wa.me/8801674878470') + '" target="_blank" class="btn-primary">' +
          (isBn() ? 'হোয়াটসঅ্যাপ করুন' : 'WhatsApp Now') +
        '</a>' +
        '<a href="tel:01674878470" class="btn-secondary">01674-878470</a>' +
      '</div>';

    container.appendChild(header);
    container.appendChild(cover);
    container.appendChild(content);
    container.appendChild(cta);
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.blogPage;
    if (page === 'listing') renderListing();
    if (page === 'post') renderPost();

    // Re-render dynamic content when the user toggles language
    document.addEventListener('ddz-langchange', () => {
      if (page === 'listing') renderListing();
      if (page === 'post') renderPost();
    });
  });
})();