import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Network, LineChart, Brain } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">The AnchorPointGlobal Infrastructure.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A rigorous, three-stage framework designed for long-term operational excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <ShieldCheck size={32} />, 
              title: "Elite Vetting", 
              desc: "Only the top 1% undergo our 4-stage assessment covering technical skills, IQ, and cultural IQ." 
            },
            { 
              icon: <Network size={32} />, 
              title: "Precision Matching", 
              desc: "We match your business's specific DNA with a professional who possesses the exact specialized experience required." 
            },
            { 
              icon: <LineChart size={32} />, 
              title: "Active Management", 
              desc: "Ongoing QA, security updates, and performance optimization to ensure ROI remains constant." 
            },
            { 
              icon: <Brain size={32} />, 
              title: "AI Enhancement", 
              desc: "Proprietary matching engine utilizing neural profiling for specific workflow and cultural alignment." 
            }
          ].map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:bg-white/50 transition-all duration-300 group border-none shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
