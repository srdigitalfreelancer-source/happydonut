import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Cookie } from 'lucide-react';
import { BAKERY } from '@/data';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Digital Menu' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4"
      >
        <nav
          className={`mx-auto max-w-7xl rounded-2xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'glass-strong shadow-glow-pink' : 'glass'
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-donut-pink to-donut-gold grid place-items-center shadow-glow-pink group-hover:scale-110 transition-transform">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div className="leading-none">
              <span className="block font-display text-xl font-bold text-white">Happy Donuts</span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-donut-cream/70">
                Zanesville, OH
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-white/15 shadow-glow-pink'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href={BAKERY.mapsUrl} target="_blank" rel="noreferrer" className="btn-glow text-sm">
              Get Directions
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden w-11 h-11 rounded-xl bg-white/10 border border-white/20 grid place-items-center text-white active:scale-95 transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm glass-strong p-6 pt-24 flex flex-col gap-2"
            >
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block px-5 py-4 rounded-2xl text-lg font-medium transition ${
                        isActive
                          ? 'bg-white/15 text-white shadow-glow-pink'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={BAKERY.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-glow mt-4 text-center"
              >
                Get Directions
              </a>
              <div className="mt-auto text-xs text-white/60 px-2">
                <p>{BAKERY.shortAddress}</p>
                <p>{BAKERY.hours}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
