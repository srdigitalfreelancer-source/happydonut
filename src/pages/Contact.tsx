import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Coffee, ShoppingBag, Truck, ExternalLink, Navigation } from 'lucide-react';
import { BAKERY } from '@/data';
import Reveal from '@/components/Reveal';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Contact() {
  return (
    <div className="pt-28 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center mb-12">
          <p className="text-donut-pink font-semibold tracking-widest uppercase text-sm mb-3">Come Say Hello</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Visit <span className="text-gradient animate-shimmer">Happy Donuts</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/75 leading-relaxed">
            We'd love to welcome you in person. Here's everything you need to find us, reach us, and plan your visit.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT: Info cards */}
          <div className="space-y-5">
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-5">
                <InfoCard
                  icon={<MapPin className="w-5 h-5 text-white" />}
                  title="Address"
                  color="from-donut-pink to-donut-hotpink"
                >
                  <p className="text-white/85 text-sm leading-relaxed">{BAKERY.address}</p>
                  <a
                    href={BAKERY.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-donut-gold hover:text-white transition"
                  >
                    Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </InfoCard>

                <InfoCard
                  icon={<Phone className="w-5 h-5 text-white" />}
                  title="Phone"
                  color="from-donut-gold to-donut-pink"
                >
                  <a href={`tel:${BAKERY.phoneRaw}`} className="text-white/85 text-sm hover:text-white transition block">
                    {BAKERY.phone}
                  </a>
                  <p className="mt-2 text-xs text-white/55">Give us a call for takeout orders</p>
                </InfoCard>

                <InfoCard
                  icon={<Mail className="w-5 h-5 text-white" />}
                  title="Email"
                  color="from-donut-chocolate to-donut-cocoa"
                >
                  <a href={`mailto:${BAKERY.email}`} className="text-white/85 text-sm hover:text-white transition break-all">
                    {BAKERY.email}
                  </a>
                </InfoCard>

                <InfoCard
                  icon={<Clock className="w-5 h-5 text-white" />}
                  title="Hours"
                  color="from-donut-blue to-donut-pink"
                >
                  <p className="text-white/85 text-sm">{BAKERY.hours}</p>
                </InfoCard>
              </div>
            </Reveal>

            {/* Hours table */}
            <Reveal delay={0.1}>
              <div className="glass-card p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-donut-pink" />
                  <h3 className="font-display text-lg font-bold text-white">Weekly Timings</h3>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/15">
                  {DAYS.map((d, i) => (
                    <div
                      key={d}
                      className={`flex items-center justify-between px-4 py-3 text-sm ${
                        i % 2 === 0 ? 'bg-white/5' : 'bg-white/0'
                      }`}
                    >
                      <span className="text-white/80">{d}</span>
                      <span className="text-white font-medium">5:00 AM – 2:00 PM</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-donut-gold/15 border border-donut-gold/40">
                  <AlertTriangle className="w-5 h-5 text-donut-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-donut-cream">{BAKERY.hoursNote}</p>
                </div>
              </div>
            </Reveal>

            {/* Service badges */}
            <Reveal delay={0.15}>
              <div className="glass-card p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold text-white mb-4">Service Options</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-sm font-medium">
                    <Coffee className="w-4 h-4" /> Dine-in Available
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-donut-gold/15 border border-donut-gold/50 text-donut-cream text-sm font-medium">
                    <ShoppingBag className="w-4 h-4" /> Takeout Available
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/15 border-2 border-red-500/60 text-red-200 text-sm font-semibold shadow-[0_0_20px_rgba(239,68,68,0.35)]">
                    <Truck className="w-4 h-4" /> No Delivery
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Map */}
          <Reveal delay={0.15}>
            <div className="glass-card p-5 sm:p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Find Us on the Map</h3>
                  <p className="text-xs text-white/60 mt-0.5">GPS: {BAKERY.coords.lat}, {BAKERY.coords.lng}</p>
                </div>
                <a
                  href={BAKERY.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white hover:bg-white/20 transition"
                >
                  <Navigation className="w-3.5 h-3.5 text-donut-pink" /> Directions
                </a>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex-1 min-h-[360px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-white/20 shadow-glow-soft"
              >
                <iframe
                  title="Happy Donuts location map"
                  src={BAKERY.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '360px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </motion.div>
              <p className="mt-4 text-sm text-white/70">
                {BAKERY.address}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass-card p-5 h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${color} grid place-items-center shadow-glow-pink`}>
          {icon}
        </div>
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      {children}
    </motion.div>
  );
}
