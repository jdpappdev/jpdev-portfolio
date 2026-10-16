import { useEffect, useRef } from 'react';

/**
 * Hook to trigger early fade-in reveals via IntersectionObserver. Content is
 * shown immediately when motion is reduced or the observer is unavailable.
 */
export function useReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = container.querySelectorAll<HTMLElement>('.reveal-item');

    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add('revealed'));
      return;
    }

    const revealAll = () => items.forEach((item) => item.classList.add('revealed'));

    let observer: IntersectionObserver;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const staggerOrder = el.dataset.staggerIndex
                ? parseInt(el.dataset.staggerIndex, 10)
                : 0;

              window.setTimeout(() => el.classList.add('revealed'), staggerOrder * 60);
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px 15% 0px',
        }
      );
      items.forEach((item) => observer.observe(item));
    } catch {
      revealAll();
      return;
    }

    // A defensive fallback prevents content remaining hidden in unusual preview environments.
    const fallback = window.setTimeout(revealAll, 1200);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
