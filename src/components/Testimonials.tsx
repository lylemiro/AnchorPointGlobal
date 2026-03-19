import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">Anchored in Excellence.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Hear from the founders who have redefined their operational limits with AnchorPointGlobal.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 md:pb-0 scroll-smooth snap-x snap-mandatory">
          {[
            { 
              quote: "AnchorPointGlobal didn't just find me a VA; they found me a strategic partner. My EA manages my entire personal and professional life with 100% autonomy.", 
              author: "Elena V. Sterling", 
              role: "Founder & CEO, Sterling Ventures",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            },
            { 
              quote: "The vetting process is unlike anything I've seen. The technical proficiency of our assigned talent was immediate and transformative.", 
              author: "Marcus Thorne", 
              role: "CTO, Horizon Tech",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
            },
            { 
              quote: "Scaling our customer success team used to take months. With AnchorPointGlobal, we deployed a fully-trained, high-IQ team in under two weeks.", 
              author: "Sarah Chen", 
              role: "VP Operations, CloudScale",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between min-w-[300px] md:min-w-0 md:flex-1 snap-center"
            >
              <div className="space-y-6">
                <Quote className="text-primary w-10 h-10 md:w-12 md:h-12 opacity-20" />
                <p className="text-base md:text-lg text-on-surface leading-relaxed italic">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-outline-variant/20">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    alt={t.author} 
                    className="w-full h-full object-cover" 
                    src={t.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">{t.author}</div>
                  <div className="text-[10px] md:text-xs text-on-surface-variant font-medium uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
