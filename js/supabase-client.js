/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — Supabase Client
   Loads supabase-js from CDN and exposes a singleton.
   Degrades gracefully when the backend is unreachable.
   ═══════════════════════════════════════════════════ */

(function () {
  const cfg = window.DDZ_CONFIG;
  if (!cfg || !cfg.supabaseUrl || !cfg.supabaseAnonKey) return;

  let supabaseClient = null;

  function init() {
    const lib = window.supabase;
    if (!lib || !lib.createClient) return null;
    try {
      supabaseClient = lib.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    } catch (e) {
      console.warn('[DDZ] Supabase init failed:', e);
      supabaseClient = null;
    }
    return supabaseClient;
  }

  // Promise that resolves to the client once the CDN script has loaded.
  // Components can `await DDZ.supabase()` and handle null as "offline".
  window.DDZ = window.DDZ || {};

  window.DDZ.supabase = function () {
    return new Promise((resolve) => {
      if (supabaseClient) return resolve(supabaseClient);

      const attempt = () => resolve(init());

      if (window.supabase) return attempt();

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.48.1';
      script.onload = attempt;
      script.onerror = () => resolve(null);
      document.head.appendChild(script);
    });
  };

  // Load the client immediately if the library is already present.
  if (window.supabase) init();
})();