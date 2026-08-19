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
  const containers = document.querySelectorAll('#nav-logo-container, .nav-logo-icon');
  containers.forEach(container => {
    container.innerHTML = '<img src="' + logoUrl + '" class="nav-logo-img" alt="Digital Dental Zone Logo">';
  });

  // Apply to favicon
  let favicon = document.getElementById('favicon-link');
  if (favicon) {
    favicon.href = logoUrl;
  } else {
    favicon = document.createElement('link');
    favicon.id = 'favicon-link';
    favicon.rel = 'icon';
    favicon.href = logoUrl;
    document.head.appendChild(favicon);
  }
};

// Immediate hydration from cache to eliminate UI flicker
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
  } catch (e) {}
})();