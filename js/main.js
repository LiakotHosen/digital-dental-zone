/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Main JavaScript
   Nav, Scroll, Animations, Language, FAQ, Services
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR — Sticky Scroll & Mobile Toggle ── */
  const nav = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  // Shrink nav on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile hamburger
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Close mobile menu on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });


  /* ── 2. SCROLL REVEAL — IntersectionObserver ── */
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger'
  );

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }


  /* ── 3. COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('[data-counter]');

  function toBanglaDigits(num) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num).replace(/\d/g, d => bnDigits[d]);
  }

  function formatCounterValue(val, el) {
    const isBn = document.body.classList.contains('bn-mode');
    const suffix = (isBn && el.dataset.suffixBn) ? el.dataset.suffixBn : (el.dataset.suffix || '');
    const formattedNum = isBn ? toBanglaDigits(val) : val.toLocaleString();
    return formattedNum + suffix;
  }

  function animateSingleCounter(counter) {
    if (counter.dataset.animated === 'true') return;
    counter.dataset.animated = 'true';

    const target = parseInt(counter.dataset.counter, 10);
    const duration = 1600;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      counter.textContent = formatCounterValue(current, counter);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSingleCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // Update counters on language toggle
  document.addEventListener('ddz-langchange', () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.counter, 10);
      if (counter.dataset.animated === 'true') {
        counter.textContent = formatCounterValue(target, counter);
      } else {
        counter.textContent = formatCounterValue(0, counter);
      }
    });
  });


  /* ── 4. STATS SECTION CONTINUOUS TICKER & DRAG-SCROLL ── */
  const statsContainer = document.getElementById('stats-scroll-container');
  const statsTrack = document.getElementById('stats-track');
  const scrollbarTrack = document.getElementById('stats-scrollbar-track');
  const scrollbarThumb = document.getElementById('stats-scrollbar-thumb');

  if (statsContainer && statsTrack) {
    let isDragging = false;
    let isThumbDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let thumbStartX = 0;
    let thumbStartLeft = 0;
    let isHovered = false;
    let userInteractedTimeout = null;
    let autoScrollPaused = false;
    const speed = 0.75; // Smooth right-to-left glide

    function updateScrollbarThumb() {
      if (!scrollbarTrack || !scrollbarThumb) return;
      const trackWidth = scrollbarTrack.clientWidth;
      const scrollWidth = statsContainer.scrollWidth;
      const clientWidth = statsContainer.clientWidth;

      if (scrollWidth <= clientWidth) {
        scrollbarThumb.style.display = 'none';
        return;
      }
      scrollbarThumb.style.display = 'block';

      // One full cycle is half the track's scroll width
      const cycleWidth = scrollWidth / 2;
      const thumbWidth = Math.max(35, (clientWidth / cycleWidth) * (trackWidth * 0.45));
      scrollbarThumb.style.width = thumbWidth + 'px';

      const maxThumbLeft = trackWidth - thumbWidth;
      const currentScroll = statsContainer.scrollLeft % cycleWidth;
      const thumbLeft = (currentScroll / cycleWidth) * maxThumbLeft;

      scrollbarThumb.style.transform = `translateX(${Math.max(0, Math.min(maxThumbLeft, thumbLeft))}px)`;
    }

    function autoScrollTick() {
      if (!autoScrollPaused && !isDragging && !isThumbDragging && !isHovered) {
        statsContainer.scrollLeft += speed;
        const halfWidth = statsTrack.scrollWidth / 2;
        if (halfWidth > 0 && statsContainer.scrollLeft >= halfWidth) {
          statsContainer.scrollLeft -= halfWidth;
        }
        updateScrollbarThumb();
      }
      requestAnimationFrame(autoScrollTick);
    }

    requestAnimationFrame(autoScrollTick);

    function pauseAutoScrollTemporarily() {
      autoScrollPaused = true;
      if (userInteractedTimeout) clearTimeout(userInteractedTimeout);
      userInteractedTimeout = setTimeout(() => {
        autoScrollPaused = false;
      }, 2200);
    }

    // Hover pause
    statsContainer.addEventListener('mouseenter', () => { isHovered = true; });
    statsContainer.addEventListener('mouseleave', () => {
      isHovered = false;
      if (isDragging) {
        isDragging = false;
        statsContainer.classList.remove('is-dragging');
      }
    });

    // Mouse drag on container
    statsContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      statsContainer.classList.add('is-dragging');
      startX = e.pageX - statsContainer.offsetLeft;
      scrollLeftStart = statsContainer.scrollLeft;
      pauseAutoScrollTemporarily();
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        e.preventDefault();
        const x = e.pageX - statsContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        let newScrollLeft = scrollLeftStart - walk;
        const halfWidth = statsTrack.scrollWidth / 2;
        if (halfWidth > 0) {
          if (newScrollLeft < 0) newScrollLeft += halfWidth;
          if (newScrollLeft >= halfWidth * 2) newScrollLeft -= halfWidth;
        }
        statsContainer.scrollLeft = newScrollLeft;
        updateScrollbarThumb();
      } else if (isThumbDragging) {
        e.preventDefault();
        const trackWidth = scrollbarTrack.clientWidth;
        const thumbWidth = scrollbarThumb.clientWidth;
        const maxThumbLeft = trackWidth - thumbWidth;
        const dx = e.clientX - thumbStartX;
        let newThumbLeft = Math.max(0, Math.min(maxThumbLeft, thumbStartLeft + dx));
        const halfWidth = statsTrack.scrollWidth / 2;
        statsContainer.scrollLeft = (newThumbLeft / maxThumbLeft) * halfWidth;
        scrollbarThumb.style.transform = `translateX(${newThumbLeft}px)`;
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        statsContainer.classList.remove('is-dragging');
        pauseAutoScrollTemporarily();
      }
      if (isThumbDragging) {
        isThumbDragging = false;
        scrollbarThumb.classList.remove('is-dragging');
        pauseAutoScrollTemporarily();
      }
    });

    // Scrollbar Track & Thumb Dragging
    if (scrollbarThumb && scrollbarTrack) {
      scrollbarThumb.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        isThumbDragging = true;
        scrollbarThumb.classList.add('is-dragging');
        thumbStartX = e.clientX;
        const matrix = window.getComputedStyle(scrollbarThumb).transform;
        if (matrix !== 'none') {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          thumbStartLeft = parseFloat(values[4]) || 0;
        } else {
          thumbStartLeft = 0;
        }
        pauseAutoScrollTemporarily();
      });

      scrollbarTrack.addEventListener('click', (e) => {
        if (e.target === scrollbarThumb) return;
        const trackRect = scrollbarTrack.getBoundingClientRect();
        const clickX = e.clientX - trackRect.left;
        const trackWidth = scrollbarTrack.clientWidth;
        const thumbWidth = scrollbarThumb.clientWidth;
        const maxThumbLeft = trackWidth - thumbWidth;
        const targetThumbLeft = Math.max(0, Math.min(maxThumbLeft, clickX - thumbWidth / 2));
        const halfWidth = statsTrack.scrollWidth / 2;
        statsContainer.scrollTo({
          left: (targetThumbLeft / maxThumbLeft) * halfWidth,
          behavior: 'smooth'
        });
        pauseAutoScrollTemporarily();
      });
    }

    // Touch & wheel interactions
    statsContainer.addEventListener('scroll', () => {
      if (isDragging || isThumbDragging) return;
      updateScrollbarThumb();
    }, { passive: true });

    statsContainer.addEventListener('touchstart', () => {
      pauseAutoScrollTemporarily();
    }, { passive: true });

    statsContainer.addEventListener('wheel', () => {
      pauseAutoScrollTemporarily();
    }, { passive: true });

    window.addEventListener('resize', updateScrollbarThumb);
    updateScrollbarThumb();
  }


  /* ── 5. GOOGLE REVIEWS CONTINUOUS TICKER & DRAG-SCROLL ── */
  const reviewsContainer = document.getElementById('reviews-scroll-container');
  const reviewsTrack = document.getElementById('reviews-track');
  const reviewsScrollbarTrack = document.getElementById('reviews-scrollbar-track');
  const reviewsScrollbarThumb = document.getElementById('reviews-scrollbar-thumb');

  let reviewsTickerStarted = false;
  let reviewsAutoScrollPaused = false;
  let reviewsUserInteractedTimeout = null;

  function initReviewsTicker() {
    if (!reviewsContainer || !reviewsTrack) return;
    if (reviewsTickerStarted) return;
    reviewsTickerStarted = true;

    let isDragging = false;
    let isThumbDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let thumbStartX = 0;
    let thumbStartLeft = 0;
    let isHovered = false;
    let dragMoved = false;
    const speed = 0.65; // Smooth continuous glide

    function updateReviewsThumb() {
      if (!reviewsScrollbarTrack || !reviewsScrollbarThumb) return;
      const trackWidth = reviewsScrollbarTrack.clientWidth;
      const scrollWidth = reviewsContainer.scrollWidth;
      const clientWidth = reviewsContainer.clientWidth;

      if (scrollWidth <= clientWidth) {
        reviewsScrollbarThumb.style.display = 'none';
        return;
      }
      reviewsScrollbarThumb.style.display = 'block';

      const cycleWidth = scrollWidth / 2;
      const thumbWidth = Math.max(35, (clientWidth / cycleWidth) * (trackWidth * 0.45));
      reviewsScrollbarThumb.style.width = thumbWidth + 'px';

      const maxThumbLeft = trackWidth - thumbWidth;
      const currentScroll = reviewsContainer.scrollLeft % cycleWidth;
      const thumbLeft = (currentScroll / cycleWidth) * maxThumbLeft;

      reviewsScrollbarThumb.style.transform = `translateX(${Math.max(0, Math.min(maxThumbLeft, thumbLeft))}px)`;
    }

    function autoScrollReviews() {
      if (!reviewsAutoScrollPaused && !isDragging && !isThumbDragging && !isHovered) {
        reviewsContainer.scrollLeft += speed;
        const halfWidth = reviewsTrack.scrollWidth / 2;
        if (halfWidth > 0 && reviewsContainer.scrollLeft >= halfWidth) {
          reviewsContainer.scrollLeft -= halfWidth;
        }
        updateReviewsThumb();
      }
      requestAnimationFrame(autoScrollReviews);
    }

    requestAnimationFrame(autoScrollReviews);

    function pauseReviewsAutoScroll() {
      reviewsAutoScrollPaused = true;
      if (reviewsUserInteractedTimeout) clearTimeout(reviewsUserInteractedTimeout);
      reviewsUserInteractedTimeout = setTimeout(() => {
        reviewsAutoScrollPaused = false;
      }, 2400);
    }

    // Hover pause
    reviewsContainer.addEventListener('mouseenter', () => { isHovered = true; });
    reviewsContainer.addEventListener('mouseleave', () => {
      isHovered = false;
      if (isDragging) {
        isDragging = false;
        reviewsContainer.classList.remove('is-dragging');
      }
    });

    // Mouse drag on container
    reviewsContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragMoved = false;
      reviewsContainer.classList.add('is-dragging');
      startX = e.pageX - reviewsContainer.offsetLeft;
      scrollLeftStart = reviewsContainer.scrollLeft;
      pauseReviewsAutoScroll();
    });

    // Prevent accidental link clicking during dragging
    reviewsContainer.addEventListener('click', (e) => {
      if (dragMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const x = e.pageX - reviewsContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 5) dragMoved = true;
        let newScrollLeft = scrollLeftStart - walk;
        const halfWidth = reviewsTrack.scrollWidth / 2;
        if (halfWidth > 0) {
          if (newScrollLeft < 0) newScrollLeft += halfWidth;
          if (newScrollLeft >= halfWidth * 2) newScrollLeft -= halfWidth;
        }
        reviewsContainer.scrollLeft = newScrollLeft;
        updateReviewsThumb();
      } else if (isThumbDragging) {
        e.preventDefault();
        const trackWidth = reviewsScrollbarTrack.clientWidth;
        const thumbWidth = reviewsScrollbarThumb.clientWidth;
        const maxThumbLeft = trackWidth - thumbWidth;
        const dx = e.clientX - thumbStartX;
        let newThumbLeft = Math.max(0, Math.min(maxThumbLeft, thumbStartLeft + dx));
        const halfWidth = reviewsTrack.scrollWidth / 2;
        reviewsContainer.scrollLeft = (newThumbLeft / maxThumbLeft) * halfWidth;
        reviewsScrollbarThumb.style.transform = `translateX(${newThumbLeft}px)`;
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        reviewsContainer.classList.remove('is-dragging');
        pauseReviewsAutoScroll();
      }
      if (isThumbDragging) {
        isThumbDragging = false;
        reviewsScrollbarThumb.classList.remove('is-dragging');
        pauseReviewsAutoScroll();
      }
    });

    // Scrollbar Track & Thumb Dragging
    if (reviewsScrollbarThumb && reviewsScrollbarTrack) {
      reviewsScrollbarThumb.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        isThumbDragging = true;
        reviewsScrollbarThumb.classList.add('is-dragging');
        thumbStartX = e.clientX;
        const matrix = window.getComputedStyle(reviewsScrollbarThumb).transform;
        if (matrix !== 'none') {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          thumbStartLeft = parseFloat(values[4]) || 0;
        } else {
          thumbStartLeft = 0;
        }
        pauseReviewsAutoScroll();
      });

      reviewsScrollbarTrack.addEventListener('click', (e) => {
        if (e.target === reviewsScrollbarThumb) return;
        const trackRect = reviewsScrollbarTrack.getBoundingClientRect();
        const clickX = e.clientX - trackRect.left;
        const trackWidth = reviewsScrollbarTrack.clientWidth;
        const thumbWidth = reviewsScrollbarThumb.clientWidth;
        const maxThumbLeft = trackWidth - thumbWidth;
        const targetThumbLeft = Math.max(0, Math.min(maxThumbLeft, clickX - thumbWidth / 2));
        const halfWidth = reviewsTrack.scrollWidth / 2;
        reviewsContainer.scrollTo({
          left: (targetThumbLeft / maxThumbLeft) * halfWidth,
          behavior: 'smooth'
        });
        pauseReviewsAutoScroll();
      });
    }

    // Touch & wheel interactions
    reviewsContainer.addEventListener('scroll', () => {
      if (isDragging || isThumbDragging) return;
      updateReviewsThumb();
    }, { passive: true });

    reviewsContainer.addEventListener('touchstart', () => {
      pauseReviewsAutoScroll();
    }, { passive: true });

    reviewsContainer.addEventListener('wheel', () => {
      pauseReviewsAutoScroll();
    }, { passive: true });

    window.addEventListener('resize', updateReviewsThumb);
    updateReviewsThumb();
  }

  initReviewsTicker();


  /* ── 6. 6 SPECIALIZED CATEGORIES & WIRE-CONNECTED TREATMENTS ── */
  const SERVICES_CATEGORIES = [
    {
      id: 'diagnostics',
      num: '01',
      code: '1',
      nameEn: 'Diagnostics & General Dentistry',
      nameBn: 'ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা',
      descEn: 'Comprehensive digital oral cavity checkups, ultrasonic tartar cleaning, natural aesthetic composite fillings, and in-clinic smile brightening.',
      descBn: 'ডিজিটাল মুখগহ্বর পরীক্ষা, আল্ট্রাসনিক স্কেলিং ও পলিশিং, প্রাকৃতিক রঙের কম্পোজিট ফিলিং এবং আধুনিক পদ্ধতিতে দাঁত সাদা করা।',
      image: 'assets/treatment/1. Diagnostics & General Dentistry.png',
      items: [
        {
          id: '1-a-consultation-fee',
          code: '1.a',
          cat: 'Diagnostics & General Dentistry',
          catBn: 'ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা',
          title: 'Consultation Fee',
          titleBn: 'পরামর্শ ফি',
          price: '৳700',
          image: 'assets/treatment/1. Diagnostics & General Dentistry.png',
          badge: 'Initial Check',
          badgeBn: 'পরামর্শ',
          desc: 'Comprehensive oral cavity inspection, digital diagnosis, and personalized treatment roadmap with Dr. Nusrat Naiem.',
          descBn: 'ডাঃ নুসরাত নাঈম কর্তৃক সম্পূর্ণ মুখগহ্বর পরীক্ষা, ডিজিটাল রোগ নির্ণয় এবং ব্যক্তিগত চিকিৎসা পরিকল্পনা।',
          benefits: [
            'Full oral cavity and teeth screening',
            'Digital diagnosis & case assessment',
            'Personalized transparent treatment plan',
            'Detailed preventive oral health guidance'
          ],
          benefitsBn: [
            'সম্পূর্ণ মুখগহ্বর ও দাঁত পরীক্ষা',
            'ডিজিটাল রোগ নির্ণয় ও কেস মূল্যায়ন',
            'ব্যক্তিগত ও স্বচ্ছ চিকিৎসা পরিকল্পনা',
            'প্রতিরোধমূলক পরামর্শ ও যত্ন নির্দেশনা'
          ]
        },
        {
          id: '1-b-scaling-polishing',
          code: '1.b',
          cat: 'Diagnostics & General Dentistry',
          catBn: 'ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা',
          title: 'Scaling & Polishing',
          titleBn: 'স্কেলিং ও পলিশিং',
          price: '৳3,000',
          image: 'assets/treatment/1.b. Scaling & Polishing.png',
          badge: 'Preventive Care',
          badgeBn: 'প্রতিরোধমূলক যত্ন',
          desc: 'Deep ultrasonic removal of hardened tartar, plaque, and stubborn stains followed by high-gloss micro-polishing for fresh breath and pink gums.',
          descBn: 'আল্ট্রাসনিক স্কেলিংয়ের মাধ্যমে দাঁতের পাথর, প্ল্যাক ও দাগ দূর করে মাড়ি সুস্থ ও মুখ সতেজ রাখা হয়।',
          benefits: [
            'Stops bleeding gums and bad breath instantly',
            'Gentle ultrasonic tips preserve natural enamel',
            'High-luster diamond polishing paste finish',
            'Recommended every 6 months for optimum health'
          ],
          benefitsBn: [
            'মাড়ি দিয়ে রক্ত পড়া ও মুখের দুর্গন্ধ দূর করে',
            'এনামেলের কোনো ক্ষতি না করে মৃদু আল্ট্রাসনিক ভাইব্রেশন',
            'উচ্চ উজ্জ্বল পলিশিং ফিনিশ',
            'সুস্থ দাঁতের জন্য প্রতি ৬ মাস পর পর প্রযোজ্য'
          ]
        },
        {
          id: '1-c-traditional-filling',
          code: '1.c',
          cat: 'Diagnostics & General Dentistry',
          catBn: 'ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা',
          title: 'Traditional Filling',
          titleBn: 'সাধারণ ফিলিং',
          price: '৳4,000',
          image: 'assets/treatment/1.c. Traditional Filling.png',
          badge: 'Cavity Care',
          badgeBn: 'ক্যাভিটি সুরক্ষা',
          desc: 'Direct aesthetic resin restoration to seal cavities, prevent progressive decay, and restore natural tooth strength and bite function.',
          descBn: 'দাঁতের রঙের উন্নত ফিলিং যা ক্যাভিটি বা গর্ত বন্ধ করে দাঁতের ক্ষয় রোধ এবং স্বাভাবিক শক্তি ও সৌন্দর্য ফিরিয়ে আনে।',
          benefits: [
            'Seamless natural tooth color blending',
            'Bonds securely to enamel and dentin',
            'Restores full chewing comfort and durability',
            'Prevents food impaction and deeper infections'
          ],
          benefitsBn: [
            'দাঁতের স্বাভাবিক রঙের সাথে ১০০% মিল',
            'এনামেলের সাথে শক্তিশালী বন্ধন তৈরি করে',
            'চিবানোর স্বাভাবিক শক্তি ও আরাম ফিরিয়ে আনে',
            'খাবার আটকে থাকা ও সংক্রমণ প্রতিরোধ করে'
          ]
        },
        {
          id: '1-d-tooth-whitening',
          code: '1.d',
          cat: 'Diagnostics & General Dentistry',
          catBn: 'ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা',
          title: 'Tooth Whitening',
          titleBn: 'দাঁত সাদা করা',
          price: '৳15,000',
          image: 'assets/treatment/1.d. Tooth Whitening.png',
          badge: 'Instant Bright',
          badgeBn: 'তাৎক্ষণিক উজ্জ্বলতা',
          desc: 'In-office advanced photo-activated tooth bleaching that removes deep coffee, tea, smoking, and age-related stains in a single 45-minute session.',
          descBn: 'ক্লিনিকে উন্নত ফটো-অ্যাক্টিভেটেড ব্লিচিংয়ের মাধ্যমে মাত্র ৪৫ মিনিটে চা, কফি বা ধূমপানের দাগ দূর করে দাঁত ৫-৮ শেড উজ্জ্বল করা হয়।',
          benefits: [
            'Brightens teeth by 5–8 shades in one sitting',
            'Gum barrier protection prevents sensitivity',
            'Long-lasting radiant results',
            'Safe and enamel-friendly formula'
          ],
          benefitsBn: [
            'এক সেশনেই দাঁত ৫–৮ শেড উজ্জ্বল হয়',
            'মাড়ি সুরক্ষিত রেখে শিরশিরানি মুক্ত পদ্ধতি',
            'দীর্ঘস্থায়ী ও দৃষ্টিনন্দন ফলাফল',
            'এনামেলের জন্য সম্পূর্ণ নিরাপদ'
          ]
        }
      ]
    },

    {
      id: 'rct',
      num: '02',
      code: '2',
      nameEn: 'Root Canal & Restorations',
      nameBn: 'রুট ক্যানাল ও রেস্টোরেশন',
      descEn: 'Painless rotary Endomotor root canal procedures, re-treatment of failed cases, and custom CAD/CAM ceramic inlays, onlays & overlays.',
      descBn: 'ব্যথামুক্ত রোটারি এন্ডোমোটর রুট ক্যানাল, রি-রুট ক্যানাল এবং সিএডি/সিএএম সিরামিক ইনলে, অনলে ও ওভারলে রেস্টোরেশন।',
      image: 'assets/treatment/2. Root Canal & Restorations.jpg',
      items: [
        {
          id: '2-a-rct-endomotor',
          code: '2.a',
          cat: 'Root Canal & Restorations',
          catBn: 'রুট ক্যানাল ও রেস্টোরেশন',
          title: 'RCT (using Endomotor)',
          titleBn: 'রুট ক্যানাল (এন্ডোমোটর)',
          price: '৳8,000',
          image: 'assets/treatment/2.a. RCT (using Endomotor).png',
          badge: 'Pain Relief',
          badgeBn: 'ব্যথামুক্ত',
          desc: 'Advanced rotary endodontic root canal procedure to thoroughly clean infected pulp, sterilize canals, and hermetically seal the tooth structure with zero pain.',
          descBn: 'উন্নত রোটারি এন্ডোডন্টিক রুট ক্যানাল পদ্ধতির মাধ্যমে সংক্রমিত পাল্প পরিষ্কার ও জীবাণুমুক্ত করে প্রাকৃতিকভাবে দাঁত রক্ষা করা হয়।',
          benefits: [
            'Precision apex locator with rotary Endomotor',
            'Single or two-visit painless procedure',
            '100% digital sterilization & dental dam isolation',
            'Preserves your natural tooth structure for life'
          ],
          benefitsBn: [
            'নির্ভুল এপেক্স লোকেটার ও রোটারি এন্ডোমোটর প্রযুক্তি',
            'ব্যথামুক্ত ও দ্রুততম চিকিৎসা পদ্ধতি',
            '১০০% জীবাণুমুক্ত পরিবেশ ও ডেন্টাল ড্যাম আইসোলেশন',
            'সারাজীবনের জন্য প্রাকৃতিক দাঁত সুরক্ষিত রাখে'
          ]
        },
        {
          id: '2-b-re-rct',
          code: '2.b',
          cat: 'Root Canal & Restorations',
          catBn: 'রুট ক্যানাল ও রেস্টোরেশন',
          title: 'Re-RCT',
          titleBn: 'রি-রুট ক্যানাল',
          price: '৳15,000',
          image: 'assets/treatment/2. b. Re-RCT.png',
          badge: 'Revision Care',
          badgeBn: 'পুনর্বাসন',
          desc: 'Specialized retreatment for previously treated teeth that have developed recurrent infection or persistent pain, eliminating deep-rooted bacteria.',
          descBn: 'অতীতে অন্য কোথাও অসম্পূর্ণ বা ব্যর্থ হওয়া রুট ক্যানালের পুনরায় উন্নত ও আধুনিক জীবাণুমুক্ত চিকিৎসা।',
          benefits: [
            'Removal of old filling materials & infection removal',
            'Deep canal sanitization with medicinal dressing',
            'Digital X-ray & 3D scanner verification',
            'High success rate for saving problematic teeth'
          ],
          benefitsBn: [
            'পুরানো ফিলিং ও ব্যাকটেরিয়া সম্পূর্ণ অপসারণ',
            'ঔষধযুক্ত ড্রেসিংয়ের মাধ্যমে গভীর জীবাণুমুক্তকরণ',
            'ডিজিটাল এক্স-রে ও ৩ডি স্ক্যানার পর্যবেক্ষণ',
            'সমস্যাগ্রস্ত দাঁত রক্ষার সর্বোচ্চ সফলতা'
          ]
        },
        {
          id: '2-c-rct-package',
          code: '2.c',
          cat: 'Root Canal & Restorations',
          catBn: 'রুট ক্যানাল ও রেস্টোরেশন',
          title: 'RCT + Post Core + Zirconia Crown (Full Package)',
          titleBn: 'রুট ক্যানাল + পোস্ট কোর + জিরকোনিয়া ক্রাউন (সম্পূর্ণ প্যাকেজ)',
          price: '৳25,000',
          image: 'assets/treatment/2.c. RCT + Post Core + Zirconia Crown.png',
          badge: 'Full Package',
          badgeBn: 'সম্পূর্ণ প্যাকেজ',
          desc: 'Comprehensive full-mouth preservation package including pain-free RCT, structural fiber post-core buildup, and a custom CAD/CAM Zirconia diamond crown.',
          descBn: 'সম্পূর্ণ দাঁত সুরক্ষার অল-ইন-ওয়ান প্যাকেজ: ব্যথামুক্ত আরসিটি, ফাইবার পোস্ট-কোর শক্তিবৃদ্ধি এবং কাস্টম জিরকোনিয়া ক্রাউন।',
          benefits: [
            'Complete endodontic therapy & post-core reinforcement',
            'Custom CAD/CAM Monolithic Zirconia Crown included',
            'Natural aesthetic color match to adjacent teeth',
            '10-year durability with complete chewing comfort'
          ],
          benefitsBn: [
            'সম্পূর্ণ রুট ক্যানাল ও পোস্ট-কোর শক্তিশালীকরণ',
            'কাস্টম সিএডি/সিএএম জিরকোনিয়া ক্রাউন অন্তর্ভুক্ত',
            'অন্যান্য দাঁতের সাথে ১০০% স্বাভাবিক রঙের মিল',
            '১০ বছরের স্থায়িত্ব ও সম্পূর্ণ চিবানোর আরাম'
          ]
        },
        {
          id: '2-d-inlay',
          code: '2.d',
          cat: 'Root Canal & Restorations',
          catBn: 'রুট ক্যানাল ও রেস্টোরেশন',
          title: 'Inlay',
          titleBn: 'ইনলে',
          price: '৳10,000',
          image: 'assets/treatment/2.d. Inlay.jpeg',
          badge: 'Micro-Restoration',
          badgeBn: 'মাইক্রো রেস্টোরেশন',
          desc: 'Custom-milled solid ceramic restoration designed to fit precisely inside the prepared cavity between the cusps of a tooth, conserving healthy tooth structure.',
          descBn: 'দাঁতের অক্ষত অংশ অক্ষুণ্ণ রেখে মধ্যবর্তী ক্ষয় বা গর্ত নিখুঁতভাবে পূরণ করার উন্নত সিরামিক ইনলে পদ্ধতি।',
          benefits: [
            'Conserves up to 75% more tooth structure than full crowns',
            'Precision CAD/CAM marginal fit prevents recurrent decay',
            'High compressive strength matching natural tooth enamel',
            'Stain-resistant and biocompatible ceramic'
          ],
          benefitsBn: [
            'ক্রাউনের চেয়ে ৭৫% বেশি প্রাকৃতিক দাঁত অক্ষত রাখে',
            'সিএডি/সিএএম নির্ভুল প্রান্তিক ফিটিং পুনরায় ব্যাকটেরিয়া আক্রমণ রোধ করে',
            'প্রাকৃতিক দাঁতের মতো উচ্চ চাপ সহনশীলতা',
            'দাগহীন ও শতভাগ বায়োকম্প্যাটিবল'
          ]
        },
        {
          id: '2-e-onlay',
          code: '2.e',
          cat: 'Root Canal & Restorations',
          catBn: 'রুট ক্যানাল ও রেস্টোরেশন',
          title: 'Onlay',
          titleBn: 'অনলে',
          price: '৳10,000',
          image: 'assets/treatment/2.e.Onlay .png',
          badge: 'Cusp Protection',
          badgeBn: 'কাস্প সুরক্ষা',
          desc: 'Conservative ceramic restoration covering one or more damaged cusps of a posterior tooth without requiring full crown preparation.',
          descBn: 'দাঁতের ভাঙা বা ক্ষতিগ্রস্ত শীর্ষবিন্দু (কাস্প) সুরক্ষিত রেখে প্রাকৃতিক দাঁত টিকিয়ে রাখার আধুনিক সিরামিক অনলে।',
          benefits: [
            'Protects weakened cusps against biting fractures',
            'Significantly less tooth grinding than full crowns',
            'Flawless aesthetic color integration',
            'Exceptional long-term durability'
          ],
          benefitsBn: [
            'চিবানোর সময় দুর্বল দাঁত ভেঙে যাওয়া থেকে রক্ষা করে',
            'ফুল ক্রাউনের চেয়ে অনেক কম দাঁত কাটার প্রয়োজন হয়',
            'দাঁতের স্বাভাবিক রঙের সাথে নিখুঁত মিল',
            'অসাধারণ দীর্ঘস্থায়িত্ব'
          ]
        },
        {
          id: '2-f-overlay',
          code: '2.f',
          cat: 'Root Canal & Restorations',
          catBn: 'রুট ক্যানাল ও রেস্টোরেশন',
          title: 'Overlay',
          titleBn: 'ওভারলে',
          price: '৳10,000',
          image: 'assets/treatment/2.f. Overlay.png',
          badge: 'Full Cusp Care',
          badgeBn: 'পূর্ণাঙ্গ রেস্টোরেশন',
          desc: 'Complete occlusal surface ceramic restoration designed to rebuild heavily worn or fractured teeth while preserving healthy side walls.',
          descBn: 'দাঁতের ওপরের পুরো চিবানোর অংশ ক্ষয় বা ভাঙন থেকে রক্ষা করতে ব্যবহৃত আধুনিক সিরামিক ওভারলে।',
          benefits: [
            'Replaces entire chewing surface with solid ceramic',
            'Preserves vital tooth structure and gum margins',
            'Restores proper bite alignment and chewing efficiency',
            'Excellent biocompatibility with opposing natural teeth'
          ],
          benefitsBn: [
            'চিবানোর পুরো পৃষ্ঠ সলিড সিরামিকে প্রতিস্থাপন করে',
            'দাঁতের মাড়ির কিনারা ও স্বাভাবিক দেওয়াল অক্ষত রাখে',
            'সঠিক বাইট ও চিবানোর ক্ষমতা পুনরুদ্ধার করে',
            'বিপরীত দাঁতের জন্য সম্পূর্ণ নিরাপদ ও ক্ষয়রোধী'
          ]
        }
      ]
    },

    {
      id: 'surgery',
      num: '03',
      code: '3',
      nameEn: 'Oral Surgery & Implants',
      nameBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
      descEn: 'Gentle adult extractions, specialist surgical wisdom tooth extraction, periodontal surgeries, apicectomy, gummy smile, and permanent titanium dental implants.',
      descBn: 'ব্যথাহীন প্রাপ্তবয়স্ক দাঁত তোলা, আক্কেল দাঁতের সার্জিক্যাল অপসারণ, জিনজিভেক্টমি, এপিসেক্টমি, গামি স্মাইল ও স্থায়ী টাইটানিয়াম ইমপ্ল্যান্ট।',
      image: 'assets/treatment/3. Oral Surgery & Implants.jpg',
      items: [
        {
          id: '3-a-adult-extraction',
          code: '3.a',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Adult Tooth Extraction',
          titleBn: 'প্রাপ্তবয়স্ক দাঁত তোলা',
          price: '৳3,000',
          image: 'assets/treatment/3.a. Adult Tooth Extraction.png',
          badge: 'Gentle Extraction',
          badgeBn: 'ব্যথাহীন তোলা',
          desc: 'Safe, atraumatic removal of non-restorable or severely broken adult teeth with advanced local anesthesia for zero pain.',
          descBn: 'উন্নত লোকাল এনেস্থেশিয়ার মাধ্যমে সম্পূর্ণ ব্যথামুক্তভাবে অপ্রতিরোধ্য বা নষ্ট হয়ে যাওয়া দাঁত তোলা।',
          benefits: [
            'Completely painless with advanced local anesthesia',
            'Atraumatic technique preserves surrounding bone',
            'Post-extraction wound care guidance and dressing',
            'Fast recovery with minimal discomfort'
          ],
          benefitsBn: [
            'উন্নত এনেস্থেশিয়ার কারণে কোনো ব্যথা অনুভূত হয় না',
            'চোয়ালের হাড় অক্ষত রেখে দাঁত তোলা হয়',
            'অপারেশন পরবর্তী ড্রেসিং ও যত্ন নির্দেশনা',
            'দ্রুত নিরাময় ও স্বস্তি'
          ]
        },
        {
          id: '3-b-surgical-extraction',
          code: '3.b',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Surgical / Semi-surgical Extraction',
          titleBn: 'সার্জিক্যাল / সেমি-সার্জিক্যাল এক্সট্রাকশন',
          price: '৳4,000 – ৳15,000',
          image: 'assets/treatment/3.b. Surgical _Semi-surgical Extraction.png',
          badge: 'Specialist Surgery',
          badgeBn: 'বিশেষজ্ঞ সার্জারি',
          desc: 'Gentle, pain-managed minor surgical removal of impacted or partially erupted wisdom teeth performed by PGT (OMS) trained doctor.',
          descBn: 'মাড়ির ভেতরে আটকে থাকা বা বাঁকা আক্কেল দাঁতের সম্পূর্ণ ব্যথামুক্ত ও নিরাপদ মাইনর সার্জিক্যাল অপসারণ।',
          benefits: [
            'Performed by PGT (OMS) trained specialist Dr. Nusrat',
            'Local anesthesia ensures complete numbness & zero pain',
            'Fast healing protocol with minimal swelling',
            'Comprehensive post-operative checkup included'
          ],
          benefitsBn: [
            'ওরাল সার্জারিতে পিজিটি প্রশিক্ষিত ডাঃ নুসরাত দ্বারা সম্পন্ন',
            'উন্নত এনেস্থেশিয়ার মাধ্যমে সম্পূর্ণ ব্যথামুক্ত অনুভূতি',
            'দ্রুত ক্ষত নিরাময়ের বিশেষ প্রটোকল',
            'অপারেশন পরবর্তী ফলো-আপ চেকআপ অন্তর্ভুক্ত'
          ]
        },
        {
          id: '3-c-crown-lengthening',
          code: '3.c',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Crown Lengthening',
          titleBn: 'ক্রাউন লেংথেনিং',
          price: '৳3,000',
          image: 'assets/treatment/3.c. Crown Lengthening.png',
          badge: 'Perio Contouring',
          badgeBn: 'মাড়ির কনট্যুরিং',
          desc: 'Minor surgical procedure to reshape gum tissue and expose more natural tooth structure for proper crown placement and aesthetic harmony.',
          descBn: 'দাঁতের উপরে সঠিক ক্রাউন বসানো বা সৌন্দর্য বৃদ্ধির জন্য মাড়ির অতিরিক্ত অংশ সামান্য কেটে দাঁতের দৃশ্যমান অংশ বাড়ানো।',
          benefits: [
            'Enables stable retention for crowns and bridges',
            'Creates balanced and symmetrical gum lines',
            'Prevents chronic gum inflammation around restorations',
            'Quick procedure with rapid healing'
          ],
          benefitsBn: [
            'ক্রাউন ও ব্রিজের মজবুত ফিটিং নিশ্চিত করে',
            'মাড়ির সুন্দর ও সুষম রূপরেখা তৈরি করে',
            'মাড়ির প্রদাহ ও রক্ত পড়া বন্ধ করে',
            'দ্রুত আরোগ্য লাভ'
          ]
        },
        {
          id: '3-d-gingivectomy',
          code: '3.d',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Gingivectomy',
          titleBn: 'জিনজিভেক্টমি',
          price: '৳5,000 – ৳10,000',
          image: 'assets/treatment/3.d. Gingivectomy.png',
          badge: 'Gum Health',
          badgeBn: 'মাড়ির চিকিৎসা',
          desc: 'Surgical removal of diseased, overgrown, or hypertrophic gum tissue to eliminate deep periodontal pockets and restore oral hygiene.',
          descBn: 'অতিরিক্ত ফুলে ওঠা বা সংক্রমিত মাড়ি কেটে অপসারণ করে মাড়ির স্বাভাবিক স্বাস্থ্য ও পরিচ্ছন্নতা ফিরিয়ে আনা।',
          benefits: [
            'Eliminates deep bacterial periodontal pockets',
            'Reduces gum swelling and bleeding',
            'Enhances smile aesthetics and tooth proportions',
            'Promotes long-term periodontal health'
          ],
          benefitsBn: [
            'গভীর ব্যাকটেরিয়া পকেট দূর করে সংক্রমণ বন্ধ করে',
            'মাড়ির ফোলাভাব ও রক্তপাত দূর করে',
            'দাঁতের স্বাভাবিক অনুপাত ও সৌন্দর্য বৃদ্ধি করে',
            'মাড়ির দীর্ঘমেয়াদী স্বাস্থ্য নিশ্চিত করে'
          ]
        },
        {
          id: '3-e-operculectomy',
          code: '3.e',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Operculectomy',
          titleBn: 'অপারকুলেক্টমি',
          price: '৳10,000',
          image: 'assets/treatment/3.e.Operculectomy.png',
          badge: 'Flap Relief',
          badgeBn: 'ফ্ল্যাপ অপসারণ',
          desc: 'Minor surgical excision of the infected flap of gum tissue overlying an erupting wisdom tooth (pericoronitis relief).',
          descBn: 'আক্কেল দাঁতের ওপর ঢেকে থাকা সংক্রমিত মাড়ির অংশ অপসারণ করে তীব্র ব্যথা ও ফোলা দূর করা।',
          benefits: [
            'Instantly eliminates severe pericoronitis pain',
            'Prevents recurrent food trapping and infection',
            'Avoids full tooth extraction when tooth is erupting well',
            'Painless minor procedure under local anesthesia'
          ],
          benefitsBn: [
            'আক্কেল দাঁতের অসহ্য ব্যথা ও প্রদাহ দ্রুত নিরাময় করে',
            'খাবার আটকে থাকা ও পুঁজ হওয়া বন্ধ করে',
            'দাঁত না তুলেই অনেক ক্ষেত্রে স্থায়ী সমাধান দেয়',
            'লোকাল এনেস্থেশিয়ায় ব্যথামুক্ত চিকিৎসা'
          ]
        },
        {
          id: '3-f-apicectomy',
          code: '3.f',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Apicectomy',
          titleBn: 'এপিসেক্টমি',
          price: '৳15,000',
          image: 'assets/treatment/3.f. Apicectomy.png',
          badge: 'Root-End Care',
          badgeBn: 'রুট-এন্ড সার্জারি',
          desc: 'Microsurgical removal of persistent root-tip cysts and apical infections when conventional root canal treatment is insufficient to save the tooth.',
          descBn: 'সাধারণ রুট ক্যানালে নিরাময় না হওয়া দাঁতের শেকড়ের সংক্রমণ ও সিস্ট কেটে অপসারণ করে দাঁত রক্ষা করার বিশেষ সার্জারি।',
          benefits: [
            'Saves natural tooth from extraction',
            'Eliminates deep apical cysts and bone infections',
            'High precision root-end retrograde filling',
            'Painless microsurgical technique'
          ],
          benefitsBn: [
            'দাঁত ফেলা থেকে রক্ষা করে প্রাকৃতিক দাঁত বাঁচায়',
            'শেকড়ের গভীর সিস্ট ও হাড়ের ইনফেকশন দূর করে',
            'নির্ভুল রুট-এন্ড রেট্রোগ্রেড সিলিং',
            'ব্যথামুক্ত মাইক্রোসার্জিক্যাল পদ্ধতি'
          ]
        },
        {
          id: '3-g-gummy-smile',
          code: '3.g',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Gummy Smile Correction',
          titleBn: 'গামি স্মাইল কারেকশন',
          price: 'Above ৳50,000',
          image: 'assets/treatment/3.g. Gummy Smile Correction.png',
          badge: 'Smile Makeover',
          badgeBn: 'স্মাইল মেকওভার',
          desc: 'Advanced surgical and aesthetic gum re-contouring to reduce excessive gum display when smiling, creating a harmonious and balanced smile.',
          descBn: 'হাসার সময় অতিরিক্ত মাড়ি দেখা যাওয়ার সমস্যা দূর করতে উন্নত সার্জিক্যাল ও লেজার কনট্যুরিংয়ের মাধ্যমে সুন্দর হাসি তৈরি।',
          benefits: [
            'Dramatic aesthetic enhancement when smiling',
            'Harmonizes teeth length and gum exposure',
            'Permanent and highly predictable outcome',
            'Customized digital smile analysis before treatment'
          ],
          benefitsBn: [
            'হাসির দৃশ্যে অভাবনীয় নান্দনিক রূপান্তর',
            'দাঁতের দৈর্ঘ্য ও মাড়ির সুষম অনুপাত নিশ্চিত করে',
            'স্থায়ী ও আত্মবিশ্বাস বৃদ্ধিকারী ফলাফল',
            'চিকিৎসার পূর্বে ডিজিটাল স্মাইল সিমুলেশন'
          ]
        },
        {
          id: '3-h-dental-implant',
          code: '3.h',
          cat: 'Oral Surgery & Implants',
          catBn: 'ওরাল সার্জারি ও ইমপ্ল্যান্ট',
          title: 'Dental Implant',
          titleBn: 'ডেন্টাল ইমপ্ল্যান্ট',
          price: '৳1,20,000',
          image: 'assets/treatment/3.h. Dental Implant.png',
          badge: 'Lifetime Fix',
          badgeBn: 'স্থায়ী সমাধান',
          desc: 'The gold standard for replacing missing teeth. A biocompatible titanium root surgically anchored into the jawbone, topped with a custom Zirconia crown.',
          descBn: 'হারানো দাঁতের সেরা স্থায়ী সমাধান। চোয়ালের হাড়ে টাইটানিয়াম রুট স্থাপন করে উপরে প্রাকৃতিক জিরকোনিয়া ক্রাউন বসানো হয়।',
          benefits: [
            'Guided 3D digital planning with intraoral scanner',
            'Preserves jawbone density and facial structure',
            'Looks, feels, and functions exactly like a natural tooth',
            'Lifetime durability with proper oral care'
          ],
          benefitsBn: [
            '৩ডি ইন্ট্রাওরাল স্ক্যানার দ্বারা পরিচালিত নির্ভুল সার্জারি',
            'চোয়ালের হাড় ও মুখের স্বাভাবিক গঠন ধরে রাখে',
            'প্রাকৃতিক দাঁতের মতোই খাবার খাওয়া যায়',
            'যথাযথ যত্নে সারাজীবন স্থায়ী থাকে'
          ]
        }
      ]
    },

    {
      id: 'prosthodontics',
      num: '04',
      code: '4',
      nameEn: 'Prosthodontics & Aesthetic Smile',
      nameBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
      descEn: 'PMMA provisionals, porcelain crowns, high-strength CAD/CAM zirconia crowns, pure titanium crowns, veneers, and 3D smile designing.',
      descBn: 'পিএমএমএ ক্রাউন, পোর্সেলিন ও জিরকোনিয়া ক্রাউন, খাঁটি টাইটানিয়াম ক্রাউন, কসমেটিক ভিনিয়ার ও ৩ডি ডিজিটাল স্মাইল ডিজাইন।',
      image: 'assets/treatment/4. Prosthodontics & Aesthetic Smile.jpg',
      items: [
        {
          id: '4-a-pmma-crown',
          code: '4.a',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'PMMA Crown',
          titleBn: 'পিএমএমএ ক্রাউন',
          price: '৳5,000',
          image: 'assets/treatment/4.a. PMMA Crown.png',
          badge: 'Interim Protection',
          badgeBn: 'অস্থায়ী সুরক্ষা',
          desc: 'High-density milled provisional crown designed to protect prepared teeth and preserve gum margins while permanent restorations are fabricated.',
          descBn: 'স্থায়ী ক্রাউন তৈরি হওয়ার সময় প্রস্তুতকৃত দাঁত ও মাড়িকে সুরক্ষিত রাখতে ব্যবহৃত বিশেষ ক্রাউন।',
          benefits: [
            'Immediate smile restoration & protection',
            'Prevents sensitivity while eating or drinking',
            'Maintains tooth spacing and contour',
            'Smooth comfortable finish'
          ],
          benefitsBn: [
            'তাৎক্ষণিক দাঁতের সুরক্ষা ও সৌন্দর্য বজায় রাখে',
            'খাওয়ার সময় শিরশিরানি দূর করে',
            'দাঁতের স্বাভাবিক স্থান বজায় রাখে',
            'মসৃণ ও আরামদায়ক'
          ]
        },
        {
          id: '4-b-porcelain-crown',
          code: '4.b',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'Porcelain Crown',
          titleBn: 'পোর্সেলিন ক্রাউন',
          price: '৳7,000',
          image: 'assets/treatment/4.b. Porcelain Crown.png',
          badge: 'Classic Balance',
          badgeBn: 'জনপ্রিয়',
          desc: 'Reliable and affordable dental crown blending the strength of metal substructure with a natural tooth-colored porcelain exterior.',
          descBn: 'ন্যায্য মূল্যে নির্ভরযোগ্য ক্রাউন যা ভেতরের মেটালের শক্তির সাথে বাইরের প্রাকৃতিক পোর্সেলিন রঙের সমন্বয় ঘটায়।',
          benefits: [
            'Proven clinical reliability over decades',
            'Color matched to patient natural shade',
            'Cost-effective solution for missing or damaged teeth',
            'Great structural resilience'
          ],
          benefitsBn: [
            'ক্লিনিক্যালি পরীক্ষিত ও নির্ভরযোগ্য',
            'রোগীর দাঁতের স্বাভাবিক রঙের সাথে মিল',
            'সাশ্রয়ী মূল্যে পূর্ণাঙ্গ দাঁত পুনরুদ্ধার',
            'শক্তিশালী কাঠামো'
          ]
        },
        {
          id: '4-c-zirconia-crown',
          code: '4.c',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'Zirconia Crown',
          titleBn: 'জিরকোনিয়া ক্রাউন',
          price: '৳12,000',
          image: 'assets/treatment/4.c. Zirconia Crown.png',
          badge: 'Premium Diamond',
          badgeBn: 'প্রিমিয়াম কোয়ালিটি',
          desc: 'Ultra-strong, metal-free translucent crown precision-milled using digital CAD/CAM technology. Maximum biocompatibility and lifelike translucency.',
          descBn: 'মেটাল-মুক্ত অত্যন্ত শক্তিশালী ক্রাউন যা ডিজিটাল সিএডি/সিএএম প্রযুক্তির মাধ্যমে তৈরি করা হয়। প্রাকৃতিকভাবে চকচকে ও দীর্ঘস্থায়ী।',
          benefits: [
            'Digitally scanned with intraoral 3D scanner (No messy putty)',
            'Metal-free & 100% biocompatible with gums',
            'Zero black lines at the gumline',
            'Unmatched tensile strength for front & back teeth'
          ],
          benefitsBn: [
            '৩ডি ইন্ট্রাওরাল স্ক্যানারের মাধ্যমে নির্ভুল মাপ',
            'ধাতুমুক্ত ও মাড়ির জন্য সম্পূর্ণ নিরাপদ',
            'মাড়ির গোড়ায় কোনো কালো দাগ হয় না',
            'সামনের ও পেছনের দাঁতের জন্য অত্যন্ত টেকসই'
          ]
        },
        {
          id: '4-d-titanium-crown',
          code: '4.d',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'Titanium Crown',
          titleBn: 'টাইটানিয়াম ক্রাউন',
          price: '৳20,000',
          image: 'assets/treatment/4.d. Titanium Crown.png',
          badge: 'Maximum Strength',
          badgeBn: 'সর্বোচ্চ শক্ত',
          desc: 'Medical-grade pure titanium crown offering peak structural strength, lightweight comfort, and hypoallergenic medical excellence.',
          descBn: 'মেডিকেল গ্রেড বিশুদ্ধ টাইটানিয়াম ক্রাউন যা সর্বোচ্চ শক্তি ও আরামদায়ক অনুভূতি প্রদান করে।',
          benefits: [
            'Ultra-lightweight aerospace grade titanium core',
            'Ideal for high-stress molar teeth and heavy biters',
            'Exceptional long-term marginal fit',
            'Immune to corrosion and temperature sensitivity'
          ],
          benefitsBn: [
            'অত্যন্ত হালকা ও দীর্ঘস্থায়ী টাইটানিয়াম কোর',
            'পেছনের শক্ত দাঁত ও খাবারের চাপের জন্য আদর্শ',
            'নিখুঁত প্রান্তিক ফিটিং',
            'তাপমাত্রা সংবেদনশীলতামুক্ত'
          ]
        },
        {
          id: '4-e-crown-removal',
          code: '4.e',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'Crown Removal (old/faulty)',
          titleBn: 'ক্রাউন রিমুভাল (পুরনো/ত্রুটিপূর্ণ)',
          price: '৳4,000',
          image: 'assets/treatment/4.e. Crown removal.png',
          badge: 'Safe Removal',
          badgeBn: 'নিরাপদ অপসারণ',
          desc: 'Painless, atraumatic removal of old, loose, leaking, or defective dental crowns to treat underlying decay and prepare for new restorations.',
          descBn: 'পুরানো, ত্রুটিপূর্ণ বা ফুটো হয়ে যাওয়া ক্রাউন অক্ষতভাবে খুলে ভেতরের ইনফেকশন বা ক্ষয়ের চিকিৎসা করা।',
          benefits: [
            'Protects underlying natural tooth stump from breakage',
            'Painless procedure with local anesthesia',
            'Removes deep secondary bacterial decay',
            'Prepares tooth for fresh precision CAD/CAM crown'
          ],
          benefitsBn: [
            'ভেতরের প্রাকৃতিক দাঁতের গোড়া সুরক্ষিত রাখে',
            'লোকাল এনেস্থেশিয়ায় সম্পূর্ণ ব্যথাহীন পদ্ধতি',
            'ভেতরে জমে থাকা ব্যাকটেরিয়া ও পচন পরিষ্কার করে',
            'নতুন নিখুঁত ক্রাউন বসানোর উপযোগী করে তোলে'
          ]
        },
        {
          id: '4-f-veneer-zirconia',
          code: '4.f',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'Veneer (Zirconia)',
          titleBn: 'ভিনিয়ার (জিরকোনিয়া)',
          price: '৳12,000',
          image: 'assets/treatment/4.f. Veneer.png',
          badge: 'Hollywood Smile',
          badgeBn: 'স্মাইল মেকওভার',
          desc: 'Ultra-thin custom porcelain shells bonded to the front of your teeth to instantly correct discoloration, chips, gaps, or minor misalignment.',
          descBn: 'অতি-পাতলা কাস্টম পোর্সেলিন শেল যা দাঁতের রঙ, ফাঁকা বা ভাঙা অংশ ঢেকে দিয়ে একটি নিখুঁত উজ্জ্বল হাসি উপহার দেয়।',
          benefits: [
            'Stain-resistant high-gloss ceramic finish',
            'Minimal enamel preparation needed',
            'Corrects gaps, deep stains & uneven teeth',
            'Natural light reflection matching real enamel'
          ],
          benefitsBn: [
            'দাগ প্রতিরোধক দীর্ঘস্থায়ী উজ্জ্বল ফিনিশ',
            'দাঁতের খুব সামান্য অংশ প্রস্তুত করতে হয়',
            'দাঁতের ফাঁকা ও স্থায়ী দাগ দূর করে',
            'প্রাকৃতিক এনামেলের মতো আলো প্রতিফলিত করে'
          ]
        },
        {
          id: '4-g-smile-designing',
          code: '4.g',
          cat: 'Prosthodontics & Aesthetic Smile',
          catBn: 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',
          title: 'Smile Designing',
          titleBn: 'স্মাইল ডিজাইনিং',
          price: 'Included',
          image: 'assets/treatment/4.g. Smile Designing.png',
          badge: 'Included',
          badgeBn: 'অন্তর্ভুক্ত',
          desc: 'Comprehensive facial and dental aesthetic simulation using 3D intraoral digital scans to preview your ideal smile makeover before treatment begins.',
          descBn: 'চিকিৎসা শুরুর আগেই ৩ডি ডিজিটাল স্ক্যানের মাধ্যমে আপনার মুখের সাথে মানানসই নিখুঁত হাসির প্রিভিউ ডিজাইন করা।',
          benefits: [
            'See your simulated final smile before treatment starts',
            'Fully customized to your facial proportions and lip line',
            'Included seamlessly with all cosmetic & veneer procedures',
            'Zero guesswork — 100% predictable cosmetic results'
          ],
          benefitsBn: [
            'চিকিৎসা শুরুর আগেই নিজের ভবিষ্যৎ হাসি দেখার সুবিধা',
            'মুখের গড়ন ও ঠোঁটের অনুপাতের সাথে সামঞ্জস্যপূর্ণ',
            'কসমেটিক ও ভিনিয়ার চিকিৎসার সাথে সম্পূর্ণ অন্তর্ভুক্ত',
            'কোনো অনিশ্চয়তা ছাড়াই শতভাগ নির্ভুল ফলাফল'
          ]
        }
      ]
    },

    {
      id: 'orthodontics',
      num: '05',
      code: '5',
      nameEn: 'Orthodontics',
      nameBn: 'অর্থোডন্টিক্স',
      descEn: 'Invisible clear aligners (Invisalign) and modern orthodontic braces to straighten misaligned teeth and correct bite anomalies.',
      descBn: 'ইনভিজিবল ক্লিয়ার অ্যালাইনার্স (ইনভিজালাইন) ও আধুনিক অর্থোডন্টিক ব্রেসেস দিয়ে বাঁকা বা ফাঁকা দাঁত সোজা করার বিশেষ চিকিৎসা।',
      image: 'assets/treatment/5. Orthodontics.jpg',
      items: [
        {
          id: '5-a-invisalign',
          code: '5.a',
          cat: 'Orthodontics',
          catBn: 'অর্থোডন্টিক্স',
          title: 'Invisalign Orthodontic Aligner',
          titleBn: 'ইনভিজালাইন অর্থোডন্টিক অ্যালাইনার',
          price: 'Above ৳50,000',
          image: 'assets/treatment/5.a. Invisalign Orthodontic Aligner.png',
          badge: 'Invisible Comfort',
          badgeBn: 'অদৃশ্য ও আরামদায়ক',
          desc: 'Virtually invisible removable aligners custom-fabricated to straighten crooked or gapped teeth without noticeable metal wires or brackets.',
          descBn: 'মেটাল তার ছাড়া স্বচ্ছ ও খুলে ফেলার মতো অ্যালাইনার যা কোনো দৃশ্যমান তার ছাড়াই দাঁত সোজা ও সুন্দর করে।',
          benefits: [
            '100% transparent and discreet',
            'Removable while eating, brushing, and flossing',
            'No cuts, scratches, or wire emergencies',
            'Computer-simulated progress from day 1'
          ],
          benefitsBn: [
            'সম্পূর্ণ স্বচ্ছ ও দৃষ্টির আড়ালে থাকে',
            'খাওয়ার ও ব্রাশ করার সময় সহজে খোলা যায়',
            'তারের গুঁতো বা মুখের ক্ষতের ভয় নেই',
            'প্রথম দিন থেকেই অগ্রগতির কম্পিউটার সিমুলেশন'
          ]
        },
        {
          id: '5-b-orthodontic-braces',
          code: '5.b',
          cat: 'Orthodontics',
          catBn: 'অর্থোডন্টিক্স',
          title: 'Orthodontic Braces',
          titleBn: 'অর্থোডন্টিক ব্রেসেস',
          price: 'Above ৳50,000',
          image: 'assets/treatment/5.b Orthodontic Braces.png',
          badge: 'Alignment Expert',
          badgeBn: 'নিখুঁত অ্যালাইনমেন্ট',
          desc: 'Precision orthodontic treatment for severe bite misalignments, crowded teeth, overbites, underbites, and space closures.',
          descBn: 'অসমান দাঁত, অতিরিক্ত চাপযুক্ত দাঁত বা ফাঁকা দাঁতের স্থায়ী সমাধানের জন্য উন্নত অর্থোডন্টিক চিকিৎসা।',
          benefits: [
            'Effective for complex orthodontic and bite cases',
            'Tooth-colored ceramic brackets available for subtlety',
            'Creates a balanced, harmonious profile and smile',
            'Flexible monthly payment options during treatment'
          ],
          benefitsBn: [
            'জটিল কামড় ও অসম দাঁতের জন্য চূড়ান্ত সমাধান',
            'দাঁতের রঙের সাথে মেলানো সিরামিক ব্র্যাকেট সুবিধা',
            'সুন্দর ও আকর্ষণীয় মুখের অবয়ব তৈরি করে',
            'চিকিৎসাকালীন সহজ কিস্তি সুবিধা'
          ]
        }
      ]
    },

    {
      id: 'pediatric',
      num: '06',
      code: '6',
      nameEn: 'Pediatric Dentistry',
      nameBn: 'শিশু দন্ত চিকিৎসা',
      descEn: 'Gentle milk tooth extractions, fillings, pulpotomy, temporary crowns, pulpectomy, and space maintainers in a warm, fear-free environment.',
      descBn: 'শিশুদের দুধ দাঁত তোলা, ফিলিং, পালপোটমি, টেম্পোরারি ক্রাউন, পালপেক্টমি ও স্পেস মেইনটেইনার চিকিৎসা।',
      image: 'assets/treatment/6. Pediatric Dentistry.jpg',
      items: [
        {
          id: '6-a-deciduous-extraction',
          code: '6.a',
          cat: 'Pediatric Dentistry',
          catBn: 'শিশু দন্ত চিকিৎসা',
          title: 'Deciduous Tooth Extraction',
          titleBn: 'দুধ দাঁত তোলা',
          price: '৳1,000',
          image: 'assets/treatment/6.a. Deciduous Tooth Extraction.png',
          badge: 'Kid Friendly',
          badgeBn: 'শিশুবান্ধব',
          desc: 'Gentle, pain-free milk tooth extraction in a caring and friendly atmosphere to allow healthy permanent adult teeth eruption.',
          descBn: 'শিশুদের ভয়হীন ও স্নেহপূর্ণ পরিবেশে ব্যথামুক্তভাবে দুধ দাঁত তোলা যাতে স্থায়ী দাঁত সুন্দরভাবে উঠতে পারে।',
          benefits: [
            'Warm, friendly environment to eliminate dental fear',
            'Topical gel numbing before gentle extraction',
            'Prevents crowding of incoming adult teeth',
            'Child receives encouragement and gifts'
          ],
          benefitsBn: [
            'শিশুদের ভয় দূর করতে বিশেষ স্নেহপূর্ণ পরিবেশ',
            'ব্যথাহীনভাবে দাঁত তোলার জন্য জেল স্প্রে',
            'ভবিষ্যতের স্থায়ী দাঁত সোজা উঠতে সাহায্য করে',
            'শিশুদের জন্য উপহার ও আনন্দময় অভিজ্ঞতা'
          ]
        },
        {
          id: '6-b-deciduous-filling',
          code: '6.b',
          cat: 'Pediatric Dentistry',
          catBn: 'শিশু দন্ত চিকিৎসা',
          title: 'Deciduous Filling',
          titleBn: 'দুধ দাঁতের ফিলিং',
          price: '৳2,500',
          image: 'assets/treatment/6.b. Deciduous Filling.png',
          badge: 'Cavity Care',
          badgeBn: 'ক্যাভিটি সুরক্ষা',
          desc: 'Tooth-colored biocompatible composite filling to stop pediatric cavities, relieve eating sensitivity, and preserve primary teeth.',
          descBn: 'ছোটদের দুধ দাঁতের ক্ষয় ও গর্ত বন্ধ করে ব্যথা দূর করতে ব্যবহৃত শিশুবান্ধব ফিলিং।',
          benefits: [
            'Stops decay from reaching delicate pulp nerves',
            'Prevents early loss of primary teeth',
            'Quick, pain-free procedure with high durability',
            'Maintains proper chewing function for child growth'
          ],
          benefitsBn: [
            'দাঁতের ভেতরের নার্ভে ইনফেকশন ছড়ানো রোধ করে',
            'দুধ দাঁত অকালে পড়ে যাওয়া রোধ করে',
            'দ্রুত ও ব্যথাহীন ফিলিং পদ্ধতি',
            'শিশুর পুষ্টি ও চিবানোর ক্ষমতা বজায় রাখে'
          ]
        },
        {
          id: '6-c-deciduous-pulpotomy',
          code: '6.c',
          cat: 'Pediatric Dentistry',
          catBn: 'শিশু দন্ত চিকিৎসা',
          title: 'Deciduous Pulpotomy',
          titleBn: 'দুধ দাঁতের পালপোটমি',
          price: '৳4,000',
          image: 'assets/treatment/6.c. Deciduous Pulpotomy.png',
          badge: 'Pain Relief',
          badgeBn: 'ব্যথামুক্ত চিকিৎসা',
          desc: 'Coronal pulp treatment for deeply decayed baby teeth to eliminate pain and infection while preserving healthy root pulp until natural exfoliation.',
          descBn: 'শিশুর দাঁতের গভীর গর্ত ও তীব্র ব্যথা দূর করতে সংক্রমিত পাল্প অপসারণ করে দাঁত টিকিয়ে রাখার বিশেষ চিকিৎসা।',
          benefits: [
            'Provides immediate pain relief for crying children',
            'Preserves vital root structure for jaw development',
            'Single-visit comfortable kid-friendly procedure',
            'Avoids premature extraction and space loss'
          ],
          benefitsBn: [
            'তীব্র দাঁতের ব্যথা থেকে শিশুকে তাৎক্ষণিক মুক্তি দেয়',
            'চোয়ালের স্বাভাবিক বৃদ্ধির জন্য শেকড় সুস্থ রাখে',
            'এক সেশনেই আরামদায়ক শিশুবান্ধব চিকিৎসা',
            'অকালে দাঁত তোলা রোধ করে ফাঁকা হওয়া ঠেকায়'
          ]
        },
        {
          id: '6-d-deciduous-temporary-crown',
          code: '6.d',
          cat: 'Pediatric Dentistry',
          catBn: 'শিশু দন্ত চিকিৎসা',
          title: 'Deciduous Temporary Crown',
          titleBn: 'দুধ দাঁতের টেম্পোরারি ক্রাউন',
          price: '৳4,000',
          image: 'assets/treatment/6.d. Deciduous Temporary Crown.png',
          badge: 'Tooth Preserver',
          badgeBn: 'দাঁত সুরক্ষা',
          desc: 'Protective pediatric crown placed over treated or severely broken primary teeth, lasting 6 to 18+ months until natural tooth transition.',
          descBn: 'ক্ষতিগ্রস্ত দুধ দাঁতকে ৬ থেকে ১৮+ মাস পর্যন্ত চিবানোর উপযোগী ও সুরক্ষিত রাখতে ব্যবহৃত শিশুবান্ধব ক্রাউন।',
          benefits: [
            'Lasts 6–18+ months until natural adult tooth eruption',
            'Protects weakened primary teeth from breaking',
            'Restores full chewing power and bite height',
            'Bio-inert and safe for young children'
          ],
          benefitsBn: [
            'স্থায়ী দাঁত ওঠার আগ পর্যন্ত ৬–১৮+ মাস সুরক্ষিত রাখে',
            'দুর্বল হয়ে যাওয়া দুধ দাঁত ভেঙে যাওয়া থেকে বাঁচায়',
            'চিবানোর পূর্ণ শক্তি ও সঠিক বাইট ফিরিয়ে আনে',
            'শিশুদের জন্য শতভাগ নিরাপদ'
          ]
        },
        {
          id: '6-e-deciduous-pulpectomy',
          code: '6.e',
          cat: 'Pediatric Dentistry',
          catBn: 'শিশু দন্ত চিকিৎসা',
          title: 'Deciduous Pulpectomy',
          titleBn: 'দুধ দাঁতের পালপেক্টমি',
          price: '৳5,000',
          image: 'assets/treatment/6.e. Deciduous Pulpectomy.png',
          badge: 'Deep Care',
          badgeBn: 'গভীর সংক্রমণ নিরাময়',
          desc: 'Complete root canal therapy for severely infected baby teeth using resorbable paste that naturally dissolves as the adult tooth comes in.',
          descBn: 'দুধ দাঁতের শেকড় পর্যন্ত ছড়িয়ে পড়া গভীর ইনফেকশন দূর করতে বিশেষ ক্ষয়ণশীল পেস্ট দ্বারা সম্পূর্ণ রুট ক্যানাল।',
          benefits: [
            'Eliminates root-end abscess and swelling in children',
            'Uses resorbable filling safe for incoming adult teeth',
            'Preserves natural space maintainer in dental arch',
            'Performed with gentle, child-specialized technique'
          ],
          benefitsBn: [
            'শিশুর মাড়ির ফোলা ও পুঁজ সম্পূর্ণ নিরাময় করে',
            'স্থায়ী দাঁতের কোনো ক্ষতি না করে এমন বিশেষ পেস্ট ব্যবহৃত হয়',
            'প্রাকৃতিক স্পেস ধরে রেখে দাঁত আঁকাবাঁকা হওয়া রোধ করে',
            'অত্যন্ত যত্নশীল ও ব্যথাহীন পদ্ধতি'
          ]
        },
        {
          id: '6-f-deciduous-space-maintainer',
          code: '6.f',
          cat: 'Pediatric Dentistry',
          catBn: 'শিশু দন্ত চিকিৎসা',
          title: 'Deciduous Space Maintainer',
          titleBn: 'দুধ দাঁতের স্পেস মেইনটেইনার',
          price: '৳5,000',
          image: 'assets/treatment/6.f. Deciduous Space Maintainer.png',
          badge: 'Growth Guard',
          badgeBn: 'স্পেস সুরক্ষা',
          desc: 'Custom appliance to hold open the space left by a prematurely lost baby tooth, ensuring permanent adult teeth grow in straight and aligned.',
          descBn: 'অকালে দুধ দাঁত পড়ে গেলে পেছনের দাঁত সামনে ঝুঁকে পড়া রোধ করতে এবং স্থায়ী দাঁত ওঠার জায়গা ধরে রাখতে বিশেষ অ্যাপ্লায়েন্স।',
          benefits: [
            'Prevents adjacent teeth from drifting and crowding',
            'Guarantees space for proper permanent tooth eruption',
            'Reduces or eliminates future need for complex braces',
            'Custom-fitted, lightweight and comfortable for kids'
          ],
          benefitsBn: [
            'পাশের দাঁত হেলে পড়ে জায়গা বন্ধ হওয়া রোধ করে',
            'ভবিষ্যতের স্থায়ী দাঁত সঠিক স্থানে ওঠার জায়গা নিশ্চিত করে',
            'পরবর্তীতে ব্যয়বহুল ব্রেসেস চিকিৎসার প্রয়োজন কমিয়ে দেয়',
            'শিশুর মুখের মাপ অনুযায়ী অত্যন্ত হালকা ও আরামদায়ক'
          ]
        }
      ]
    }
  ];

  const categoryShowcaseGrid = document.getElementById('categoryShowcaseGrid');
  const treatmentModalBackdrop = document.getElementById('treatmentModalBackdrop');
  const treatmentModalClose = document.getElementById('treatmentModalClose');
  const modalTreatmentImg = document.getElementById('modalTreatmentImg');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalPricePill = document.getElementById('modalPricePill');
  const modalTreatmentTitle = document.getElementById('modalTreatmentTitle');
  const modalTreatmentDesc = document.getElementById('modalTreatmentDesc');
  const modalBenefitsList = document.getElementById('modalBenefitsList');
  const modalCostAmount = document.getElementById('modalCostAmount');
  const modalPricingBtn = document.getElementById('modalPricingBtn');
  const modalBookBtn = document.getElementById('modalBookBtn');

  function renderCategoryShowcase() {
    if (!categoryShowcaseGrid) return;
    const isBn = document.body.classList.contains('bn-mode');

    categoryShowcaseGrid.innerHTML = SERVICES_CATEGORIES.map((cat, idx) => {
      const treatmentCount = cat.items.length;
      const countLabel = isBn ? `${treatmentCount}টি ট্রিটমেন্ট` : `${treatmentCount} Treatments`;
      const exploreLabel = isBn ? 'ট্রিটমেন্টসমূহ দেখুন' : 'Hover to Explore';
      const flyoutTag = isBn ? `ক্যাটাগরি ০${idx + 1} পদ্ধতিসমূহ` : `Category 0${idx + 1} Procedures`;
      const flyoutHint = isBn ? 'বিস্তারিত জানতে ক্লিক করুন' : 'Click any procedure';

      const itemsHtml = cat.items.map((item, itemIdx) => `
        <div class="wire-treatment-item" data-cat-id="${cat.id}" data-item-id="${item.id}" data-item-idx="${itemIdx}">
          <div class="wire-item-left">
            <span class="wire-item-dot"></span>
            <span class="wire-item-title">${isBn ? item.titleBn : item.title}</span>
          </div>
          <div class="wire-item-right">
            <span class="wire-item-price">${item.price}</span>
            <span class="wire-item-arrow">&nearr;</span>
          </div>
        </div>
      `).join('');

      return `
        <div class="cat-showcase-card" data-category-id="${cat.id}" data-card-index="${idx}">
          <div class="cat-showcase-media">
            <img src="${cat.image}" alt="${cat.nameEn}" loading="lazy">
            <span class="cat-showcase-num">${cat.num}</span>
            <span class="cat-showcase-count"><span class="count-pulse"></span> ${countLabel}</span>
          </div>
          <div class="cat-showcase-body">
            <h3 class="cat-showcase-title">${isBn ? cat.nameBn : cat.nameEn}</h3>
            <p class="cat-showcase-desc">${isBn ? cat.descBn : cat.descEn}</p>
            <div class="cat-showcase-footer">
              <span class="cat-explore-btn">
                <span>${exploreLabel}</span>
                <span>&rarr;</span>
              </span>
              <div class="cat-wire-node-dot" title="Connected Branch"></div>
            </div>
          </div>

          <!-- WIRE CONNECTED FLYOUT -->
          <div class="cat-wire-flyout">
            <svg class="cat-wire-svg-canvas" viewBox="0 0 24 300" preserveAspectRatio="none">
              ${cat.items.map((_, i) => {
                const yTarget = 40 + i * 46;
                return `<path class="wire-path wire-path-${i}" d="M 0 150 C 12 150, 12 ${yTarget}, 24 ${yTarget}" />`;
              }).join('')}
            </svg>

            <div class="wire-flyout-header">
              <span class="wire-flyout-tag">${flyoutTag}</span>
              <span class="wire-flyout-hint">${flyoutHint}</span>
            </div>
            <div class="wire-treatments-list">
              ${itemsHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Dynamically adjust flyout positioning (flip left if near right edge)
    function adjustFlyoutPositions() {
      const cards = categoryShowcaseGrid.querySelectorAll('.cat-showcase-card');
      const winWidth = window.innerWidth;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.right + 370 > winWidth && winWidth > 992) {
          card.classList.add('flyout-left');
        } else {
          card.classList.remove('flyout-left');
        }
      });
    }

    adjustFlyoutPositions();
    window.addEventListener('resize', adjustFlyoutPositions, { passive: true });

    // Bind item click to open treatment modal
    categoryShowcaseGrid.querySelectorAll('.wire-treatment-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const catId = item.dataset.catId;
        const itemId = item.dataset.itemId;
        openTreatmentModal(catId, itemId);
      });

      // Highlight wire on item hover
      const itemIdx = item.dataset.itemIdx;
      const card = item.closest('.cat-showcase-card');
      if (card) {
        const wire = card.querySelector(`.wire-path-${itemIdx}`);
        if (wire) {
          item.addEventListener('mouseenter', () => wire.classList.add('is-active'));
          item.addEventListener('mouseleave', () => wire.classList.remove('is-active'));
        }
      }
    });

    // Mobile / Tablet toggle on tap
    categoryShowcaseGrid.querySelectorAll('.cat-showcase-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.wire-treatment-item')) return;
        const isActive = card.classList.contains('is-active');
        categoryShowcaseGrid.querySelectorAll('.cat-showcase-card').forEach(c => c.classList.remove('is-active'));
        if (!isActive) card.classList.add('is-active');
      });
    });
  }

  function openTreatmentModal(categoryKey, treatmentId) {
    const cat = SERVICES_CATEGORIES.find(c => c.id === categoryKey);
    if (!cat || !treatmentModalBackdrop) return;
    const t = cat.items.find(x => x.id === treatmentId);
    if (!t) return;

    const isBn = document.body.classList.contains('bn-mode');

    if (modalTreatmentImg) {
      modalTreatmentImg.src = t.image;
      modalTreatmentImg.alt = t.title;
    }
    if (modalCategoryBadge) modalCategoryBadge.textContent = isBn ? t.catBn : t.cat;
    if (modalPricePill) modalPricePill.textContent = 'Est. ' + t.price;
    if (modalTreatmentTitle) {
      modalTreatmentTitle.innerHTML = `<span class="modal-title-en">${t.title}</span><span class="modal-title-bn">${t.titleBn}</span>`;
    }
    if (modalTreatmentDesc) {
      modalTreatmentDesc.innerHTML = `<p class="desc-text">${isBn ? t.descBn : t.desc}</p>`;
    }
    if (modalBenefitsList) {
      const benefits = isBn ? t.benefitsBn : t.benefits;
      modalBenefitsList.innerHTML = benefits.map(b => `<li>${b}</li>`).join('');
    }
    if (modalCostAmount) modalCostAmount.textContent = t.price;

    if (modalBookBtn) {
      const msg = encodeURIComponent(`Hello Doctor, I would like to book an appointment for: ${t.title} (${t.price}).`);
      modalBookBtn.href = `https://wa.me/8801674878470?text=${msg}`;
    }

    treatmentModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeTreatmentModal() {
    if (!treatmentModalBackdrop) return;
    treatmentModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (treatmentModalClose) {
    treatmentModalClose.addEventListener('click', closeTreatmentModal);
  }
  if (treatmentModalBackdrop) {
    treatmentModalBackdrop.addEventListener('click', (e) => {
      if (e.target === treatmentModalBackdrop) closeTreatmentModal();
    });
  }

  // Smooth scroll to #calculator when clicking "See Full Pricing"
  if (modalPricingBtn) {
    modalPricingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeTreatmentModal();
      const calcSection = document.getElementById('calculator');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && treatmentModalBackdrop && treatmentModalBackdrop.classList.contains('open')) {
      closeTreatmentModal();
    }
  });

  // Re-render showcase on language change
  document.addEventListener('ddz-langchange', () => {
    renderCategoryShowcase();
  });

  // Initial render
  if (categoryShowcaseGrid) {
    renderCategoryShowcase();
  }


  /* ── 6. FAQ ACCORDION & INTERACTIVE FILTER/SEARCH ── */
  function bindFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    const searchInput = document.getElementById('faqSearchInput');
    const clearBtn = document.getElementById('faqSearchClear');
    const resetBtn = document.getElementById('faqResetSearchBtn');
    const filterPills = document.querySelectorAll('.faq-pill');
    const emptyState = document.getElementById('faqEmptyState');
    let currentCategory = 'all';

    // Accordion Toggle
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      if (questionBtn) {
        questionBtn.onclick = () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        };
      }
    });

    // Filtering & Searching Handler
    function filterFaqs() {
      const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = query ? 'flex' : 'none';
      }

      let visibleCount = 0;
      faqItems.forEach(item => {
        const itemCat = item.getAttribute('data-category') || 'treatments';
        const matchesCategory = currentCategory === 'all' || itemCat === currentCategory;

        let matchesSearch = true;
        if (query) {
          const text = item.textContent.toLowerCase();
          const keywords = (item.getAttribute('data-keywords') || '').toLowerCase();
          matchesSearch = text.includes(query) || keywords.includes(query);
        }

        if (matchesCategory && matchesSearch) {
          item.classList.remove('faq-hidden');
          visibleCount++;
        } else {
          item.classList.add('faq-hidden');
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    // Category Pills
    filterPills.forEach(pill => {
      pill.onclick = () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.getAttribute('data-category') || 'all';
        filterFaqs();
      };
    });

    // Search Input Events
    if (searchInput) {
      searchInput.oninput = filterFaqs;
    }

    if (clearBtn) {
      clearBtn.onclick = () => {
        if (searchInput) {
          searchInput.value = '';
          searchInput.focus();
        }
        filterFaqs();
      };
    }

    if (resetBtn) {
      resetBtn.onclick = () => {
        if (searchInput) searchInput.value = '';
        currentCategory = 'all';
        filterPills.forEach(p => {
          if (p.getAttribute('data-category') === 'all') p.classList.add('active');
          else p.classList.remove('active');
        });
        filterFaqs();
      };
    }
  }

  bindFaq();


  /* ── 7. LANGUAGE TOGGLE ── */
  const langToggle = document.getElementById('lang-toggle');
  const savedLang = localStorage.getItem('ddz-lang') || 'en';

  // Switch placeholders of inputs that carry data-ph-en / data-ph-bn
  function applyInputPlaceholders() {
    const isBn = document.body.classList.contains('bn-mode');
    document.querySelectorAll('input[data-ph-en][data-ph-bn]').forEach(input => {
      input.placeholder = isBn ? input.dataset.phBn : input.dataset.phEn;
    });
  }

  // Apply saved language on load
  if (savedLang === 'bn') {
    document.body.classList.add('bn-mode');
    document.documentElement.lang = 'bn';
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const isBn = document.body.classList.toggle('bn-mode');
      document.documentElement.lang = isBn ? 'bn' : 'en';
      localStorage.setItem('ddz-lang', isBn ? 'bn' : 'en');
      applyInputPlaceholders();
      // Let other modules (blog, calculator) re-render in the new language
      document.dispatchEvent(new CustomEvent('ddz-langchange', {
        detail: { lang: isBn ? 'bn' : 'en' }
      }));
    });
  }

  applyInputPlaceholders();


  /* ── 8. 3D TILT EFFECT & WHY ROADMAP + 3D DENTAL SCANNER ── */
  function setupTilt(elementId, intensity = 8) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
      el.style.transition = 'transform 0.5s ease-out';
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'none';
    });
  }

  setupTilt('heroTilt', 6);
  setupTilt('dental3dCard', 8);

  // ── Roadmap & 3D Dental Mode Interactions ──
  const roadmapItems = document.querySelectorAll('.roadmap-item');
  const roadmapProgress = document.getElementById('roadmapProgress');
  const hudStatusText = document.getElementById('hudStatusText');
  const toothEnamel = document.querySelector('.tooth-enamel');
  const toothDentin = document.querySelector('.tooth-dentin');
  const toothRootCanal = document.querySelector('.tooth-root-canal');
  const toothImplant = document.querySelector('.tooth-implant-system');
  const laserSweep = document.querySelector('.holo-laser-sweep');
  const modeBtns = document.querySelectorAll('.btn-3d-mode');

  function set3dDentalMode(mode) {
    modeBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));

    if (mode === 'scan') {
      if (hudStatusText) hudStatusText.textContent = '3D INTRAORAL SCAN · ACTIVE';
      if (laserSweep) laserSweep.style.display = 'block';
      if (toothEnamel) toothEnamel.style.opacity = '1';
      if (toothDentin) toothDentin.style.opacity = '0.75';
      if (toothRootCanal) toothRootCanal.style.opacity = '0.4';
      if (toothImplant) toothImplant.style.opacity = '0';
    } else if (mode === 'rootcanal') {
      if (hudStatusText) hudStatusText.textContent = 'ROOT CANAL (ENDODONTICS) · PULP ACTIVE';
      if (laserSweep) laserSweep.style.display = 'block';
      if (toothEnamel) toothEnamel.style.opacity = '0.35';
      if (toothDentin) toothDentin.style.opacity = '0.85';
      if (toothRootCanal) toothRootCanal.style.opacity = '1';
      if (toothImplant) toothImplant.style.opacity = '0';
    } else if (mode === 'implant') {
      if (hudStatusText) hudStatusText.textContent = 'TITANIUM IMPLANT FIXTURE · LOCKED';
      if (laserSweep) laserSweep.style.display = 'none';
      if (toothEnamel) toothEnamel.style.opacity = '0.85';
      if (toothDentin) toothDentin.style.opacity = '0.2';
      if (toothRootCanal) toothRootCanal.style.opacity = '0';
      if (toothImplant) toothImplant.style.opacity = '1';
    }
  }

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      set3dDentalMode(btn.dataset.mode);
    });
  });

  roadmapItems.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      roadmapItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      if (roadmapProgress) {
        const pct = ((idx + 1) / roadmapItems.length) * 100;
        roadmapProgress.style.height = pct + '%';
      }
      if (idx === 0) set3dDentalMode('scan');
      else if (idx === 1 || idx === 2) set3dDentalMode('rootcanal');
      else if (idx === 3) set3dDentalMode('implant');
    });

    item.addEventListener('click', () => {
      roadmapItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      if (roadmapProgress) {
        const pct = ((idx + 1) / roadmapItems.length) * 100;
        roadmapProgress.style.height = pct + '%';
      }
      if (idx === 0) set3dDentalMode('scan');
      else if (idx === 1 || idx === 2) set3dDentalMode('rootcanal');
      else if (idx === 3) set3dDentalMode('implant');
    });
  });


  /* ── 9. BEFORE/AFTER SLIDER ── */
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const container = slider.closest('.ba-images');
    const afterImg = container?.querySelector('.ba-after');
    if (!container || !afterImg) return;

    let isDragging = false;

    function updateSlider(clientX) {
      const rect = container.getBoundingClientRect();
      let x = ((clientX - rect.left) / rect.width) * 100;
      x = Math.max(5, Math.min(95, x));
      slider.style.left = x + '%';
      afterImg.style.clipPath = `inset(0 0 0 ${x}%)`;
    }

    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      e.preventDefault();
    });

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) updateSlider(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch support
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      e.preventDefault();
    }, { passive: false });

    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches[0]) {
        updateSlider(e.touches[0].clientX);
      }
    }, { passive: true });

    document.addEventListener('touchend', () => {
      isDragging = false;
    });
  });


  /* ── 10. SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  /* ── 11. ACTIVE NAV HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinksAll.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--white)'
            : '';
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72}px 0px -40% 0px`
  });

  sections.forEach(section => sectionObserver.observe(section));


  /* ── 12. EMERGENCY PAIN POPUP (Triggered on Services Section) ── */
  const painToast = document.getElementById('painPopupToast');
  const painToastClose = document.getElementById('painPopupClose');
  const servicesSection = document.getElementById('services') || document.querySelector('.ss-wrapper');

  if (painToast && servicesSection) {
    let hasDismissed = sessionStorage.getItem('ddz_pain_popup_dismissed') === '1';

    const painObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasDismissed) {
          painToast.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15
    });

    painObserver.observe(servicesSection);

    if (painToastClose) {
      painToastClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        painToast.classList.remove('visible');
        hasDismissed = true;
        sessionStorage.setItem('ddz_pain_popup_dismissed', '1');
      });
    }
  }


  /* ── 13. SUPABASE HYDRATION (graceful: keeps static HTML on failure) ── */

  async function hydrateFromSupabase() {
    const client = await window.DDZ.supabase();
    if (!client) return;

    // Clinic Settings & Logo
    try {
      const { data: settings } = await client
        .from('clinic_settings')
        .select('*')
        .limit(1)
        .single();
      if (settings && settings.logo_url) {
        localStorage.setItem('ddz_clinic_logo', settings.logo_url);
        if (window.DDZ && window.DDZ.applySiteLogo) {
          window.DDZ.applySiteLogo(settings.logo_url);
        }
      }
    } catch (e) {}

    // Reviews → rebuild #reviews-track with real Google review data from Supabase/Admin
    const reviewsTrackEl = document.getElementById('reviews-track');
    if (reviewsTrackEl) {
      const { data: reviews, error } = await client
        .from('reviews')
        .select('*')
        .order('sort_order', { ascending: true });

      if (!error && reviews && reviews.length > 0) {
        reviewsTrackEl.innerHTML = '';

        function renderCard(r, isDuplicate = false) {
          const card = document.createElement('a');
          card.className = 'review-img-card';
          card.href = r.source_url || '#';
          card.target = '_blank';
          card.rel = 'noopener';
          if (isDuplicate) {
            card.setAttribute('aria-hidden', 'true');
            card.setAttribute('tabindex', '-1');
          } else {
            card.setAttribute('aria-label', 'Google review by ' + (r.author || 'Google user'));
          }

          const img = document.createElement('img');
          img.src = r.image_url || '';
          img.alt = isDuplicate ? '' : ((r.author || 'Google review') + ' — Digital Dental Zone');
          img.loading = 'lazy';

          const link = document.createElement('span');
          link.className = 'review-img-link';
          const en = document.createElement('span');
          en.setAttribute('data-lang-en', '');
          en.textContent = 'View on Google';
          const bn = document.createElement('span');
          bn.setAttribute('data-lang-bn', '');
          bn.textContent = 'Google-এ দেখুন';
          link.appendChild(en);
          link.appendChild(bn);
          link.appendChild(document.createTextNode(' ↗'));

          card.appendChild(img);
          card.appendChild(link);
          return card;
        }

        // Set 1: Real Items
        reviews.forEach(r => reviewsTrackEl.appendChild(renderCard(r, false)));
        // Set 2: Duplicate for Seamless Infinite Loop
        reviews.forEach(r => reviewsTrackEl.appendChild(renderCard(r, true)));

        // Re-initialize ticker if needed
        reviewsTickerStarted = false;
        initReviewsTicker();
      }
    }

    // FAQs → rebuild #faq-list from the database
    const faqList = document.getElementById('faq-list');
    if (faqList) {
      const { data: faqs, error: faqError } = await client
        .from('faqs')
        .select('*')
        .order('sort_order', { ascending: true });

      if (!faqError && faqs && faqs.length > 0) {
        faqList.innerHTML = '';

        function getFaqCategory(f, idx) {
          if (f.category) return f.category;
          const id = f.id || (idx + 1);
          if ([1, 6, 7, 10].includes(id)) return 'treatments';
          if ([2, 8].includes(id)) return 'technology';
          if ([3, 9].includes(id)) return 'pricing';
          if ([4, 5, 11, 12].includes(id)) return 'chamber';
          return 'treatments';
        }

        faqs.forEach((f, idx) => {
          const item = document.createElement('div');
          item.className = 'faq-item';
          const cat = getFaqCategory(f, idx);
          item.setAttribute('data-category', cat);
          item.setAttribute('data-keywords', (f.keywords || '') + ' ' + (f.question_en || '') + ' ' + (f.question_bn || ''));

          const numStr = (idx + 1).toString().padStart(2, '0');

          const btn = document.createElement('button');
          btn.className = 'faq-question';
          btn.id = 'faq-q' + (idx + 1);

          btn.innerHTML = `
            <span class="faq-q-left">
              <span class="faq-num">${numStr}</span>
              <span class="faq-title-wrap">
                <span data-lang-en>${f.question_en}</span>
                <span data-lang-bn>${f.question_bn}</span>
              </span>
            </span>
            <span class="faq-icon-bubble"><span class="faq-plus">+</span></span>
          `;

          const answerWrap = document.createElement('div');
          answerWrap.className = 'faq-answer-wrapper';
          answerWrap.innerHTML = `
            <div class="faq-answer-inner">
              <p data-lang-en>${f.answer_en}</p>
              <p data-lang-bn>${f.answer_bn}</p>
            </div>
          `;

          item.appendChild(btn);
          item.appendChild(answerWrap);
          faqList.appendChild(item);
        });

        bindFaq(); // re-bind accordion & filter behaviour on newly injected items
      }
    }
  }

  hydrateFromSupabase();

});
