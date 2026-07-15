'use client';

import { useEffect } from 'react';
import { pendingHashKey, scrollToHash } from '@/components/SmoothAnchor';

export default function SmoothScroll() {
  useEffect(() => {
    const pendingHash = window.sessionStorage.getItem(pendingHashKey);

    if (pendingHash && window.location.pathname === '/') {
      window.sessionStorage.removeItem(pendingHashKey);
      window.history.replaceState(null, '', pendingHash);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        requestAnimationFrame(() => scrollToHash(pendingHash));
      });
    }
  }, []);

  return null;
}
