import { useEffect, useRef } from 'react';

/**
 * Hook to trigger fade-in and 24px rise stagger reveal (60ms stagger, once)
 * via IntersectionObserver. Bypassed immediately if prefers-reduced-motion is active.
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

    const observer = new IntersectionObserver(
      (entries) => {
        let batchIndex = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Use explicit data-stagger or incrementing batch index
            const staggerOrder = el.dataset.staggerIndex
              ? parseInt(el.dataset.staggerIndex, 10)
              : batchIndex++;
            
            setTimeout(() => {
              el.classList.add('revealed');
            }, staggerOrder * 60);

            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
