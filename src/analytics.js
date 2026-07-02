// Lightweight Google Analytics wrapper for GA4 (gtag)
function getMeasurementId() {
  try {
    return window.__GA4_MEASUREMENT_ID__ || '';
  } catch (e) {
    return '';
  }
}

export function isEnabled() {
  const id = getMeasurementId();
  return Boolean(id && id.startsWith('G-') && !id.includes('REPLACE_WITH_YOUR') && typeof window !== 'undefined');
}

export function trackPageView() {
  if (!isEnabled() || typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: window.location.pathname + window.location.search + window.location.hash,
    page_title: document.title,
  });
}

export function trackEvent(name, params = {}) {
  if (!isEnabled() || typeof window === 'undefined' || !window.gtag) return;
  if (!name) return;
  window.gtag('event', name, params);
}

export default { isEnabled, trackPageView, trackEvent };
