'use client';

import { useEffect } from 'react';

const pendingHashKey = 'portfolio-pending-scroll-hash';
const scrollDurationMs = 750;

let activeScrollFrame = null;

function easeOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function animateScrollTo(top) {
  if (activeScrollFrame) {
    window.cancelAnimationFrame(activeScrollFrame);
  }

  const start = window.scrollY;
  const distance = top - start;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / scrollDurationMs, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(step);
      return;
    }

    activeScrollFrame = null;
  }

  activeScrollFrame = window.requestAnimationFrame(step);
}

function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return false;

  const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scroll-offset')) || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  animateScrollTo(top);
  window.history.pushState(null, '', hash);
  return true;
}

function getSameOriginHash(href) {
  try {
    const url = new URL(href, window.location.href);
    const sameOrigin = url.origin === window.location.origin;

    if (!sameOrigin || !url.hash) {
      return null;
    }

    return {
      hash: url.hash,
      pathname: url.pathname,
    };
  } catch {
    return null;
  }
}

function closeMobileMenu(anchor) {
  const details = anchor.closest('details[data-mobile-menu]');

  if (details) {
    details.open = false;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    function handleClick(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = event.target.closest?.('a[href]');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) {
        return;
      }

      const target = getSameOriginHash(anchor.getAttribute('href'));
      if (!target || target.hash === '#') {
        return;
      }

      event.preventDefault();
      closeMobileMenu(anchor);

      if (window.location.pathname !== target.pathname) {
        window.sessionStorage.setItem(pendingHashKey, target.hash);
        window.location.assign(target.pathname);
        return;
      }

      scrollToHash(target.hash);
    }

    const pendingHash = window.sessionStorage.getItem(pendingHashKey);

    if (pendingHash && window.location.pathname === '/') {
      window.sessionStorage.removeItem(pendingHashKey);
      window.history.replaceState(null, '', pendingHash);
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        window.requestAnimationFrame(() => scrollToHash(pendingHash));
      });
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);

      if (activeScrollFrame) {
        window.cancelAnimationFrame(activeScrollFrame);
        activeScrollFrame = null;
      }
    };
  }, []);

  return null;
}
