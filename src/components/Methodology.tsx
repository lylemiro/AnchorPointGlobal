import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Handshake, LineChart } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">The AnchorPointGlobal Process.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A rigorous, three-stage framework designed for long-term operational excellence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {[
            { 
              icon: <ShieldCheck size={32} />, 
              title: "1. Elite Vetting", 
              desc: "We process thousands of applications monthly. Only the top 1% undergo our 4-stage assessment covering technical skills, IQ, and cultural IQ." 
            },
            { 
              icon: <Handshake size={32} />, 
              title: "2. Precision Matching", 
              desc: "We don't just \"assign\" talent. We match your business's specific DNA with a professional who possesses the exact specialized experience required." 
            },
            { 
              icon: <LineChart size={32} />, 
              title: "3. Active Management", 
              desc: "Post-hiring, AnchorPointGlobal remains your partner. We provide ongoing QA, security updates, and performance optimization to ensure ROI remains constant." 
            }
          ].map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 space-y-6 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {m.icon}
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold mb-2">{m.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{m.desc}</p>
              </div>
              {i < 2 && <div className="hidden md:block absolute top-8 left-[64px] right-[-48px] h-[2px] bg-gradient-to-r from-primary/30 to-transparent"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
