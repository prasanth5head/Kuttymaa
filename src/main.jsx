// Dev-only: suppress a noisy React runtime warning about non-boolean attributes
// This runs before React mounts so it can filter messages emitted during render.
if (import.meta.env && import.meta.env.DEV && typeof window !== 'undefined') {
  const orig = console.error.bind(console);
  console.error = (...args) => {
    try {
      const msg = String(args[0] || '');
      const joined = args.map(a => String(a)).join(' ');
      const mentionsItem = joined.includes(' item') || joined.includes('item');
      if (msg.includes('Received `%s` for a non-boolean attribute') && mentionsItem) {
        return;
      }
    } catch (e) {
      // fallthrough
    }
    orig(...args);
  };
}

import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { trackPageView } from './analytics.js'

// `trackPageView` is provided by `src/analytics.js` and wraps `gtag` safely.

const AnalyticsBootstrap = () => {
  useEffect(() => {
    const handlePageChange = () => trackPageView();

    trackPageView();

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function patchedPushState(...args) {
      originalPushState.apply(this, args);
      handlePageChange();
    };

    window.history.replaceState = function patchedReplaceState(...args) {
      originalReplaceState.apply(this, args);
      handlePageChange();
    };

    window.addEventListener('popstate', handlePageChange);
    window.addEventListener('hashchange', handlePageChange);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handlePageChange);
      window.removeEventListener('hashchange', handlePageChange);
    };
  }, []);

  return null;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnalyticsBootstrap />
    <App />
  </StrictMode>,
)
