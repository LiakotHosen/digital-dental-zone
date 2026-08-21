/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — SERVICES PAGE LOGIC
   Category filtering, search, and direct hash scroll highlight
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  const filterPills = document.querySelectorAll('.filter-pill');
  const categorySections = document.querySelectorAll('.service-category-section');
  const searchInput = document.getElementById('servicesSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const noSearchResults = document.getElementById('noSearchResults');

  let currentFilter = 'all';
  let searchQuery = '';

  const CAT_MAP = {
    'all': 'all',
    'diagnostics': 'diagnostics',
    'diag': 'diagnostics',
    'rct': 'rct',
    'root-canal': 'rct',
    'surgery': 'surgery',
    'oral-surgery': 'surgery',
    'prostho': 'prosthodontics',
    'prosthodontics': 'prosthodontics',
    'ortho': 'orthodontics',
    'orthodontics': 'orthodontics',
    'pedia': 'pediatric',
    'pediatric': 'pediatric',
    'pediatrics': 'pediatric'
  };

  function normalizeCat(cat) {
    if (!cat) return 'all';
    const c = cat.toLowerCase().trim();
    return CAT_MAP[c] || c;
  }

  // Category Filter Pills Click Handler
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      currentFilter = pill.dataset.filter || 'all';
      applyFilterAndSearch();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      applyFilterAndSearch();
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        applyFilterAndSearch();
      });
    }
  }

  // Combined Filter and Search Function
  function applyFilterAndSearch() {
    let visibleTotal = 0;
    const activeCat = normalizeCat(currentFilter);

    categorySections.forEach(section => {
      const sectionCatId = normalizeCat(section.dataset.categoryId || section.id.replace('cat-', ''));
      const matchesCategory = activeCat === 'all' || activeCat === sectionCatId;

      let sectionVisibleCount = 0;
      const cards = section.querySelectorAll('.service-detail-card');

      cards.forEach(card => {
        const cardCat = normalizeCat(card.dataset.category);
        const matchesCardCategory = activeCat === 'all' || activeCat === cardCat || activeCat === sectionCatId;
        const textContent = (card.textContent || '').toLowerCase();
        const matchesSearch = !searchQuery || textContent.includes(searchQuery);

        if (matchesCategory && matchesCardCategory && matchesSearch) {
          card.classList.remove('is-hidden');
          sectionVisibleCount++;
          visibleTotal++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      if (sectionVisibleCount > 0 && matchesCategory) {
        section.classList.remove('is-hidden');
      } else {
        section.classList.add('is-hidden');
      }
    });

    if (noSearchResults) {
      noSearchResults.style.display = visibleTotal === 0 ? 'block' : 'none';
    }
  }

  // Direct Anchor Hash Navigation & Glow Highlight
  function handleUrlHashHighlight() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const targetElement = document.getElementById(hash);
    if (!targetElement) return;

    // If it's a treatment card, ensure its category is visible
    if (targetElement.classList.contains('service-detail-card')) {
      const catId = normalizeCat(targetElement.dataset.category);
      if (normalizeCat(currentFilter) !== 'all' && normalizeCat(currentFilter) !== catId) {
        filterPills.forEach(p => {
          if (normalizeCat(p.dataset.filter) === catId) {
            filterPills.forEach(x => {
              x.classList.remove('active');
              x.setAttribute('aria-selected', 'false');
            });
            p.classList.add('active');
            p.setAttribute('aria-selected', 'true');
            currentFilter = p.dataset.filter;
          }
        });
        applyFilterAndSearch();
      }

      // Auto-open the deep dive accordion for the targeted treatment
      const deepDive = targetElement.querySelector('.treatment-deep-dive-accordion');
      if (deepDive) {
        deepDive.open = true;
      }

      // Smooth scroll to target card
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetElement.classList.add('is-target-highlight');
        setTimeout(() => {
          targetElement.classList.remove('is-target-highlight');
        }, 4000);
      }, 150);
    } else if (targetElement.classList.contains('service-category-section')) {
      const catId = normalizeCat(targetElement.dataset.categoryId || targetElement.id.replace('cat-', ''));
      filterPills.forEach(p => {
        if (normalizeCat(p.dataset.filter) === catId) {
          filterPills.forEach(x => {
            x.classList.remove('active');
            x.setAttribute('aria-selected', 'false');
          });
          p.classList.add('active');
          p.setAttribute('aria-selected', 'true');
          currentFilter = p.dataset.filter;
        }
      });
      applyFilterAndSearch();
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }

  // Listen for hash changes
  window.addEventListener('hashchange', handleUrlHashHighlight);

  // Run on initial page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyFilterAndSearch();
      handleUrlHashHighlight();
    });
  } else {
    applyFilterAndSearch();
    handleUrlHashHighlight();
  }

  // Update WhatsApp booking links on language toggle
  function syncWhatsAppLinks() {
    const isBn = document.body.classList.contains('bn-mode');
    document.querySelectorAll('.service-book-btn').forEach(btn => {
      const enMsg = btn.dataset.enMsg;
      const bnMsg = btn.dataset.bnMsg;
      const msg = isBn ? bnMsg : enMsg;
      if (msg) {
        btn.href = `https://wa.me/8801674878470?text=${msg}`;
      }
    });

    if (searchInput) {
      searchInput.placeholder = isBn
        ? searchInput.dataset.placeholderBn
        : searchInput.dataset.placeholderEn;
    }
  }

  document.addEventListener('ddz-langchange', syncWhatsAppLinks);
  syncWhatsAppLinks();

})();
