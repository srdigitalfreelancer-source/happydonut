import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Clock, Cookie, Sparkles, Baby, ArrowRight } from 'lucide-react';
import { BAKERY } from '@/data';
import Reveal from '@/components/Reveal';

const PILLARS = [
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: 'From Scratch, Every Morning',
    text: 'Our ovens fire up at 5:00 AM sharp, seven days a week. Every donut, croissant, and cream cheese cake is mixed, rolled, and baked fresh that same day — never frozen, never reheated from yesterday.',
    color: 'from-donut-pink to-donut-hotpink',
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: 'Every Customer Is Family',
    text: "We're a family-owned and operated bakery, and that shapes everything we do. We learn your name, your regular order, and your kids' favorites. A warm smile and genuine conversation come standard with every visit.",
    color: 'from-donut-gold to-donut-pink',
  },
  {
    icon: <Baby className="w-6 h-6 text-white" />,
    title: 'Champions for Local Kids',
    text: "We proudly support local children's initiatives and partner with Brave Beginnings, a child abuse awareness program. Our signature blue-icing charity donuts raise funds and visibility — every purchase helps protect kids.",
    color: 'from-donut-blue to-donut-pink',
  },
];

export default function About() {
  return (
    <div className="pt-28 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <Reveal className="text-center mb-14">
          <p className="text-donut-pink font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Baking Happiness <br className="hidden sm:block" />
            <span className="text-gradient animate-shimmer">Since Day One</span>
          </h1>
        </Reveal>

        {/* Two-column narrative */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center mb-20">
          <Reveal>
            <div className="glass-card p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-donut-pink/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-donut-gold/30 blur-3xl" />
              <div className="relative space-y-5 text-white/85 leading-relaxed">
                <p>
                  Happy Donuts is a proudly <span className="text-white font-semibold">family-owned and operated bakery</span> in
                  the heart of Zanesville, Ohio. What began as a small kitchen dream has grown into one of the community's most
                  beloved morning destinations — but our soul hasn't changed one bit.
                </p>
                <p>
                  Every item we sell is <span className="text-white font-semibold">prepared from scratch daily</span>, starting
                  the moment our ovens warm up at 5:00 AM. We measure success not by how fast we sell out, but by the smiles on
                  the faces walking out the door. When you bite into one of our donuts, you're tasting early mornings, family
                  recipes, and genuine care.
                </p>
                <p>
                  To us, <span className="text-white font-semibold">every customer is family</span>. We remember your order, ask
                  about your kids, and treat your first visit the same as your five-hundredth. That warmth is the real secret
                  ingredient in everything we bake.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-[340px] sm:h-[440px] lg:h-[520px] shadow-glow-pink"
            >
              <img
                src="https://images.unsplash.com/photo-1509445156768-51c43c1a5b59?auto=format&fit=crop&w=1200&q=80"
                alt="Happy Donuts bakery interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5">
                <p className="font-display text-xl font-bold text-white">Zanesville's Family Bakery</p>
                <p className="text-sm text-white/80 mt-1">{BAKERY.shortAddress} · Open 5:00 AM daily</p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Charity highlight */}
        <Reveal className="mb-20">
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-donut-blue/35 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-donut-pink/30 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] items-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-donut-blue to-donut-pink grid place-items-center shadow-glow-pink">
                <Cookie className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  Our Blue-Icing Charity Donuts
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Each year, we create special <span className="text-white font-semibold">blue-icing charity donuts</span> to
                  raise awareness and funds for <span className="text-white font-semibold">Brave Beginnings</span> and other
                  local children's initiatives. It's our way of using what we do best — baking — to help protect and uplift the
                  youngest members of our community. When you choose a charity donut, you're not just treating yourself. You're
                  standing with local kids.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillars */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <motion.div whileHover={{ y: -6 }} className="glass-card p-7 h-full">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center shadow-glow-pink mb-5`}>
                  {p.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2.5">{p.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{p.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="glass-card p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-donut-pink/30 blur-3xl" />
            <div className="relative">
              <Sparkles className="w-8 h-8 text-donut-gold mx-auto mb-3" />
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Become Part of Our Family
              </h3>
              <p className="text-white/75 max-w-xl mx-auto mb-6">
                Stop by for a fresh donut and a warm hello. We can't wait to meet you.
              </p>
              <Link to="/contact" className="btn-glow inline-flex items-center gap-2">
                Find Our Bakery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
