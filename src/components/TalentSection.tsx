import React from 'react';
import { motion } from 'motion/react';
import { Globe, Shield, CreditCard, ShoppingBag } from 'lucide-react';

const TalentSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 text-center lg:text-left">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">Industry Specialization.</h2>
          <p className="text-on-surface-variant mt-4">Niche expertise tailored to your vertical's specific regulatory and technical demands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* SaaS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-card rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700" 
              alt="Data visualization on a computer screen representing SaaS growth" 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
              referrerPolicy="no-referrer"
            />
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4">
                <Globe size={24} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-2">SaaS & Enterprise Tech</h3>
              <p className="text-on-surface-variant max-w-lg">Support for DevOps coordination, technical customer success, and agile project management.</p>
            </div>
          </motion.div>
          {/* FinTech */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-primary text-white rounded-3xl p-8 flex flex-col justify-between"
          >
            <CreditCard className="text-4xl opacity-50" size={40} />
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2">FinTech</h3>
              <p className="text-emerald-100 text-sm">Regulatory compliance assistance, KYC processing, and transaction monitoring.</p>
            </div>
          </motion.div>
          {/* E-commerce */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between border-2 border-primary/20"
          >
            <ShoppingBag className="text-primary text-4xl" size={40} />
            <div>
              <h3 className="font-headline text-2xl font-bold mb-2">E-commerce</h3>
              <p className="text-on-surface-variant text-sm">Supply chain coordination, omnichannel support, and marketplace management.</p>
            </div>
          </motion.div>
          {/* General Scale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-surface-container-highest rounded-3xl p-8 flex items-center justify-between"
          >
            <div className="max-w-md">
              <h3 className="font-headline text-2xl font-bold mb-4">The Stable 'AnchorPointGlobal' Approach</h3>
              <p className="text-on-surface-variant text-sm">Our 1,200+ VA network provides a redundancy-proof talent pool. If your lead talent steps away, we have ready-to-deploy vertical experts who already know your industry.</p>
            </div>
            <div className="hidden lg:block text-8xl font-black text-primary/5">AnchorPointGlobal</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;
