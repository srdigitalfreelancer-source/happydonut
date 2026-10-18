import { useEffect, useRef } from 'react';

/**
 * Animated radial-gradient background that gently shifts with the mouse.
 * Fixed full-screen layer behind all content.
 */
export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.background = `
          radial-gradient(circle at ${x}% ${y}%, rgba(255,77,157,0.55), transparent 45%),
          radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(255,179,71,0.45), transparent 50%),
          radial-gradient(circle at ${y}% ${x}%, rgba(122,59,42,0.5), transparent 55%),
          linear-gradient(135deg, #1a0d12 0%, #2a1018 50%, #1a0d12 100%)
        `;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 transition-[background] duration-300"
      style={{
        background:
          'radial-gradient(circle at 30% 20%, rgba(255,77,157,0.5), transparent 45%), radial-gradient(circle at 70% 80%, rgba(255,179,71,0.4), transparent 50%), radial-gradient(circle at 80% 10%, rgba(122,59,42,0.45), transparent 55%), linear-gradient(135deg, #1a0d12 0%, #2a1018 50%, #1a0d12 100%)',
      }}
    />
  );
}
