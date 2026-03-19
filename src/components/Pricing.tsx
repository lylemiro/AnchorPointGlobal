import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">Transparent Engagement Models.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">High-end glass-box management ensures clarity, performance, and dedicated executive-level support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Part-Time Essential", 
              price: "$1,200", 
              features: ["20h/week dedicated support", "Flexible scheduling", "Inbox management", "Core VA support"] 
            },
            { 
              title: "Full-Time Essential", 
              price: "$2,400", 
              popular: true,
              features: ["40h/week dedicated support", "Dedicated Success Manager", "CRM coverage & management", "Priority talent matching", "Unlimited task revisions"] 
            },
            { 
              title: "Professional", 
              price: "$3,000+", 
              features: ["Industry-specific experts", "AI-agent assisted workflows", "Custom enterprise infrastructure", "Dedicated workflow automation"] 
            }
          ].map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 md:p-10 rounded-3xl flex flex-col justify-between border-none shadow-sm hover:shadow-xl transition-all duration-300 ${p.popular ? 'bg-primary text-white scale-105 z-10' : 'bg-white'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline text-xl font-bold">{p.title}</h3>
                  {p.popular && <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">Popular</span>}
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black tracking-tighter">{p.price}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${p.popular ? 'text-white/70' : 'text-on-surface-variant/70'}`}>/mo</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className={p.popular ? 'text-white' : 'text-primary'} size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all ${p.popular ? 'bg-white text-primary hover:bg-surface-container-lowest' : 'bg-primary text-white hover:bg-primary/90'}`}>
                Choose {p.title.split(' ')[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
