/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Cost Calculator
   Source data: "Digital Dental Zone - Price List.md"
   10 categories · receipt-style total · Supabase lead capture
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Price data (BDT) ──
     value : numeric amount used for the total (null = price on consultation)
     label : price display text                                */
  const CATEGORIES = [
    {
      name: { en: 'Diagnostics & General Dentistry', bn: 'ডায়াগনস্টিকস ও সাধারণ দন্তচিকিৎসা' },
      items: [
        { id: 'consultation-fee', code: '1.a', en: 'Consultation Fee', bn: 'পরামর্শ ফি', value: 700, label: '৳700' },
        { id: 'scaling-polishing', code: '1.b', en: 'Scaling & Polishing', bn: 'স্কেলিং ও পলিশিং', value: 3000, label: '৳3,000' },
        { id: 'traditional-filling', code: '1.c', en: 'Traditional Filling', bn: 'সাধারণ ফিলিং', value: 4000, label: '৳4,000' },
        { id: 'tooth-whitening', code: '1.d', en: 'Tooth Whitening', bn: 'দাঁত সাদা করা', value: 15000, label: '৳15,000' }
      ]
    },
    {
      name: { en: 'Root Canal & Restorations', bn: 'রুট ক্যানাল ও রেস্টোরেশন' },
      items: [
        { id: 'rct-endomotor', code: '2.a', en: 'RCT (using Endomotor)', bn: 'রুট ক্যানাল (এন্ডোমোটর)', value: 8000, label: '৳8,000' },
        { id: 're-rct', code: '2.b', en: 'Re-RCT', bn: 'রি-রুট ক্যানাল', value: 15000, label: '৳15,000' },
        { id: 'rct-full-package', code: '2.c', en: 'RCT + Post Core + Zirconia Crown (Full Package)', bn: 'রুট ক্যানাল + পোস্ট কোর + জিরকোনিয়া ক্রাউন (সম্পূর্ণ প্যাকেজ)', value: 25000, label: '৳25,000' },
        { id: 'inlay', code: '2.d', en: 'Inlay', bn: 'ইনলে', value: 10000, label: '৳10,000' },
        { id: 'onlay', code: '2.e', en: 'Onlay', bn: 'অনলে', value: 10000, label: '৳10,000' },
        { id: 'overlay', code: '2.f', en: 'Overlay', bn: 'ওভারলে', value: 10000, label: '৳10,000' }
      ]
    },
    {
      name: { en: 'Oral Surgery & Implants', bn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট' },
      items: [
        { id: 'adult-extraction', code: '3.a', en: 'Adult Tooth Extraction', bn: 'প্রাপ্তবয়স্ক দাঁত তোলা', value: 3000, label: '৳3,000' },
        { id: 'surgical-extraction', code: '3.b', en: 'Surgical / Semi-surgical Extraction', bn: 'সার্জিক্যাল / সেমি-সার্জিক্যাল এক্সট্রাকশন', value: 4000, label: '৳4,000 – ৳15,000', rangeMax: 15000 },
        { id: 'crown-lengthening', code: '3.c', en: 'Crown Lengthening', bn: 'ক্রাউন লেংথেনিং', value: 3000, label: '৳3,000' },
        { id: 'gingivectomy', code: '3.d', en: 'Gingivectomy', bn: 'জিনজিভেক্টমি', value: 5000, label: '৳5,000 – ৳10,000', rangeMax: 10000 },
        { id: 'operculectomy', code: '3.e', en: 'Operculectomy', bn: 'অপারকুলেক্টমি', value: 10000, label: '৳10,000' },
        { id: 'apicectomy', code: '3.f', en: 'Apicectomy', bn: 'এপিসেক্টমি', value: 15000, label: '৳15,000' },
        { id: 'gummy-smile', code: '3.g', en: 'Gummy Smile Correction', bn: 'গামি স্মাইল কারেকশন', value: 50000, label: 'Above ৳50,000' },
        { id: 'dental-implant', code: '3.h', en: 'Dental Implant', bn: 'ডেন্টাল ইমপ্ল্যান্ট', value: 120000, label: '৳1,20,000' }
      ]
    },
    {
      name: { en: 'Prosthodontics & Aesthetic Smile', bn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি' },
      items: [
        { id: 'pmma-crown', code: '4.a', en: 'PMMA Crown', bn: 'পিএমএমএ ক্রাউন', value: 5000, label: '৳5,000' },
        { id: 'porcelain-crown', code: '4.b', en: 'Porcelain Crown', bn: 'পোর্সেলিন ক্রাউন', value: 7000, label: '৳7,000' },
        { id: 'zirconia-crown', code: '4.c', en: 'Zirconia Crown', bn: 'জিরকোনিয়া ক্রাউন', value: 12000, label: '৳12,000' },
        { id: 'titanium-crown', code: '4.d', en: 'Titanium Crown', bn: 'টাইটানিয়াম ক্রাউন', value: 20000, label: '৳20,000' },
        { id: 'crown-removal', code: '4.e', en: 'Crown Removal (old/faulty)', bn: 'ক্রাউন রিমুভাল (পুরনো/ত্রুটিপূর্ণ)', value: 4000, label: '৳4,000' },
        { id: 'veneer-zirconia', code: '4.f', en: 'Veneer (Zirconia)', bn: 'ভিনিয়ার (জিরকোনিয়া)', value: 12000, label: '৳12,000' },
        { id: 'smile-design', code: '4.g', en: 'Smile Designing', bn: 'স্মাইল ডিজাইনিং', value: null, label: 'Included' }
      ]
    },
    {
      name: { en: 'Orthodontics', bn: 'অর্থোডন্টিক্স' },
      items: [
        { id: 'invisalign', code: '5.a', en: 'Invisalign Orthodontic Aligner', bn: 'ইনভিজালাইন অর্থোডন্টিক অ্যালাইনার', value: 50000, label: 'Above ৳50,000' },
        { id: 'braces', code: '5.b', en: 'Orthodontic Braces', bn: 'অর্থোডন্টিক ব্রেসেস', value: 50000, label: 'Above ৳50,000' }
      ]
    },
    {
      name: { en: 'Pediatric Dentistry', bn: 'শিশু দন্ত চিকিৎসা' },
      items: [
        { id: 'deciduous-extraction', code: '6.a', en: 'Deciduous Tooth Extraction', bn: 'দুধ দাঁত তোলা', value: 1000, label: '৳1,000' },
        { id: 'deciduous-filling', code: '6.b', en: 'Deciduous Filling', bn: 'দুধ দাঁতের ফিলিং', value: 2500, label: '৳2,500' },
        { id: 'deciduous-pulpotomy', code: '6.c', en: 'Deciduous Pulpotomy', bn: 'দুধ দাঁতের পালপোটমি', value: 4000, label: '৳4,000' },
        { id: 'deciduous-temporary-crown', code: '6.d', en: 'Deciduous Temporary Crown', bn: 'দুধ দাঁতের টেম্পোরারি ক্রাউন', value: 4000, label: '৳4,000' },
        { id: 'deciduous-pulpectomy', code: '6.e', en: 'Deciduous Pulpectomy', bn: 'দুধ দাঁতের পালপেক্টমি', value: 5000, label: '৳5,000' },
        { id: 'deciduous-space-maintainer', code: '6.f', en: 'Deciduous Space Maintainer', bn: 'দুধ দাঁতের স্পেস মেইনটেইনার', value: 5000, label: '৳5,000' }
      ]
    }
  ];

  const cfg = window.DDZ_CONFIG || {};

  function t(str) {
    return typeof str === 'string' ? str : (str.en || '');
  }

  function fmt(n) {
    if (n == null) return '';
    return '৳' + n.toLocaleString('en-IN');
  }

  /* ── State ── */
  const selected = {};            // id -> item
  let submitted = false;

  /* ── Render categories ── */
  function renderCategories() {
    const container = document.getElementById('calc-categories');
    if (!container) return;

    const frag = document.createDocumentFragment();

    CATEGORIES.forEach((cat) => {
      const wrap = document.createElement('div');
      wrap.className = 'calc-category';

      const title = document.createElement('div');
      title.className = 'calc-category-title';
      const enT = document.createElement('span');
      enT.setAttribute('data-lang-en', '');
      enT.textContent = cat.name.en;
      const bnT = document.createElement('span');
      bnT.setAttribute('data-lang-bn', '');
      bnT.textContent = cat.name.bn;
      title.appendChild(enT);
      title.appendChild(bnT);
      wrap.appendChild(title);

      cat.items.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'calc-item';
        row.dataset.id = item.id;

        const name = document.createElement('span');
        name.className = 'calc-item-name';
        const enN = document.createElement('span');
        enN.setAttribute('data-lang-en', '');
        enN.textContent = item.en;
        const bnN = document.createElement('span');
        bnN.setAttribute('data-lang-bn', '');
        bnN.textContent = item.bn;
        name.appendChild(enN);
        name.appendChild(bnN);

        const price = document.createElement('span');
        price.className = 'calc-item-price';
        const enP = document.createElement('span');
        enP.setAttribute('data-lang-en', '');
        enP.textContent = item.label;
        const bnP = document.createElement('span');
        bnP.setAttribute('data-lang-bn', '');
        bnP.textContent = item.label;
        price.appendChild(enP);
        price.appendChild(bnP);

        row.appendChild(name);
        row.appendChild(price);

        row.addEventListener('click', () => toggleItem(item, row));
        wrap.appendChild(row);
      });

      frag.appendChild(wrap);
    });

    container.appendChild(frag);
  }

  /* ── Toggle & receipt ── */
  function toggleItem(item, row) {
    if (selected[item.id]) {
      delete selected[item.id];
      row.classList.remove('selected');
    } else {
      selected[item.id] = item;
      row.classList.add('selected');
    }
    renderReceipt();
  }

  function getTotal() {
    let total = 0;
    let hasRange = false;
    Object.values(selected).forEach((it) => {
      if (it.value == null) return;
      total += it.value;
      if (it.rangeMax) hasRange = true;
    });
    return { total, hasRange };
  }

  function renderReceipt() {
    const body = document.getElementById('receipt-body');
    const totalEl = document.getElementById('receipt-total');
    if (!body || !totalEl) return;

    const ids = Object.keys(selected);
    body.innerHTML = '';

    if (ids.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'receipt-empty';
      const en = document.createElement('span');
      en.setAttribute('data-lang-en', '');
      en.textContent = 'Select services to see an estimate.';
      const bn = document.createElement('span');
      bn.setAttribute('data-lang-bn', '');
      bn.textContent = 'আনুমানিক খরচ দেখতে সেবা বেছে নিন।';
      empty.appendChild(en);
      empty.appendChild(bn);
      body.appendChild(empty);
    } else {
      ids.forEach((id) => {
        const it = selected[id];
        const line = document.createElement('div');
        line.className = 'receipt-line';

        const name = document.createElement('span');
        name.className = 'receipt-line-name';
        const enN = document.createElement('span');
        enN.setAttribute('data-lang-en', '');
        enN.textContent = it.en;
        const bnN = document.createElement('span');
        bnN.setAttribute('data-lang-bn', '');
        bnN.textContent = it.bn;
        name.appendChild(enN);
        name.appendChild(bnN);

        const price = document.createElement('span');
        price.className = 'receipt-line-price';
        price.textContent = it.value == null ? '—' : (it.rangeMax ? it.label : it.label);

        line.appendChild(name);
        line.appendChild(price);
        body.appendChild(line);
      });
    }

    const { total, hasRange } = getTotal();
    const bnMode = document.body.classList.contains('bn-mode');
    const fromPrefix = bnMode ? 'থেকে ' : 'From ';

    totalEl.innerHTML = '';
    const lbl = document.createElement('span');
    const enL = document.createElement('span');
    enL.setAttribute('data-lang-en', '');
    enL.textContent = 'Estimated Total';
    const bnL = document.createElement('span');
    bnL.setAttribute('data-lang-bn', '');
    bnL.textContent = 'আনুমানিক মোট';
    lbl.appendChild(enL);
    lbl.appendChild(bnL);

    const val = document.createElement('span');
    if (total > 0) {
      val.textContent = (hasRange ? fromPrefix : '') + fmt(total) + (hasRange ? '+' : '');
    } else {
      val.textContent = '৳0';
    }

    totalEl.appendChild(lbl);
    totalEl.appendChild(val);

    const leadBtn = document.getElementById('calc-lead-submit');
    if (leadBtn) leadBtn.disabled = ids.length === 0;
  }

  /* ── Lead capture ── */
  function buildMessage(name, phone) {
    const bnMode = document.body.classList.contains('bn-mode');
    const lines = Object.values(selected).map((it) => {
      const label = bnMode ? it.bn : it.en;
      return '• ' + label + (it.value == null ? '' : ' — ' + it.label);
    });
    const intro = bnMode
      ? 'নমস্কার, ডিজিটাল ডেন্টাল জোন 🌟\n\nআমার জন্য একটি আনুমানিক খরচের হিসাব:\n'
      : 'Hello, Digital Dental Zone 🌟\n\nPlease find my estimated treatment cost:\n';
    const nameLine = bnMode ? 'নাম' : 'Name';
    const phoneLine = bnMode ? 'মোবাইল' : 'Phone';
    return intro +
      lines.join('\n') +
      '\n\n' + nameLine + ': ' + (name || '—') +
      '\n' + phoneLine + ': ' + (phone || '—');
  }

  async function submitLead() {
    const nameEl = document.getElementById('calc-lead-name');
    const phoneEl = document.getElementById('calc-lead-phone');
    const statusEl = document.getElementById('calc-lead-status');
    if (!nameEl || !phoneEl || submitted) return;

    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    if (!name || !phone) {
      if (statusEl) {
        const msg = document.body.classList.contains('bn-mode')
          ? 'আপনার নাম এবং মোবাইল নম্বর দিন।'
          : 'Please enter your name and phone number.';
        statusEl.innerHTML = '<span style="color:#f87171;">' + msg + '</span>';
      }
      return;
    }

    submitted = true;
    const selectedList = Object.values(selected).map((it) => ({ name: it.en, bn: it.bn, price: it.label }));
    const { total } = getTotal();

    let saved = false;
    try {
      const client = await window.DDZ.supabase();
      if (client) {
        const { error } = await client.from('leads').insert({
          name,
          phone,
          services: JSON.stringify(selectedList),
          estimated_total: total || null,
          source: 'calculator'
        });
        saved = !error;
      }
    } catch (e) {
      saved = false;
    }

    const msg = encodeURIComponent(buildMessage(name, phone));
    const waUrl = (cfg.whatsapp || 'https://wa.me/8801674878470') + '?text=' + msg;

    if (statusEl) {
      const bnMode = document.body.classList.contains('bn-mode');
      if (saved) {
        statusEl.innerHTML = bnMode
          ? '<span style="color:#4ADE80;">✓ প্রাপ্ত হয়েছে — আমরা শীঘ্রই আপনাকে কল করব। WhatsApp খোলা হচ্ছে…</span>'
          : '<span style="color:#4ADE80;">✓ Received — we will call you back shortly. Opening WhatsApp…</span>';
      } else {
        statusEl.innerHTML = bnMode
          ? '<span style="color:var(--accent);">আপনার অনুরোধ পাঠাতে WhatsApp খোলা হচ্ছে…</span>'
          : '<span style="color:var(--accent);">Opening WhatsApp to send your request…</span>';
      }
    }

    setTimeout(() => { window.open(waUrl, '_blank'); }, 400);
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderReceipt();

    const submitBtn = document.getElementById('calc-lead-submit');
    if (submitBtn) submitBtn.addEventListener('click', submitLead);
  });
})();