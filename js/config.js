/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Site Configuration
   Supabase credentials + clinic constants + Logo/Favicon Loader
   ═══════════════════════════════════════════════════ */

window.DDZ_CONFIG = {
  supabaseUrl: 'https://jyqmjfvbsbujjrdffxra.supabase.co',
  supabaseAnonKey: 'sb_publishable_i7cZJsJOOKdO7kd4pYSBXQ_mmFKTuUj',

  // Clinic / conversion constants
  phone: '01674-878470',
  phoneIntl: '+8801674878470',
  whatsapp: 'https://wa.me/8801674878470',
  messenger: 'https://m.me/nusratdental.barishal/',
  facebook: 'https://www.facebook.com/nusratdental.barishal/',
  address: '15, Parara Road (Opp. Surovi Booking Office), Barishal',
  mapUrl: 'https://maps.app.goo.gl/LorR3QSZqivKtxk76',
  currency: '৳'
};

window.DDZ = window.DDZ || {};

window.DDZ.applySiteLogo = function (logoUrl) {
  if (!logoUrl) return;

  // Apply to all navbar & footer logo containers
  const containers = document.querySelectorAll('#nav-logo-container, .nav-logo-icon, .nav-logo-box, .footer-logo-container, #sidebar-logo-container');
  containers.forEach(container => {
    const existingImg = container.querySelector('img');
    if (existingImg) {
      if (existingImg.getAttribute('src') !== logoUrl) {
        existingImg.src = logoUrl;
      }
      existingImg.style.display = 'block';
    } else {
      container.innerHTML = '<img src="' + logoUrl + '" class="nav-logo-img" alt="Digital Dental Zone Logo" onerror="this.src=\'/assets/ddz-logo.png\'">';
    }
  });

  // Apply to all favicon and touch icon links
  const favicons = document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]');
  if (favicons.length > 0) {
    favicons.forEach(fav => {
      fav.href = logoUrl;
      if (logoUrl.endsWith('.png')) fav.type = 'image/png';
      else if (logoUrl.endsWith('.svg')) fav.type = 'image/svg+xml';
      else if (logoUrl.endsWith('.jpg') || logoUrl.endsWith('.jpeg')) fav.type = 'image/jpeg';
    });
  } else {
    const favicon = document.createElement('link');
    favicon.id = 'favicon-link';
    favicon.rel = 'icon';
    favicon.href = logoUrl;
    document.head.appendChild(favicon);
  }
};

// Immediate hydration from cache + fast asynchronous fetch from Supabase
(function () {
  try {
    const cachedLogo = localStorage.getItem('ddz_clinic_logo');
    if (cachedLogo) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => window.DDZ.applySiteLogo(cachedLogo));
      } else {
        window.DDZ.applySiteLogo(cachedLogo);
      }
    }

    // Auto sync from storage events across multiple tabs
    window.addEventListener('storage', (e) => {
      if (e.key === 'ddz_clinic_logo' && e.newValue) {
        window.DDZ.applySiteLogo(e.newValue);
      }
    });

    // Fast direct REST query for live settings/logo
    const cfg = window.DDZ_CONFIG;
    if (cfg && cfg.supabaseUrl && cfg.supabaseAnonKey && typeof fetch === 'function') {
      fetch(cfg.supabaseUrl + '/rest/v1/clinic_settings?select=*&limit=1', {
        headers: {
          'apikey': cfg.supabaseAnonKey,
          'Authorization': 'Bearer ' + cfg.supabaseAnonKey
        }
      })
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (Array.isArray(data) && data[0] && data[0].logo_url) {
            const liveLogo = data[0].logo_url;
            localStorage.setItem('ddz_clinic_logo', liveLogo);
            localStorage.setItem('ddz_site_settings', JSON.stringify(data[0]));
            window.DDZ.applySiteLogo(liveLogo);
          }
        })
        .catch(() => {});
    }
  } catch (e) {}
})();