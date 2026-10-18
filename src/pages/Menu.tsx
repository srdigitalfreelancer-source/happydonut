import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU, BAKERY } from '@/data';
import Reveal from '@/components/Reveal';

const ALL = 'All';

export default function Menu() {
  const cats = [ALL, ...MENU.map((m) => m.category)];
  const [active, setActive] = useState(ALL);

  const items = active === ALL ? MENU.flatMap((m) => m.items) : MENU.find((m) => m.category === active)!.items;

  return (
    <div className="pt-28 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="text-center mb-10">
          <p className="text-donut-pink font-semibold tracking-widest uppercase text-sm mb-3">Fresh From Our Oven</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            The <span className="text-gradient animate-shimmer">Digital Menu</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/75 leading-relaxed">
            Every item is prepared from scratch daily starting at 5:00 AM. Browse by category, then come grab your favorites
            before they're gone.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-white/85">
              <Clock className="w-4 h-4 text-donut-pink" /> 5:00 AM – 2:00 PM Daily
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-white/85">
              <MapPin className="w-4 h-4 text-donut-pink" /> {BAKERY.shortAddress}
            </span>
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={0.1}>
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1 sm:justify-center mb-10">
            {cats.map((c) => {
              const isActive = c === active;
              const emoji = c === ALL ? '✨' : MENU.find((m) => m.category === c)?.emoji;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-2xl text-sm font-medium border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-donut-pink to-donut-hotpink text-white border-transparent shadow-glow-pink'
                      : 'glass text-white/80 hover:text-white hover:bg-white/15 border-white/20'
                  }`}
                >
                  <span className="mr-1.5">{emoji}</span>
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {items.map((item, idx) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-donut-pink text-white shadow-glow-pink">
                      {item.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl text-sm font-bold glass-strong text-white">
                    {item.price}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">{item.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <Reveal delay={0.1}>
          <div className="mt-14 glass-card p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-donut-gold/25 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-donut-pink/25 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Come Taste It For Yourself
              </h3>
              <p className="text-white/75 max-w-xl mx-auto mb-6">
                We offer Dine-in and Takeout — sorry, no delivery. The freshest experience is the one you have in our shop.
              </p>
              <Link to="/contact" className="btn-glow inline-flex items-center gap-2">
                Visit Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
