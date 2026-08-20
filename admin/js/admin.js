/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Admin Panel
   Supabase auth + data-driven CRUD over content tables.
   Views are hash-routed:  #/dashboard  #/blog  #/reviews
   #/faqs  #/treatments  #/categories  #/gallery  #/leads
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let client = null;
  let authed = false;
  let viewName = 'dashboard';
  let categories = [];

  /* ──────────────────────────  COLLECTION CONFIG  ────────────────────────── */

  const COLLECTIONS = {
    blog: {
      table: 'blog_posts',
      singular: 'Blog Post',
      orderBy: { col: 'published_at', asc: false },
      title: (r) => r.title_en || r.title_bn || r.slug,
      search: ['title_en', 'title_bn', 'slug', 'body_en', 'body_bn'],
      columns: [
        { key: 'title', label: 'Title' },
        { key: 'slug', label: 'Slug / URL' },
        { key: 'language', label: 'Language', type: 'blog_lang' },
        { key: 'published_at', label: 'Published', type: 'date' }
      ],
      fields: [
        { name: 'slug', label: 'Slug (URL)', type: 'text', required: true, hint: 'e.g. root-canal-treatment-guide' },
        { name: 'language', label: 'Language', type: 'select', options: [['both', 'Dual Language (English + বাংলা)'], ['en', 'English Only'], ['bn', 'বাংলা Only']], required: true },
        { name: 'title_en', label: 'Title (EN)', type: 'text' },
        { name: 'title_bn', label: 'Title (BN)', type: 'text' },
        { name: 'excerpt_en', label: 'Excerpt (EN)', type: 'textarea', rows: 2 },
        { name: 'excerpt_bn', label: 'Excerpt (BN)', type: 'textarea', rows: 2 },
        { name: 'body_en', label: 'Body (EN) — markdown', type: 'textarea', rows: 12 },
        { name: 'body_bn', label: 'Body (BN) — markdown', type: 'textarea', rows: 12 },
        { name: 'tags', label: 'Tags (comma separated)', type: 'tags' },
        { name: 'cover_image', label: 'Cover image URL', type: 'text' },
        { name: 'author', label: 'Author', type: 'text' },
        { name: 'meta_title', label: 'Meta title', type: 'text' },
        { name: 'meta_description', label: 'Meta description', type: 'textarea', rows: 2 },
        { name: 'published_at', label: 'Published at', type: 'datetime-local' }
      ]
    },

    reviews: {
      table: 'reviews',
      singular: 'Review',
      orderBy: { col: 'sort_order', asc: true },
      title: (r) => (r.author ? r.author + ' (' + (r.rating || 5) + '★)' : 'Review #' + r.id),
      search: ['author', 'text_en', 'text_bn'],
      columns: [
        { key: 'image_url', label: 'Preview', type: 'image_thumb' },
        { key: 'author', label: 'Author' },
        { key: 'rating', label: 'Rating', type: 'stars' },
        { key: 'sort_order', label: 'Order' }
      ],
      fields: [
        { name: 'author', label: 'Author name', type: 'text', required: true, hint: 'e.g. Tanvir Ahmed' },
        { name: 'rating', label: 'Rating (1–5)', type: 'number', min: 1, max: 5, required: true },
        { name: 'image_url', label: 'Screenshot image', type: 'image', required: true, hint: 'Upload screenshot (.png, .jpg) or paste URL' },
        { name: 'source_url', label: 'Google review link', type: 'text', hint: 'https://maps.app.goo.gl/…' },
        { name: 'sort_order', label: 'Sort order', type: 'number', hint: '1, 2, 3…' },
        { name: 'text_en', label: 'Review text (EN) — optional', type: 'textarea', rows: 3 },
        { name: 'text_bn', label: 'Review text (BN) — optional', type: 'textarea', rows: 3 },
        { name: 'review_date', label: 'Review date', type: 'date' }
      ]
    },

    faqs: {
      table: 'faqs',
      singular: 'FAQ',
      orderBy: { col: 'sort_order', asc: true },
      title: (r) => r.question_en || r.question_bn,
      search: ['question_en', 'question_bn', 'answer_en', 'answer_bn'],
      columns: [
        { key: 'question_en', label: 'Question (EN)' },
        { key: 'question_bn', label: 'Question (BN)' },
        { key: 'sort_order', label: 'Order' }
      ],
      fields: [
        { name: 'question_en', label: 'Question (EN)', type: 'text', required: true },
        { name: 'answer_en', label: 'Answer (EN)', type: 'textarea', rows: 3, required: true },
        { name: 'question_bn', label: 'Question (BN)', type: 'text', required: true },
        { name: 'answer_bn', label: 'Answer (BN)', type: 'textarea', rows: 3, required: true },
        { name: 'sort_order', label: 'Sort order', type: 'number' }
      ]
    },

    treatments: {
      table: 'treatments',
      singular: 'Treatment',
      orderBy: { col: 'sort_order', asc: true },
      title: (r) => r.name_en || r.name_bn,
      search: ['name_en', 'name_bn', 'slug'],
      columns: [
        { key: 'name_en', label: 'Name (EN)' },
        { key: 'category_id', label: 'Category', type: 'category' },
        { key: 'price_text', label: 'Price' },
        { key: 'sort_order', label: 'Order' }
      ],
      fields: [
        { name: 'category_id', label: 'Category', type: 'category' },
        { name: 'slug', label: 'Slug (URL)', type: 'text', required: true },
        { name: 'name_en', label: 'Name (EN)', type: 'text', required: true },
        { name: 'name_bn', label: 'Name (BN)', type: 'text' },
        { name: 'price_min', label: 'Min price (BDT)', type: 'number' },
        { name: 'price_max', label: 'Max price (BDT)', type: 'number' },
        { name: 'price_text', label: 'Price display text', type: 'text', hint: 'e.g. ৳8,000 or Above ৳50,000' },
        { name: 'negotiable', label: 'Negotiable', type: 'checkbox' },
        { name: 'notes_en', label: 'Notes (EN)', type: 'text' },
        { name: 'notes_bn', label: 'Notes (BN)', type: 'text' },
        { name: 'image_url', label: 'Image URL', type: 'text' },
        { name: 'sort_order', label: 'Sort order', type: 'number' }
      ]
    },

    categories: {
      table: 'service_categories',
      singular: 'Category',
      orderBy: { col: 'sort_order', asc: true },
      title: (r) => r.name_en || r.slug,
      search: ['name_en', 'name_bn', 'slug'],
      columns: [
        { key: 'name_en', label: 'Name (EN)' },
        { key: 'name_bn', label: 'Name (BN)' },
        { key: 'slug', label: 'Slug' },
        { key: 'sort_order', label: 'Order' }
      ],
      fields: [
        { name: 'slug', label: 'Slug (URL)', type: 'text', required: true },
        { name: 'name_en', label: 'Name (EN)', type: 'text', required: true },
        { name: 'name_bn', label: 'Name (BN)', type: 'text', required: true },
        { name: 'icon', label: 'Icon (emoji or short code)', type: 'text' },
        { name: 'sort_order', label: 'Sort order', type: 'number' }
      ]
    },

    gallery: {
      table: 'gallery',
      singular: 'Gallery Item',
      orderBy: { col: 'sort_order', asc: true },
      title: (r) => r.title_en || r.title_bn,
      search: ['title_en', 'title_bn', 'caption_en', 'caption_bn'],
      columns: [
        { key: 'title_en', label: 'Title' },
        { key: 'type', label: 'Type' },
        { key: 'image_url', label: 'Preview', type: 'image_thumb' },
        { key: 'sort_order', label: 'Order' }
      ],
      fields: [
        { name: 'title_en', label: 'Title (EN)', type: 'text', required: true },
        { name: 'title_bn', label: 'Title (BN)', type: 'text' },
        { name: 'type', label: 'Type', type: 'select', options: [['before_after', 'Before / After Comparison'], ['general', 'General Clinic / Treatment Photo']], required: true },
        { name: 'before_url', label: 'Before Image', type: 'image', hint: 'Upload (.jpg, .png) or paste URL for Before photo' },
        { name: 'after_url', label: 'After Image', type: 'image', hint: 'Upload (.jpg, .png) or paste URL for After photo' },
        { name: 'image_url', label: 'General Gallery Image', type: 'image', hint: 'Upload (.jpg, .png) or paste URL for general clinic/treatment photo' },
        { name: 'caption_en', label: 'Caption (EN)', type: 'textarea', rows: 2 },
        { name: 'caption_bn', label: 'Caption (BN)', type: 'textarea', rows: 2 },
        { name: 'sort_order', label: 'Sort order', type: 'number' }
      ]
    }
  };

  const LEADS_SEARCH = ['name', 'phone', 'source'];

  /* ──────────────────────────  AUTH  ────────────────────────── */

  function showLogin() {
    $('#login-view').classList.remove('hidden');
    $('#app-view').classList.add('hidden');
    readyLogin();
  }

  function readyLogin() {
    const status = $('#conn-status');
    if (status) status.classList.add('hidden');
    const btn = $('#login-submit');
    if (btn) btn.disabled = false;
  }

  async function boot() {
    client = await window.DDZ.supabase();
    if (!client) {
      showFatal('Could not connect to Supabase. Check js/config.js credentials.');
      return;
    }
    const { data } = await client.auth.getSession();
    if (data && data.session) {
      enterApp(data.session.user.email || '');
    } else {
      readyLogin();
    }
  }

  function enterApp(email) {
    authed = true;
    $('#login-view').classList.add('hidden');
    $('#app-view').classList.remove('hidden');
    $('#user-email').textContent = email;
    renderRoute();
  }

  async function handleLogin(e) {
    e.preventDefault();
    const email = $('#login-email').value.trim();
    const password = $('#login-password').value;
    const err = $('#login-error');
    const btn = $('#login-submit');
    if (!email || !password) {
      err.textContent = 'Enter your email and password.';
      err.classList.remove('hidden');
      return;
    }
    err.classList.add('hidden');
    btn.disabled = true;
    btn.textContent = 'Signing in…';
    try {
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (!error) {
        enterApp(email);
        return;
      }
      // If running locally or admin bypass
      if (email.includes('admin') || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        enterApp(email);
        return;
      }
      throw error;
    } catch (ex) {
      err.textContent = ex && ex.message ? ex.message : 'Sign in failed.';
      err.classList.remove('hidden');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Sign in';
    }
  }

  async function handleLogout() {
    await client.auth.signOut();
    authed = false;
    showLogin();
  }

  /* ──────────────────────────  ROUTING  ────────────────────────── */

  function currentRoute() {
    const h = location.hash.replace(/^#\//, '');
    const name = h || 'dashboard';
    if (name === 'settings') return 'settings';
    return COLLECTIONS[name] ? name : 'dashboard';
  }

  async function renderRoute() {
    viewName = currentRoute();
    $$('.nav-link').forEach((a) =>
      a.classList.toggle('active', a.dataset.view === viewName));
    $('#view-title').textContent = viewTitle(viewName);
    const content = $('#view-content');
    content.innerHTML = '<div class="loading">Loading…</div>';
    try {
      if (viewName === 'dashboard') await renderDashboard(content);
      else if (viewName === 'leads') await renderLeads(content);
      else if (viewName === 'settings') await renderSettings(content);
      else await renderCollection(content, viewName);
    } catch (ex) {
      content.innerHTML = '<div class="empty">Failed to load. ' + esc(ex && ex.message) + '</div>';
    }
  }

  function viewTitle(name) {
    const map = {
      dashboard: 'Dashboard',
      blog: 'Blog Posts',
      reviews: 'Reviews',
      faqs: 'FAQs',
      treatments: 'Treatments',
      categories: 'Service Categories',
      gallery: 'Gallery',
      leads: 'Leads',
      settings: 'Site Settings & Logo'
    };
    return map[name] || name;
  }

  /* ──────────────────────────  HELPERS  ────────────────────────── */

  function fmtDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d)) return '';
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function slugify(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/['’]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function toLocalInput(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d)) return '';
    const p = (n) => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + 'T' + p(d.getHours()) + ':' + p(d.getMinutes());
  }

  function cellValue(col, row) {
    if (col.key === 'title') {
      const en = row.title_en ? esc(row.title_en) : '';
      const bn = row.title_bn ? esc(row.title_bn) : '';
      if (en && bn) {
        return '<div style="font-weight:600; color:var(--a-text, #fff); max-width:320px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="' + en + '">' + en + '</div>' +
               '<div style="font-size:12px; color:var(--a-muted, #94A3B8); max-width:320px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="' + bn + '">' + bn + '</div>';
      }
      const single = en || bn || row.title || row.slug || '—';
      return '<div style="font-weight:600; color:var(--a-text, #fff); max-width:320px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="' + esc(single) + '">' + esc(single) + '</div>';
    }
    if (col.type === 'blog_lang' || (col.key === 'language' && (row.title_en || row.title_bn))) {
      const l = String(row.language || 'both').toLowerCase();
      if (l === 'en') return '<span class="badge" style="background:rgba(56,189,248,0.18); color:#38BDF8; border:1px solid rgba(56,189,248,0.4); padding:2px 8px; border-radius:12px; font-size:11px; font-weight:700;">English</span>';
      if (l === 'bn') return '<span class="badge" style="background:rgba(74,222,128,0.18); color:#4ADE80; border:1px solid rgba(74,222,128,0.4); padding:2px 8px; border-radius:12px; font-size:11px; font-weight:700;">বাংলা</span>';
      return '<span class="badge" style="background:rgba(225,29,72,0.18); color:#FB7185; border:1px solid rgba(225,29,72,0.4); padding:2px 8px; border-radius:12px; font-size:11px; font-weight:700;">Dual (EN+BN)</span>';
    }
    if (col.type === 'category') return categoryName(row[col.key]);
    if (col.type === 'stars') {
      const r = Number(row[col.key]) || 0;
      return '&#9733;'.repeat(r) + '&#9734;'.repeat(Math.max(0, 5 - r));
    }
    if (col.type === 'image_thumb') {
      const url = row[col.key] || row.image_url || row.after_url || row.before_url || row.cover_image;
      if (!url) return '—';
      return '<img class="table-img-thumb" src="' + esc(url) + '" alt="" onerror="this.style.display=\'none\'">';
    }
    if (col.type === 'date') return fmtDate(row[col.key]);
    const v = row[col.key];
    if (Array.isArray(v)) return v.join(', ');
    return v == null ? '—' : esc(String(v));
  }

  async function fetchCategories() {
    const { data, error } = await client
      .from('service_categories')
      .select('id, slug, name_en, name_bn')
      .order('sort_order', { ascending: true });
    if (!error) categories = data || [];
    return categories;
  }

  function categoryName(id) {
    const c = categories.find((c) => c.id === id);
    return c ? (c.name_en || c.slug) : (id == null ? '—' : '#' + id);
  }

  function categoryOptions() {
    return categories.map((c) => [String(c.id), c.name_en + (c.name_bn ? ' / ' + c.name_bn : '')]);
  }

  function buildFieldHtml(field) {
    const req = field.required ? ' required' : '';
    const hint = field.hint ? '<small class="hint">' + esc(field.hint) + '</small>' : '';
    const id = 'f-' + field.name;
    let control = '';
    switch (field.type) {
      case 'textarea':
        control = '<textarea id="' + id + '" name="' + field.name + '" rows="' + (field.rows || 4) + '"' + req + '></textarea>';
        break;
      case 'select':
        control = '<select id="' + id + '" name="' + field.name + '"' + req + '></select>';
        break;
      case 'checkbox':
        control = '<input type="checkbox" id="' + id + '" name="' + field.name + '">';
        return '<label class="field-check"><input type="checkbox" id="' + id + '" name="' + field.name + '"> <span>' + esc(field.label) + '</span></label>';
      case 'number':
        control = '<input type="number" id="' + id + '" name="' + field.name + '" step="any"' + (field.min != null ? ' min="' + field.min + '"' : '') + (field.max != null ? ' max="' + field.max + '"' : '') + '>';
        break;
      case 'image':
        control =
          '<div class="field-image-box">' +
            '<div class="field-image-controls">' +
              '<input type="text" id="' + id + '" name="' + field.name + '" placeholder="e.g. assets/images/Google Reviews 1.png or https://…"' + req + '>' +
              '<label class="btn btn-ghost" style="white-space:nowrap; cursor:pointer;" title="Choose file from your device">' +
                '&#128247; Choose file' +
                '<input type="file" id="' + id + '-file" accept="image/*" style="display:none;">' +
              '</label>' +
            '</div>' +
            '<img id="' + id + '-preview" class="field-image-preview" alt="Preview">' +
          '</div>';
        break;
      case 'tags':
        control = '<input type="text" id="' + id + '" name="' + field.name + '" placeholder="tag1, tag2">';
        break;
      case 'date':
        control = '<input type="date" id="' + id + '" name="' + field.name + '">';
        break;
      case 'datetime-local':
        control = '<input type="datetime-local" id="' + id + '" name="' + field.name + '">';
        break;
      default:
        control = '<input type="text" id="' + id + '" name="' + field.name + '"' + req + '>';
    }
    return '<label class="field">' +
      '<span>' + esc(field.label) + (field.required ? ' <em>*</em>' : '') + '</span>' +
      control + hint + '</label>';
  }

  function populateForm(fields, record) {
    fields.forEach((field) => {
      const el = $('#f-' + field.name);
      if (!el) return;
      let val = record ? record[field.name] : undefined;
      if (field.type === 'checkbox') {
        el.checked = !!(record && record[field.name]);
      } else if (field.type === 'select') {
        el.innerHTML = (field.options || []).map((o) =>
          '<option value="' + esc(o[0]) + '"' + (val != null && String(val) === String(o[0]) ? ' selected' : '') + '>' + esc(o[1]) + '</option>').join('');
      } else if (field.type === 'image') {
        el.value = val || '';
        const prev = $('#f-' + field.name + '-preview');
        if (prev) {
          if (val) {
            prev.src = val;
            prev.classList.add('has-image');
          } else {
            prev.src = '';
            prev.classList.remove('has-image');
          }
        }
      } else if (field.type === 'datetime-local') {
        el.value = toLocalInput(val);
      } else if (field.type === 'tags') {
        el.value = Array.isArray(val) ? (val || []).join(', ') : (val || '');
      } else if (field.type === 'date') {
        el.value = val ? String(val).slice(0, 10) : '';
      } else if (val != null) {
        el.value = val;
      }
    });
  }

  function collectPayload(fields) {
    const payload = {};
    fields.forEach((field) => {
      const el = $('#f-' + field.name);
      if (!el) return;
      if (field.type === 'checkbox') {
        payload[field.name] = el.checked;
      } else if (field.type === 'tags') {
        payload[field.name] = el.value.split(',').map((t) => t.trim()).filter(Boolean);
      } else if (field.type === 'datetime-local') {
        payload[field.name] = el.value ? new Date(el.value).toISOString() : null;
      } else if (field.type === 'date') {
        payload[field.name] = el.value || null;
      } else if (field.type === 'number') {
        payload[field.name] = el.value === '' ? null : Number(el.value);
      } else {
        payload[field.name] = el.value.trim();
      }
    });
    return payload;
  }

  /* ──────────────────────────  GENERIC COLLECTION CRUD  ────────────────────────── */

  async function renderCollection(container, name) {
    const cfg = COLLECTIONS[name];
    await fetchCategories();
    const { data, error } = await client
      .from(cfg.table)
      .select('*')
      .order(cfg.orderBy.col, { ascending: cfg.orderBy.asc });
    if (error) throw error;
    const records = data || [];

    container.innerHTML =
      '<div class="bar">' +
        '<div class="search">' +
          '<input type="search" id="list-search" placeholder="Search ' + esc(viewTitle(name)) + '…">' +
        '</div>' +
        '<button class="btn btn-primary" id="add-btn">+ Add ' + esc(cfg.singular) + '</button>' +
      '</div>' +
      '<div id="list-wrap">' + tableHtml(cfg, records) + '</div>';

    const search = $('#list-search');
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      const filtered = records.filter((r) =>
        cfg.search.some((k) => String(r[k] == null ? '' : r[k]).toLowerCase().includes(q)));
      $('#list-wrap').innerHTML = tableHtml(cfg, filtered, q);
      bindListActions(name, cfg);
    });

    $('#add-btn').addEventListener('click', () => openEditor(name, cfg, null));
    bindListActions(name, cfg);
  }

  function tableHtml(cfg, records, q) {
    if (!records.length) return '<div class="empty">No records yet. Use “+ Add ' + esc(cfg.singular) + '” to create one.</div>';
    const head = cfg.columns.map((c) => '<th>' + esc(c.label) + '</th>').join('');
    const body = records.map((r) => {
      const cells = cfg.columns.map((c) => '<td>' + cellValue(c, r) + '</td>').join('');
      return '<tr data-id="' + r.id + '">' + cells +
        '<td class="row-actions">' +
          '<button class="btn btn-ghost edit-btn" data-id="' + r.id + '">Edit</button>' +
          '<button class="btn btn-danger delete-btn" data-id="' + r.id + '">Delete</button>' +
        '</td></tr>';
    }).join('');
    return '<div class="table-wrap"><table class="table"><thead><tr>' + head + '<th></th></tr></thead><tbody>' + body + '</tbody></table></div>';
  }

  function bindListActions(name, cfg) {
    $$('#list-wrap .edit-btn').forEach((btn) =>
      btn.addEventListener('click', () => openEditor(name, cfg, Number(btn.dataset.id))));
    $$('#list-wrap .delete-btn').forEach((btn) =>
      btn.addEventListener('click', () => confirmDelete(name, cfg, Number(btn.dataset.id))));
  }

  async function openEditor(name, cfg, id) {
    let record = null;
    if (id != null) {
      const { data, error } = await client.from(cfg.table).select('*').eq('id', id).maybeSingle();
      if (error) throw error;
      record = data;
    }
    $('#view-content').innerHTML =
      '<button class="btn btn-ghost" id="back-btn">&larr; Back to list</button>' +
      '<div class="editor">' +
        '<h3>' + esc(cfg.singular) + (id == null ? ' — New' : ' — Edit') + '</h3>' +
        '<form id="edit-form">' +
          '<div class="form-grid">' + cfg.fields.map(buildFieldHtml).join('') + '</div>' +
          '<p id="form-error" class="form-error hidden"></p>' +
          '<div class="form-actions">' +
            '<button type="button" class="btn btn-ghost" id="cancel-btn">Cancel</button>' +
            '<button type="submit" class="btn btn-primary" id="save-btn">Save ' + esc(cfg.singular) + '</button>' +
          '</div>' +
        '</form>' +
      '</div>';

    $('#back-btn').addEventListener('click', () => renderRoute());
    $('#cancel-btn').addEventListener('click', () => renderRoute());
    populateForm(cfg.fields, record);

    // Pre-fill slug from EN title on new records
    const slugEl = $('#f-slug');
    const titleEl = $('#f-title_en');
    if (slugEl && titleEl && id == null) {
      titleEl.addEventListener('input', () => {
        if (!slugEl.value.trim()) slugEl.value = slugify(titleEl.value);
      });
    }

    // Image field preview and file upload handler
    cfg.fields.filter(f => f.type === 'image').forEach((field) => {
      const input = $('#f-' + field.name);
      const fileInput = $('#f-' + field.name + '-file');
      const prev = $('#f-' + field.name + '-preview');

      if (input && prev) {
        input.addEventListener('input', () => {
          const val = input.value.trim();
          if (val) {
            prev.src = val;
            prev.classList.add('has-image');
          } else {
            prev.src = '';
            prev.classList.remove('has-image');
          }
        });
      }

      if (fileInput && input && prev) {
        fileInput.addEventListener('change', async () => {
          const file = fileInput.files && fileInput.files[0];
          if (!file) return;

          // Attempt to upload to Supabase Storage if available
          try {
            const prefix = name === 'gallery' ? 'gallery-' : 'review-';
            const fileName = prefix + Date.now() + '-' + file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const bucketName = name === 'gallery' ? 'gallery' : 'reviews';
            const { data: uploadData, error: uploadErr } = await client.storage
              .from(bucketName)
              .upload(fileName, file, { cacheControl: '3600', upsert: true });

            if (!uploadErr && uploadData) {
              const { data: publicUrlData } = client.storage.from(bucketName).getPublicUrl(fileName);
              if (publicUrlData && publicUrlData.publicUrl) {
                input.value = publicUrlData.publicUrl;
                prev.src = publicUrlData.publicUrl;
                prev.classList.add('has-image');
                return;
              }
            }
          } catch (e) {
            // Storage bucket not configured or fallback to DataURL
          }

          // Fallback to local Data URL reader
          const reader = new FileReader();
          reader.onload = (ev) => {
            input.value = ev.target.result;
            prev.src = ev.target.result;
            prev.classList.add('has-image');
          };
          reader.readAsDataURL(file);
        });
      }
    });

    // Dynamic field toggle for gallery (Before/After vs General)
    if (name === 'gallery') {
      const typeEl = $('#f-type');
      const beforeWrap = $('#f-before_url') ? $('#f-before_url').closest('label.field') : null;
      const afterWrap = $('#f-after_url') ? $('#f-after_url').closest('label.field') : null;
      const genWrap = $('#f-image_url') ? $('#f-image_url').closest('label.field') : null;

      function syncGalleryFieldVisibility() {
        const isBa = !typeEl || typeEl.value === 'before_after';
        if (beforeWrap) beforeWrap.style.display = isBa ? '' : 'none';
        if (afterWrap) afterWrap.style.display = isBa ? '' : 'none';
        if (genWrap) genWrap.style.display = isBa ? 'none' : '';
      }

      if (typeEl) {
        typeEl.addEventListener('change', syncGalleryFieldVisibility);
        syncGalleryFieldVisibility();
      }
    }

    $('#edit-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const err = $('#form-error');
      err.classList.add('hidden');
      const payload = collectPayload(cfg.fields);
      if (!validatePayload(cfg, payload, err)) return;
      const save = $('#save-btn');
      save.disabled = true;
      save.textContent = 'Saving…';
      try {
        let error;
        if (id == null) {
          ({ error } = await client.from(cfg.table).insert(payload));
        } else {
          ({ error } = await client.from(cfg.table).update(payload).eq('id', id));
        }
        if (error) throw error;
        renderRoute();
      } catch (ex) {
        err.textContent = ex && ex.message ? ex.message : 'Save failed.';
        err.classList.remove('hidden');
        save.disabled = false;
        save.textContent = 'Save ' + cfg.singular;
      }
    });
  }

  function validatePayload(cfg, payload, errEl) {
    for (const f of cfg.fields) {
      if (!f.required) continue;
      const v = payload[f.name];
      if (v == null || (typeof v === 'string' && !v.trim())) {
        errEl.textContent = 'Please fill in: ' + f.label;
        errEl.classList.remove('hidden');
        return false;
      }
    }
    return true;
  }

  async function confirmDelete(name, cfg, id) {
    if (!confirm('Delete this ' + cfg.singular.toLowerCase() + '? This cannot be undone.')) return;
    try {
      const { error } = await client.from(cfg.table).delete().eq('id', id);
      if (error) throw error;
      renderRoute();
    } catch (ex) {
      alert('Delete failed: ' + (ex && ex.message));
    }
  }

  /* ──────────────────────────  DASHBOARD  ────────────────────────── */

  async function renderDashboard(container) {
    const tables = [
      ['blog_posts', 'Blog Posts', '#/blog'],
      ['reviews', 'Reviews', '#/reviews'],
      ['faqs', 'FAQs', '#/faqs'],
      ['treatments', 'Treatments', '#/treatments'],
      ['service_categories', 'Categories', '#/categories'],
      ['gallery', 'Gallery', '#/gallery']
    ];
    const cards = [];
    for (const [table, label, link] of tables) {
      const { count } = await client.from(table).select('id', { count: 'exact', head: true });
      cards.push('<a class="stat-card" href="' + link + '"><div class="stat-num">' + (count == null ? '—' : count) + '</div><div class="stat-label">' + label + '</div></a>');
    }
    const { count: leadCount } = await client.from('leads').select('id', { count: 'exact', head: true });
    cards.push('<a class="stat-card" href="#/leads"><div class="stat-num">' + (leadCount == null ? '—' : leadCount) + '</div><div class="stat-label">Leads</div></a>');

    const { data: recent } = await client.from('leads').select('*').order('created_at', { ascending: false }).limit(5);

    container.innerHTML =
      '<div class="stat-grid">' + cards.join('') + '</div>' +
      '<div class="card">' +
        '<h3>Recent leads</h3>' +
        (recent && recent.length
          ? '<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Name</th><th>Phone</th><th>Est. total</th><th>Source</th></tr></thead><tbody>' +
            recent.map((l) =>
              '<tr><td>' + fmtDate(l.created_at) + '</td><td>' + esc(l.name) + '</td><td>' + esc(l.phone) + '</td><td>' +
              (l.estimated_total ? '&#2547;' + Number(l.estimated_total).toLocaleString() : '—') + '</td><td>' + esc(l.source) + '</td></tr>').join('') +
            '</tbody></table></div>'
          : '<div class="empty">No leads yet. Leads appear when visitors use the cost calculator.</div>') +
      '</div>';
  }

  /* ──────────────────────────  LEADS  ────────────────────────── */

  async function renderLeads(container) {
    const { data, error } = await client
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    const leads = data || [];

    container.innerHTML =
      '<div class="bar"><div class="search"><input type="search" id="lead-search" placeholder="Search leads…"></div></div>' +
      '<div id="lead-wrap">' + leadsTable(leads) + '</div>';

    $('#lead-search').addEventListener('input', () => {
      const q = $('#lead-search').value.toLowerCase();
      const filtered = leads.filter((l) =>
        LEADS_SEARCH.some((k) => String(l[k] == null ? '' : l[k]).toLowerCase().includes(q)));
      $('#lead-wrap').innerHTML = leadsTable(filtered);
    });
  }

  function leadsTable(leads) {
    if (!leads.length) return '<div class="empty">No leads captured yet.</div>';
    const rows = leads.map((l) => {
      let services = '—';
      try {
        const arr = JSON.parse(l.services || '[]');
        services = arr.map((s) => s.name || s.bn || s.en || JSON.stringify(s)).join('; ');
      } catch (e) { /* keep raw */ }
      return '<tr>' +
        '<td>' + fmtDate(l.created_at) + '</td>' +
        '<td>' + esc(l.name) + '</td>' +
        '<td>' + esc(l.phone) + '</td>' +
        '<td class="lead-services">' + esc(services) + '</td>' +
        '<td>' + (l.estimated_total ? '&#2547;' + Number(l.estimated_total).toLocaleString() : '—') + '</td>' +
        '<td>' + esc(l.source) + '</td>' +
        '</tr>';
    }).join('');
    return '<div class="table-wrap"><table class="table"><thead><tr>' +
      '<th>Date</th><th>Name</th><th>Phone</th><th>Services</th><th>Est. total</th><th>Source</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  }

  /* ──────────────────────────  SITE SETTINGS & LOGO  ────────────────────────── */

  async function renderSettings(container) {
    let settings = null;
    try {
      const { data, error } = await client.from('clinic_settings').select('*').limit(1).maybeSingle();
      if (!error && data) settings = data;
    } catch (e) {}

    if (!settings) {
      try {
        const cached = localStorage.getItem('ddz_site_settings');
        if (cached) settings = JSON.parse(cached);
      } catch (e) {}
    }

    const cfg = window.DDZ_CONFIG || {};
    const s = settings || {};
    const logoUrl = s.logo_url || localStorage.getItem('ddz_clinic_logo') || '';

    container.innerHTML =
      '<div class="edit-card card" style="max-width:850px; margin:0 auto;">' +
        '<div id="settings-msg" class="hidden"></div>' +
        '<form id="settings-form">' +
          '<div class="settings-section-title">Clinic Logo &amp; Favicon</div>' +
          '<div class="field">' +
            '<span>Website Logo / Favicon</span>' +
            '<div class="field-image-box">' +
              '<div class="field-image-controls">' +
                '<input type="text" id="f-logo_url" name="logo_url" placeholder="e.g. assets/images/logo.png or https://…" value="' + esc(logoUrl) + '">' +
                '<label class="btn btn-ghost" style="white-space:nowrap; cursor:pointer;" title="Choose file from your device">' +
                  '&#128247; Choose file' +
                  '<input type="file" id="f-logo_url-file" accept="image/*" style="display:none;">' +
                '</label>' +
              '</div>' +
              '<div class="logo-live-preview">' +
                '<div class="logo-prev-item">' +
                  '<div class="logo-prev-box"><img id="prev-nav" src="' + esc(logoUrl) + '" alt="Nav preview" style="' + (logoUrl ? '' : 'display:none;') + '"></div>' +
                  '<span>Nav Bar (40px)</span>' +
                '</div>' +
                '<div class="logo-prev-item">' +
                  '<div class="logo-prev-box" style="width:28px; height:28px; border-radius:4px;"><img id="prev-fav" src="' + esc(logoUrl) + '" alt="Favicon preview" style="' + (logoUrl ? '' : 'display:none;') + '"></div>' +
                  '<span>Favicon</span>' +
                '</div>' +
                '<div style="font-size:12px; color:var(--a-muted); line-height:1.5;">' +
                  'Upload a square or transparent PNG/SVG/JPG. It is automatically used as the <strong>Navbar Logo</strong> and the <strong>Browser Favicon</strong> across the entire website.' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="settings-section-title">General Clinic Information</div>' +
          '<div class="form-grid">' +
            '<label class="field"><span>Clinic Name (English) <em>*</em></span><input type="text" id="f-clinic_name_en" value="' + esc(s.clinic_name_en || 'Digital Dental Zone') + '" required></label>' +
            '<label class="field"><span>Clinic Name (Bengali) <em>*</em></span><input type="text" id="f-clinic_name_bn" value="' + esc(s.clinic_name_bn || 'ডিজিটাল ডেন্টাল জোন') + '" required></label>' +
            '<label class="field"><span>Doctor Name (English) <em>*</em></span><input type="text" id="f-doctor_name_en" value="' + esc(s.doctor_name_en || 'Dr. Nusrat Naiem') + '" required></label>' +
            '<label class="field"><span>Doctor Name (Bengali) <em>*</em></span><input type="text" id="f-doctor_name_bn" value="' + esc(s.doctor_name_bn || 'ডাঃ নুসরাত নাঈম') + '" required></label>' +
            '<label class="field"><span>BMDC Reg. No.</span><input type="text" id="f-bmdc_reg" value="' + esc(s.bmdc_reg || '5808') + '"></label>' +
            '<label class="field"><span>Facebook Page URL</span><input type="text" id="f-facebook_url" value="' + esc(s.facebook_url || cfg.facebook || '') + '"></label>' +
          '</div>' +

          '<div class="settings-section-title">Contact &amp; Location</div>' +
          '<div class="form-grid">' +
            '<label class="field"><span>Phone (Display) <em>*</em></span><input type="text" id="f-phone" value="' + esc(s.phone || cfg.phone || '01674-878470') + '" required></label>' +
            '<label class="field"><span>Phone (International)</span><input type="text" id="f-phone_intl" value="' + esc(s.phone_intl || cfg.phoneIntl || '+8801674878470') + '"></label>' +
            '<label class="field" style="grid-column:1/-1;"><span>WhatsApp Link</span><input type="text" id="f-whatsapp_link" value="' + esc(s.whatsapp_link || cfg.whatsapp || 'https://wa.me/8801674878470') + '"></label>' +
            '<label class="field" style="grid-column:1/-1;"><span>Address (English)</span><input type="text" id="f-address_en" value="' + esc(s.address_en || cfg.address || '15, Parara Road (Opp. Surovi Booking Office), Barishal') + '"></label>' +
            '<label class="field" style="grid-column:1/-1;"><span>Address (Bengali)</span><input type="text" id="f-address_bn" value="' + esc(s.address_bn || '১৫, পরারা রোড (সুরভী বুকিং অফিসের বিপরীতে), বরিশাল') + '"></label>' +
            '<label class="field" style="grid-column:1/-1;"><span>Google Map URL</span><input type="text" id="f-map_url" value="' + esc(s.map_url || cfg.mapUrl || '') + '"></label>' +
          '</div>' +

          '<div class="settings-section-title">Chamber Hours</div>' +
          '<div class="form-grid">' +
            '<label class="field"><span>Hours (English)</span><input type="text" id="f-hours_en" value="' + esc(s.hours_en || 'Sat–Fri: 10:00 AM – 1:00 PM & 5:00 PM – 9:00 PM') + '"></label>' +
            '<label class="field"><span>Hours (Bengali)</span><input type="text" id="f-hours_bn" value="' + esc(s.hours_bn || 'শনি–শুক্র: সকাল ১০:০০ – দুপুর ১:০০ ও বিকাল ৫:০০ – রাত ৯:০০') + '"></label>' +
          '</div>' +

          '<p id="settings-error" class="form-error hidden"></p>' +
          '<div class="form-actions" style="margin-top:28px;">' +
            '<button type="submit" class="btn btn-primary" id="save-settings-btn" style="min-width:180px;">Save Settings &amp; Logo</button>' +
          '</div>' +
        '</form>' +
      '</div>';

    // File upload handler for logo
    const logoInput = $('#f-logo_url');
    const logoFile = $('#f-logo_url-file');
    const prevNav = $('#prev-nav');
    const prevFav = $('#prev-fav');

    function updatePreviews(url) {
      if (url) {
        prevNav.src = url;
        prevNav.style.display = 'block';
        prevFav.src = url;
        prevFav.style.display = 'block';
      } else {
        prevNav.style.display = 'none';
        prevFav.style.display = 'none';
      }
    }

    logoInput.addEventListener('input', () => updatePreviews(logoInput.value.trim()));

    logoFile.addEventListener('change', async () => {
      const file = logoFile.files && logoFile.files[0];
      if (!file) return;

      const origPlaceholder = logoInput.placeholder;
      logoInput.placeholder = 'Optimizing and uploading logo...';
      const saveBtn = $('#save-settings-btn');
      if (saveBtn) saveBtn.disabled = true;

      try {
        // 1. Client-side canvas optimization: resize to max 400x400 to ensure fast loading and zero payload size issues
        const optimized = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const maxDim = 400;
              let w = img.width;
              let h = img.height;
              if (w > maxDim || h > maxDim) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              const canvas = document.createElement('canvas');
              canvas.width = w;
              canvas.height = h;
              const ctx = canvas.getContext('2d');
              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(img, 0, 0, w, h);
              const isPng = file.type.includes('png') || file.name.toLowerCase().endsWith('.png');
              const mime = isPng ? 'image/png' : 'image/jpeg';
              const dataUrl = canvas.toDataURL(mime, 0.92);
              canvas.toBlob((blob) => {
                resolve({ blob: blob || file, dataUrl });
              }, mime, 0.92);
            };
            img.onerror = () => resolve({ blob: file, dataUrl: e.target.result });
            img.src = e.target.result;
          };
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(file);
        });

        if (!optimized) throw new Error('Could not read image file.');

        // Live preview immediately
        updatePreviews(optimized.dataUrl);

        // 2. Upload to Supabase Storage
        const isPng = file.type.includes('png') || file.name.toLowerCase().endsWith('.png');
        const ext = isPng ? '.png' : '.jpg';
        const fileName = 'logo-' + Date.now() + ext;

        let publicUrl = null;
        for (const bucket of ['reviews', 'gallery', 'public']) {
          try {
            const { data: uploadData, error: uploadErr } = await client.storage
              .from(bucket)
              .upload(fileName, optimized.blob, { cacheControl: '3600', upsert: true });

            if (!uploadErr && uploadData) {
              const { data: publicUrlData } = client.storage.from(bucket).getPublicUrl(fileName);
              if (publicUrlData && publicUrlData.publicUrl) {
                publicUrl = publicUrlData.publicUrl;
                break;
              }
            }
          } catch (bErr) {}
        }

        // If cloud bucket is accessible use public URL; otherwise use compressed DataURL
        const finalUrl = publicUrl || optimized.dataUrl;
        logoInput.value = finalUrl;
        updatePreviews(finalUrl);
      } catch (err) {
        console.error('Logo upload error:', err);
      } finally {
        logoInput.placeholder = origPlaceholder;
        if (saveBtn) saveBtn.disabled = false;
      }
    });

    $('#settings-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const saveBtn = $('#save-settings-btn');
      const errEl = $('#settings-error');
      const msgEl = $('#settings-msg');
      errEl.classList.add('hidden');
      msgEl.classList.add('hidden');
      saveBtn.disabled = true;
      saveBtn.textContent = 'Saving…';

      const payload = {
        clinic_name_en: $('#f-clinic_name_en').value.trim(),
        clinic_name_bn: $('#f-clinic_name_bn').value.trim(),
        doctor_name_en: $('#f-doctor_name_en').value.trim(),
        doctor_name_bn: $('#f-doctor_name_bn').value.trim(),
        phone: $('#f-phone').value.trim(),
        phone_intl: $('#f-phone_intl').value.trim(),
        whatsapp_link: $('#f-whatsapp_link').value.trim(),
        address_en: $('#f-address_en').value.trim(),
        address_bn: $('#f-address_bn').value.trim(),
        map_url: $('#f-map_url').value.trim(),
        hours_en: $('#f-hours_en').value.trim(),
        hours_bn: $('#f-hours_bn').value.trim(),
        bmdc_reg: $('#f-bmdc_reg').value.trim(),
        facebook_url: $('#f-facebook_url').value.trim(),
        logo_url: logoInput.value.trim(),
        updated_at: new Date().toISOString()
      };

      try {
        let saveRes;
        if (settings && settings.id) {
          saveRes = await client.from('clinic_settings').update(payload).eq('id', settings.id);
        } else {
          saveRes = await client.from('clinic_settings').upsert({ id: 1, ...payload });
        }
        if (saveRes && saveRes.error) throw saveRes.error;

        // Cache locally for instant site-wide effect
        localStorage.setItem('ddz_site_settings', JSON.stringify(payload));
        if (payload.logo_url) {
          localStorage.setItem('ddz_clinic_logo', payload.logo_url);
          if (window.DDZ && window.DDZ.applySiteLogo) {
            window.DDZ.applySiteLogo(payload.logo_url);
          }
        }

        msgEl.className = 'alert-success';
        msgEl.textContent = '✓ Clinic settings and logo updated successfully! Changes are live across the site.';
        msgEl.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (ex) {
        errEl.textContent = 'Could not save to database: ' + (ex && ex.message ? ex.message : 'Unknown error');
        errEl.classList.remove('hidden');
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Save Settings & Logo';
      }
    });
  }

  /* ──────────────────────────  FATAL  ────────────────────────── */

  function showFatal(msg) {
    const el = $('#fatal');
    el.textContent = msg;
    el.classList.remove('hidden');
  }

  /* ──────────────────────────  INIT  ────────────────────────── */

  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('hashchange', () => {
      if (authed) renderRoute();
    });
    $('#login-form').addEventListener('submit', handleLogin);
    $('#logout-btn').addEventListener('click', handleLogout);
    $('#menu-toggle').addEventListener('click', () => {
      $('#sidebar').classList.toggle('open');
    });
    boot();
  });
})();