import { Link } from 'react-router-dom';
import { Cookie, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { BAKERY } from '@/data';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="mx-auto max-w-7xl glass-card p-8 sm:p-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-donut-pink to-donut-gold grid place-items-center shadow-glow-pink">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold text-white">Happy Donuts</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-donut-cream/70">
                  Family-Owned Bakery
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Freshly baked donuts, croissants, and deep-dish cream cheese cakes — handcrafted with love
              in Zanesville, Ohio since day one.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-white/70 hover:text-donut-pink transition">Home</Link></li>
              <li><Link to="/menu" className="text-white/70 hover:text-donut-pink transition">Digital Menu</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-donut-pink transition">Our Story</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-donut-pink transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-donut-pink shrink-0 mt-0.5" />
                <span>{BAKERY.address}</span>
              </li>
              <li>
                <a href={`tel:${BAKERY.phoneRaw}`} className="flex items-center gap-3 text-white/70 hover:text-white transition">
                  <Phone className="w-5 h-5 text-donut-pink shrink-0" />
                  {BAKERY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BAKERY.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition">
                  <Mail className="w-5 h-5 text-donut-pink shrink-0" />
                  {BAKERY.email}
                </a>
              </li>
              <li>
                <a
                  href={BAKERY.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 mt-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                >
                  <Facebook className="w-5 h-5 text-donut-pink" />
                  Visit us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/60">© 2026 Happy Donuts. All rights reserved.</p>
          <p className="text-xs text-white/50">Open daily 5:00 AM – 2:00 PM · Dine-in & Takeout · No Delivery</p>
        </div>
      </div>
    </footer>
  );
}
