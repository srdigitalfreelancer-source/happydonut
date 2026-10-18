import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Heart, Star, ArrowRight, MapPin, Clock, Sparkles } from 'lucide-react';
import { SLIDESHOW, TESTIMONIALS, BAKERY } from '@/data';
import Reveal from '@/components/Reveal';

function HeroSlideshow({ active }: { active: number }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDESHOW[active]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a0d12]" />
      <div className="absolute inset-0 bg-gradient-to-r from-donut-pink/20 to-donut-chocolate/30 mix-blend-overlay" />
    </div>
  );
}

function HeroDots({ count, active }: { count: number; active: number }) {
  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, k) => (
        <span
          key={k}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            k === active ? 'w-8 bg-donut-pink' : 'w-2 bg-white/40'
          }`}
        />
      ))}
    </div>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, k) => (
        <Star key={k} className="w-4 h-4 fill-donut-gold text-donut-gold" />
      ))}
    </div>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % SLIDESHOW.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <HeroSlideshow active={slide} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-sm text-donut-cream">
            <Sparkles className="w-4 h-4 text-donut-gold" />
            Family-Owned · Baking Fresh Since Day One
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-white">
            Freshly Baked Donuts &amp;<br />
            <span className="text-gradient animate-shimmer">Handcrafted Coffee Daily</span>
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
            Taste the perfect sweet spot of softness and warmth at Zanesville's favorite family-owned bakery.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/menu" className="btn-glow inline-flex items-center gap-2 group">
              View Digital Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={BAKERY.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center gap-2 !bg-white/5 !border-donut-gold/40 hover:!bg-white/15"
            >
              <MapPin className="w-4 h-4 text-donut-gold" />
              Get Directions
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass">
              <Clock className="w-4 h-4 text-donut-pink" /> 5:00 AM – 2:00 PM Daily
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass">
              <MapPin className="w-4 h-4 text-donut-pink" /> {BAKERY.shortAddress}
            </span>
          </div>

          <HeroDots count={SLIDESHOW.length} active={slide} />
        </motion.div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center mb-14">
            <p className="text-donut-pink font-semibold tracking-widest uppercase text-sm mb-3">Why Happy Donuts</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Three Reasons We're Zanesville's Favorite
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
            {[
              {
                icon: <Cookie className="w-7 h-7 text-white" />,
                title: '100% Fresh Daily',
                text: "We start baking at 5:00 AM every single morning so you get melt-in-your-mouth softness in every bite.",
                color: 'from-donut-pink to-donut-hotpink',
              },
              {
                icon: <Heart className="w-7 h-7 text-white" />,
                title: 'Family-Owned Love',
                text: "As a local family business, customer satisfaction and a warm smile are our highest priorities.",
                color: 'from-donut-gold to-donut-pink',
              },
              {
                icon: <Sparkles className="w-7 h-7 text-white" />,
                title: 'Unbeatable Value',
                text: 'Premium taste, ultimate fluffy texture, and a generous assortment at highly affordable prices.',
                color: 'from-donut-chocolate to-donut-cocoa',
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-8 h-full group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center shadow-glow-pink mb-6 group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{c.title}</h3>
                  <p className="text-white/75 leading-relaxed">{c.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <Reveal className="text-center mb-12 px-4">
          <p className="text-donut-pink font-semibold tracking-widest uppercase text-sm mb-3">Loved Locally</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Zanesville Says About Us
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#1a0d12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#1a0d12] to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden py-4">
            <div className="marquee-track gap-5">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, k) => (
                <div
                  key={k}
                  className="w-[340px] sm:w-[400px] shrink-0 glass-card p-6"
                >
                  <Stars n={t.rating} />
                  <p className="mt-3 text-white/85 text-sm leading-relaxed">"{t.text}"</p>
                  <p className="mt-4 font-semibold text-white">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="mx-auto max-w-5xl glass-card p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-donut-pink/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-donut-gold/30 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for a Bite of Happiness?
            </h3>
            <p className="text-white/75 max-w-xl mx-auto mb-7">
              Come visit us at {BAKERY.shortAddress}. We're open daily from 5:00 AM — until the fresh stock runs out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/menu" className="btn-glow inline-flex items-center gap-2">
                Explore the Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-glow inline-flex items-center gap-2 !bg-white/5 !border-donut-gold/40">
                <MapPin className="w-4 h-4 text-donut-gold" /> Find Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}