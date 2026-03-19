import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[870px] flex items-center px-4 md:px-8 overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide mx-auto lg:mx-0">
            <CheckCircle2 size={16} />
            ELITE GLOBAL TALENT NETWORK
          </div>
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold text-on-background leading-[1.1] tracking-tighter">
            Scale Your <span className="text-primary">Vision</span> with Precision Talent.
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed mx-auto lg:mx-0">
            AnchorPointGlobal connects world-class founders with the top 1% of global professionals. We don't just fill roles; we build the stable foundation for your enterprise's growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button className="btn-primary px-8 py-4 text-lg shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all">Start Scaling Now</button>
            <button className="glass-card text-on-surface px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/50 transition-all flex items-center justify-center gap-2">
              <Play size={20} className="text-primary" />
              Watch Vision
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 md:pt-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-surface-container-high overflow-hidden">
                  <img 
                    alt={`User ${i}`} 
                    className="w-full h-full object-cover" 
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-sm md:text-base">500+ Founders</div>
              <div className="text-[10px] md:text-xs text-on-surface-variant font-medium uppercase tracking-widest">Anchored in Success</div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group hidden lg:block"
        >
          <div className="glass-card p-4 rounded-3xl rotate-2 transition-transform group-hover:rotate-0 duration-500 shadow-2xl shadow-emerald-900/10">
            <img 
              className="rounded-2xl w-full h-[500px] object-cover" 
              alt="Professional team collaborating in a modern office" 
              src="https://images.unsplash.com/photo-1522071823991-b515d99ce408?auto=format&fit=crop&q=80&w=2000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-xs animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <ArrowRight size={24} />
                </div>
                <div>
                  <div className="font-bold">Elite Vetting</div>
                  <div className="text-xs text-on-surface-variant">Top 1% Global Talent</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[92%]"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
