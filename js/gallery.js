/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — GALLERY LOGIC
   Supabase data fetching, interactive Before/After sliders,
   horizontal drag carousel, filtering, and fullscreen lightbox
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Authoritative fallback items if Supabase is offline or empty
  const FALLBACK_GALLERY = [
    {
      id: 1,
      type: 'before_after',
      title_en: 'Traditional Dental Implant',
      title_bn: 'ট্র্যাডিশনাল ডেন্টাল ইমপ্ল্যান্ট',
      before_url: '/assets/images/Traditional Implant Before 1.jpeg',
      after_url: '/assets/images/Traditional Implant After 1.jpeg',
      caption_en: 'Complete tooth restoration with titanium implant and zirconia crown.',
      caption_bn: 'টাইটানিয়াম ইমপ্ল্যান্ট ও জিরকোনিয়া ক্রাউন দিয়ে সম্পূর্ণ দাঁত পুনরুদ্ধার।',
      sort_order: 1
    },
    {
      id: 2,
      type: 'before_after',
      title_en: 'Aesthetic Dental Restoration',
      title_bn: 'নান্দনিক ডেন্টাল রেস্টোরেশন',
      before_url: '/assets/images/Before treatment 1.jpeg',
      after_url: '/assets/images/After Treatment 1.jpeg',
      caption_en: 'Severely damaged incisors rebuilt to natural contour, shade, and strength.',
      caption_bn: 'ক্ষতিগ্রস্ত সামনের দাঁতের প্রাকৃতিক গঠন, রঙ ও স্থায়িত্ব ফিরিয়ে আনা।',
      sort_order: 2
    },
    {
      id: 3,
      type: 'general',
      title_en: 'Dr. Nusrat Naiem at DDZ Chamber',
      title_bn: 'ডাঃ নুসরাত নাঈম — চেম্বারে পরামর্শরত',
      image_url: '/assets/images/Dr. Nusrat Hero Shot.jpeg',
      caption_en: 'Chief Dental Surgeon Dr. Nusrat Naiem delivering specialized oral care in Barishal.',
      caption_bn: 'চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম বরিশালে বিশেষায়িত চিকিৎসা দিচ্ছেন।',
      sort_order: 3
    },
    {
      id: 4,
      type: 'general',
      title_en: 'Friendly Pediatric Dental Care',
      title_bn: 'শিশুবান্ধব ডেন্টাল চিকিৎসা',
      image_url: '/assets/images/Children Patients at chamber.jpeg',
      caption_en: 'Gentle, pain-free dental checkups and treatments for young smiling patients.',
      caption_bn: 'ছোট্ট বন্ধুদের জন্য ভীতিহীন ও ব্যথামুক্ত চমৎকার দাঁতের চিকিৎসা।',
      sort_order: 4
    },
    {
      id: 5,
      type: 'general',
      title_en: 'Precision Digital Ceramic Inlay',
      title_bn: 'নির্ভুল ডিজিটাল সিরামিক ইনলে',
      image_url: '/assets/images/Inlay.jpeg',
      caption_en: 'CAD/CAM milled conservative restoration preserving natural tooth structure.',
      caption_bn: 'দাঁত সংরক্ষণ করে সিএডি/সিএএম মিলড নিখুঁত সিরামিক ইনলে।',
      sort_order: 5
    },
    {
      id: 6,
      type: 'general',
      title_en: 'Sterile Surgical Extraction Facility',
      title_bn: 'জীবাণুমুক্ত সার্জিক্যাল এক্সট্রাকশন',
      image_url: '/assets/images/Surgical extraction.jpeg',
      caption_en: 'Hospital-grade autoclaved instruments for safe wisdom tooth & impaction surgeries.',
      caption_bn: 'আক্কেল দাঁত ও জটিল সার্জারির জন্য আন্তর্জাতিক মানের জীবাণুমুক্ত ব্যবস্থা।',
      sort_order: 6
    },
    {
      id: 7,
      type: 'general',
      title_en: 'Clinical Excellence & Prosthetics Recognition',
      title_bn: 'উচ্চমানের প্রস্থেটিকস স্বীকৃতি',
      image_url: '/assets/images/Receiving gifts from AKik CAD CAM Prosthetics.jpeg',
      caption_en: 'Partnering with premium Akik CAD/CAM prosthetics for flawless dental crowns.',
      caption_bn: 'সেরা ক্রাউন ও ব্রিজের জন্য বিশ্বমানের আকিক ক্যাড/ক্যাম পার্টনারশিপ।',
      sort_order: 7
    },
    {
      id: 8,
      type: 'general',
      title_en: 'CAD/CAM Zirconia Crowns & Bridges',
      title_bn: 'ক্যাড/ক্যাম জিরকোনিয়া ক্রাউন ও ব্রিজ',
      image_url: '/assets/treatment/4.c. Zirconia Crown.png',
      caption_en: 'Ultra-durable, natural translucency monolithic zirconia crowns.',
      caption_bn: 'অত্যন্ত টেকসই এবং প্রাকৃতিক উজ্জ্বলতার মোনোলিথিক জিরকোনিয়া ক্রাউন।',
      sort_order: 8
    },
    {
      id: 9,
      type: 'general',
      title_en: 'Invisible Clear Aligners (Invisalign)',
      title_bn: 'অদৃশ্য ক্লিয়ার অ্যালাইনার্স (ইনভিসালাইন)',
      image_url: '/assets/treatment/5.a. Invisalign Orthodontic Aligner.png',
      caption_en: 'Discreet teeth straightening without metal brackets or wires.',
      caption_bn: 'মেটাল তার ও ব্র্যাকেট ছাড়া অদৃশ্য ক্লিয়ার অ্যালাইনারে সোজা দাঁত।',
      sort_order: 9
    },
    {
      id: 10,
      type: 'general',
      title_en: 'Rotary Painless Endodontics (RCT)',
      title_bn: 'রোটারি ব্যথামুক্ত রুট ক্যানাল (আরসিটি)',
      image_url: '/assets/treatment/2.a. RCT (using Endomotor).png',
      caption_en: 'Advanced endomotor rotary files for fast, single-visit root canal treatments.',
      caption_bn: 'আধুনিক এন্ডোমোটরের সাহায্যে দ্রুত ও ব্যথামুক্ত রুট ক্যানাল চিকিৎসা।',
      sort_order: 10
    }
  ];

  let galleryItems = [];
  let currentFilter = 'all';
  let lightboxIndex = 0;
  let activeGeneralList = [];

  const baTrack = document.getElementById('baTrack');
  const generalGrid = document.getElementById('generalGrid');
  const baSection = document.getElementById('baSection');
  const generalSection = document.getElementById('generalSection');
  const emptyState = document.getElementById('galleryEmpty');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  // Lightbox elements
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  function isBengali() {
    return document.body.classList.contains('bn-mode');
  }

  /* ──────────────────────────  LOAD DATA  ────────────────────────── */
  async function loadGalleryData() {
    try {
      if (window.DDZ && typeof window.DDZ.supabase === 'function') {
        const client = await window.DDZ.supabase();
        if (client) {
          const { data, error } = await client
            .from('gallery')
            .select('*')
            .order('sort_order', { ascending: true });

          if (!error && Array.isArray(data) && data.length > 0) {
            galleryItems = data;
            renderAll();
            return;
          }
        }
      }
    } catch (err) {
      console.warn('[DDZ Gallery] Using fallback dataset:', err);
    }

    galleryItems = FALLBACK_GALLERY;
    renderAll();
  }

  /* ──────────────────────────  RENDER  ────────────────────────── */
  function renderAll() {
    const isBn = isBengali();
    const baItems = galleryItems.filter(item => item.type === 'before_after');
    const genItems = galleryItems.filter(item => item.type !== 'before_after');

    activeGeneralList = genItems;

    // Render Before/After Cards
    if (baTrack) {
      if (baItems.length === 0) {
        baTrack.innerHTML = '';
      } else {
        baTrack.innerHTML = baItems.map((item, idx) => {
          return `
            <div class="gallery-ba-card" data-id="${item.id}">
              <div class="gallery-ba-img-box" id="ba-box-${idx}">
                <img src="${item.before_url}" alt="Before" class="ba-before" loading="lazy" onerror="this.src='/assets/images/Before treatment 1.jpeg'">
                <img src="${item.after_url}" alt="After" class="ba-after" loading="lazy" onerror="this.src='/assets/images/After Treatment 1.jpeg'">
                <span class="gallery-ba-badge gallery-ba-badge-before">${isBn ? 'আগে' : 'Before'}</span>
                <span class="gallery-ba-badge gallery-ba-badge-after">${isBn ? 'পরে' : 'After'}</span>
                <div class="gallery-ba-handle" data-handle="${idx}"></div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Render General Photo Cards
    if (generalGrid) {
      if (genItems.length === 0) {
        generalGrid.innerHTML = '';
      } else {
        generalGrid.innerHTML = genItems.map((item, idx) => {
          return `
            <div class="gallery-photo-card" data-gen-index="${idx}" tabindex="0" role="button" aria-label="View photo">
              <img src="${item.image_url}" alt="" class="gallery-photo-img" loading="lazy" onerror="this.src='/assets/images/Dr. Nusrat Hero Shot.jpeg'">
              <div class="gallery-photo-overlay">
                <span class="gallery-photo-zoom-icon"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    initSliders();
    initGeneralClicks();
    initCardTilt();
    applyFilter();
    updateCarouselButtons();
  }

  /* ──────────────────────────  BEFORE/AFTER SLIDERS  ────────────────────────── */
  function initSliders() {
    const cards = document.querySelectorAll('.gallery-ba-card');

    cards.forEach(card => {
      const box = card.querySelector('.gallery-ba-img-box');
      const handle = card.querySelector('.gallery-ba-handle');
      const afterImg = card.querySelector('.ba-after');
      if (!box || !handle || !afterImg) return;

      let isDragging = false;

      function setPosition(clientX) {
        const rect = box.getBoundingClientRect();
        let pos = ((clientX - rect.left) / rect.width) * 100;
        pos = Math.max(4, Math.min(96, pos));
        handle.style.left = pos + '%';
        afterImg.style.clipPath = `inset(0 0 0 ${pos}%)`;
      }

      // Mouse events
      handle.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
        e.stopPropagation();
      });

      box.addEventListener('mousedown', (e) => {
        isDragging = true;
        setPosition(e.clientX);
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        setPosition(e.clientX);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Touch events
      handle.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.stopPropagation();
      }, { passive: true });

      box.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          isDragging = true;
          setPosition(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging || !e.touches || !e.touches[0]) return;
        setPosition(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchend', () => {
        isDragging = false;
      });
    });

    triggerSliderPeek();
  }

  /* ── Interactive Slider Auto-Peek ── */
  function triggerSliderPeek() {
    const boxes = document.querySelectorAll('.gallery-ba-img-box');
    boxes.forEach((box, i) => {
      const handle = box.querySelector('.gallery-ba-handle');
      const afterImg = box.querySelector('.ba-after');
      if (!handle || !afterImg) return;

      setTimeout(() => {
        let start = 50;
        let target = 32;
        let duration = 650;
        let startTime = null;

        function step1(timestamp) {
          if (!startTime) startTime = timestamp;
          let progress = Math.min((timestamp - startTime) / duration, 1);
          let ease = 0.5 - Math.cos(progress * Math.PI) / 2;
          let current = start + (target - start) * ease;
          handle.style.left = current + '%';
          afterImg.style.clipPath = `inset(0 0 0 ${current}%)`;
          if (progress < 1) {
            requestAnimationFrame(step1);
          } else {
            let startTime2 = null;
            function step2(timestamp2) {
              if (!startTime2) startTime2 = timestamp2;
              let progress2 = Math.min((timestamp2 - startTime2) / duration, 1);
              let ease2 = 0.5 - Math.cos(progress2 * Math.PI) / 2;
              let current2 = target + (start - target) * ease2;
              handle.style.left = current2 + '%';
              afterImg.style.clipPath = `inset(0 0 0 ${current2}%)`;
              if (progress2 < 1) requestAnimationFrame(step2);
            }
            requestAnimationFrame(step2);
          }
        }
        requestAnimationFrame(step1);
      }, 700 + i * 250);
    });
  }

  /* ── 3D Card Parallax Tilt ── */
  function initCardTilt() {
    const cards = document.querySelectorAll('.gallery-photo-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;
        card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ──────────────────────────  CAROUSEL HORIZONTAL SCROLL/DRAG  ────────────────────────── */
  if (baTrack) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    baTrack.addEventListener('mousedown', (e) => {
      if (e.target.closest('.gallery-ba-handle') || e.target.closest('.gallery-ba-img-box')) return;
      isDown = true;
      baTrack.classList.add('is-dragging');
      startX = e.pageX - baTrack.offsetLeft;
      scrollLeft = baTrack.scrollLeft;
    });

    baTrack.addEventListener('mouseleave', () => {
      isDown = false;
      baTrack.classList.remove('is-dragging');
    });

    baTrack.addEventListener('mouseup', () => {
      isDown = false;
      baTrack.classList.remove('is-dragging');
    });

    baTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - baTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      baTrack.scrollLeft = scrollLeft - walk;
      updateCarouselButtons();
    });

    baTrack.addEventListener('scroll', updateCarouselButtons);
  }

  function updateCarouselButtons() {
    if (!baTrack || !prevBtn || !nextBtn) return;
    prevBtn.disabled = baTrack.scrollLeft <= 10;
    nextBtn.disabled = baTrack.scrollLeft >= baTrack.scrollWidth - baTrack.clientWidth - 10;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (baTrack) baTrack.scrollBy({ left: -460, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (baTrack) baTrack.scrollBy({ left: 460, behavior: 'smooth' });
    });
  }

  /* ──────────────────────────  FILTER TABS  ────────────────────────── */
  const filterTabs = document.querySelectorAll('.gallery-tab-btn');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentFilter = tab.dataset.filter || 'all';
      applyFilter();
    });
  });

  function applyFilter() {
    if (!baSection || !generalSection) return;

    [baSection, generalSection].forEach(s => {
      s.style.opacity = '0';
      s.style.transform = 'translateY(12px)';
      s.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
    });

    setTimeout(() => {
      if (currentFilter === 'all') {
        baSection.style.display = 'block';
        generalSection.style.display = 'block';
        if (emptyState) emptyState.style.display = 'none';
      } else if (currentFilter === 'before_after') {
        baSection.style.display = 'block';
        generalSection.style.display = 'none';
        if (emptyState) emptyState.style.display = 'none';
      }

      requestAnimationFrame(() => {
        [baSection, generalSection].forEach(s => {
          if (s.style.display !== 'none') {
            s.style.opacity = '1';
            s.style.transform = 'translateY(0)';
          }
        });
      });
    }, 120);
  }

  /* ──────────────────────────  LIGHTBOX MODAL  ────────────────────────── */
  function initGeneralClicks() {
    const photoCards = document.querySelectorAll('.gallery-photo-card');
    photoCards.forEach(card => {
      card.addEventListener('click', () => {
        const idx = Number(card.dataset.genIndex);
        openLightbox(idx);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = Number(card.dataset.genIndex);
          openLightbox(idx);
        }
      });
    });
  }

  function openLightbox(index) {
    if (!activeGeneralList || activeGeneralList.length === 0) return;
    lightboxIndex = (index + activeGeneralList.length) % activeGeneralList.length;
    const item = activeGeneralList[lightboxIndex];
    if (!item) return;

    const isBn = isBengali();
    const title = isBn ? (item.title_bn || item.title_en) : (item.title_en || item.title_bn);
    const caption = isBn ? (item.caption_bn || item.caption_en || '') : (item.caption_en || item.caption_bn || '');

    if (lightboxImg) lightboxImg.src = item.image_url;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = caption;

    if (lightboxWaBtn) {
      const waMsg = encodeURIComponent(
        isBn
          ? `আসসালামু আলাইকুম, আমি আপনাদের গ্যালারির ছবি "${title}" দেখেছি। এই বিষয়ে তথ্য ও অ্যাপয়েন্টমেন্ট জানতে চাই।`
          : `Hello, I saw the "${title}" photo in your gallery. I would like more information and an appointment.`
      );
      lightboxWaBtn.href = `https://wa.me/8801674878470?text=${waMsg}`;
    }

    if (lightbox) {
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => openLightbox(lightboxIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => openLightbox(lightboxIndex + 1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(lightboxIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(lightboxIndex + 1);
  });

  /* ──────────────────────────  LANGUAGE CHANGE SYNC  ────────────────────────── */
  document.addEventListener('ddz-langchange', () => {
    renderAll();
  });

  // Init
  loadGalleryData();

})();
