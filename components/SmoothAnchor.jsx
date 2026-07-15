'use client';

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
      activeScrollFrame = requestAnimationFrame(step);
      return;
    }

    activeScrollFrame = null;
  }

  activeScrollFrame = requestAnimationFrame(step);
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

function getHash(href) {
  if (href.startsWith('#')) return href;
  if (href.startsWith('/#')) return href.slice(1);

  try {
    const url = new URL(href, window.location.href);
    const sameOrigin = url.origin === window.location.origin;
    const samePage = sameOrigin && url.pathname === window.location.pathname;
    return samePage ? url.hash : '';
  } catch {
    return '';
  }
}

export default function SmoothAnchor({ href, children, className, target, rel, ariaLabel, onNavigate }) {
  function handleClick(event) {
    const hash = getHash(href);

    if (!hash || hash === '#') {
      onNavigate?.();
      return;
    }

    event.preventDefault();
    onNavigate?.();

    if (window.location.pathname !== '/') {
      window.sessionStorage.setItem(pendingHashKey, hash);
      window.location.assign('/');
      return;
    }

    scrollToHash(hash);
  }

  return (
    <a href={href} className={className} target={target} rel={rel} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}

export { pendingHashKey, scrollToHash };
