import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { CHATBOT_QA, BAKERY } from '@/data';

type Msg = { from: 'bot' | 'user'; text: string };

const WELCOME: Msg = {
  from: 'bot',
  text: `Hi there! I'm the Happy Donuts assistant. Ask me anything about our bakery — hours, location, menu, and more!`,
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [msgs, setMsgs] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, open]);

  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  const answerFor = (q: string): string => {
    const s = q.toLowerCase();
    if (s.includes('address') || s.includes('where') || s.includes('located') || s.includes('direction'))
      return `We're located at ${BAKERY.address}. We'd love to see you!`;
    if (s.includes('hour') || s.includes('open') || s.includes('time') || s.includes('close'))
      return `We're open daily from 5:00 AM to 2:00 PM. ${BAKERY.hoursNote}`;
    if (s.includes('deliver'))
      return `We do NOT offer delivery. Dine-in and Takeout are both available — come visit us!`;
    if (s.includes('sell') || s.includes('menu') || s.includes('offer') || s.includes('donut') || s.includes('food'))
      return `We offer fresh handmade donuts, croissants, kolaches, donut holes, premium hot coffee, and our signature deep-dish fruit cream cheese cakes. Check out our Digital Menu page!`;
    if (s.includes('family') || s.includes('owned') || s.includes('story'))
      return `Happy Donuts is proudly family-owned and operated in Zanesville, Ohio. Every customer is family here!`;
    if (s.includes('contact') || s.includes('phone') || s.includes('email') || s.includes('call'))
      return `Call us at ${BAKERY.phone} or email ${BAKERY.email}. We love hearing from our community!`;
    if (s.includes('charit') || s.includes('brave') || s.includes('community') || s.includes('kids'))
      return `We proudly support local children's initiatives and Brave Beginnings — look for our signature blue-icing charity donuts!`;
    return `Great question! I can help with our address, hours, menu, service options, and our story. Try one of the quick questions below!`;
  };

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: 'user', text: t }]);
    setInput('');
    setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', text: answerFor(t) }]);
    }, 550);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 24, stiffness: 260 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col glass-strong rounded-3xl overflow-hidden shadow-glow-pink"
          >
            <div className="p-4 flex items-center gap-3 border-b border-white/15 bg-gradient-to-r from-donut-pink/30 to-donut-gold/20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-donut-pink to-donut-gold grid place-items-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white text-sm">Happy Donuts Assistant</p>
                <p className="text-[11px] text-white/70">Online · Ready to help</p>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg hover:bg-white/15 grid place-items-center text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-gradient-to-br from-donut-pink to-donut-hotpink text-white rounded-br-md'
                        : 'bg-white/15 border border-white/20 text-white rounded-bl-md'
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {CHATBOT_QA.slice(0, 4).map((qa) => (
                <button
                  key={qa.q}
                  onClick={() => send(qa.q)}
                  className="text-[11px] px-2.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 hover:bg-white/20 transition"
                >
                  {qa.q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t border-white/15 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-donut-pink/60"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-donut-pink to-donut-gold grid place-items-center text-white shadow-glow-pink active:scale-95 transition"
                aria-label="Send"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        className={`fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-2xl grid place-items-center text-white bg-gradient-to-br from-donut-pink to-donut-gold shadow-glow-pink ${
          pulse ? 'animate-pulseGlow' : ''
        }`}
        aria-label="Open chat assistant"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && pulse && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-donut-gold border-2 border-white/70 animate-ping" />
        )}
      </motion.button>
    </>
  );
}
