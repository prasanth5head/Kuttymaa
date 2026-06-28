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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
