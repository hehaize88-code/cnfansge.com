"use client";
import { useEffect } from 'react';

// Use an existing site analytics tag when present; do not create another stream.
export default function InteractionEvents({ language }) {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest?.('a[href]');
      if (!link || typeof window.gtag !== 'function') return;
      const destination = new URL(link.href, window.location.href);
      const product = destination.hostname === 'cnfansge.com' && destination.pathname.startsWith('/AllProducts/');
      const guide = destination.origin === window.location.origin && destination.pathname.includes('/articles/');
      if (product || guide) window.gtag('event', product ? 'catalog_outbound' : 'guide_open', {
        language, page_path:window.location.pathname, destination_path:destination.pathname,
        transport_type:'beacon'
      });
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [language]);
  return null;
}
