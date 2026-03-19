import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Network, Globe, Shield, Brain, LineChart, Cloud, CreditCard, ShoppingBag } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
              <CheckCircle2 size={16} />
              ENTERPRISE TALENT INFRASTRUCTURE
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-[1.1] tracking-tighter">
              Architecting <span className="text-primary">Success</span> Through Elite Global Talent.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Beyond simple outsourcing. We provide the stable foundation your enterprise needs to scale rapidly with managed, high-end virtual assistant infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary px-8 py-4 text-lg">Start Your Transformation</button>
              <button className="glass-card text-on-surface px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/50 transition-all">View Methodology</button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="glass-card p-4 rounded-3xl rotate-2 transition-transform group-hover:rotate-0 duration-500 shadow-2xl shadow-emerald-900/10">
              <img 
                className="rounded-2xl w-full h-[500px] object-cover" 
                alt="Professional team collaborating in a modern office" 
                src="https://images.unsplash.com/photo-1600880212340-3f4459e12263?auto=format&fit=crop&q=80&w=2000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-xs animate-float">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
                    <Network size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Active Sourcing</div>
                    <div className="text-xs text-on-surface-variant">244 Top VAs available now</div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Core Operational Pillars</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Our infrastructure is built on three essential strengths designed for the most demanding enterprise workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-primary text-3xl" size={32} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Global Talent Acquisition</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Bespoke vetting protocols and high-end VA sourcing that filters the top 1% of global professionals specifically for your stack.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="text-primary" size={16} />
                  Multi-stage technical vetting
                </li>
                <li className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="text-primary" size={16} />
                  Personality & Cultural alignment
                </li>
              </ul>
            </motion.div>
            {/* Solution 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-primary text-3xl" size={32} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Managed Operations</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Dedicated success managers oversee KPIs, security protocols, and operational continuity so you focus on high-level strategy.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="text-primary" size={16} />
                  Bi-weekly KPI audits
                </li>
                <li className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="text-primary" size={16} />
                  Enterprise-grade security
                </li>
              </ul>
            </motion.div>
            {/* Solution 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="text-primary text-3xl" size={32} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">AI-Enhanced Matching</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">Proprietary matching engine utilizing neural profiling for specific workflow and cultural alignment with your internal team.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="text-primary" size={16} />
                  Skill-gap predictive analysis
                </li>
                <li className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant">
                  <CheckCircle2 className="text-primary" size={16} />
                  Rapid deployment (48 hours)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-headline text-4xl font-extrabold tracking-tight">Performance That Anchors Your Growth</h2>
              <p className="text-on-surface-variant leading-relaxed">Our data speaks for itself. We don't just provide talent; we provide measurable economic value that secures your company's future in volatile markets.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl border-emerald-500/20">
                  <div className="text-4xl font-black text-primary mb-1">$15M+</div>
                  <div className="text-sm font-bold tracking-wider text-on-surface-variant">CLIENT SAVINGS</div>
                </div>
                <div className="glass-card p-6 rounded-2xl border-emerald-500/20">
                  <div className="text-4xl font-black text-primary mb-1">98%</div>
                  <div className="text-sm font-bold tracking-wider text-on-surface-variant">RETENTION RATE</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-container/10 blur-[80px] rounded-full"></div>
              <div className="relative glass-card p-8 rounded-3xl border-white/40 shadow-2xl">
                <h4 className="font-headline font-bold mb-8 flex items-center gap-2">
                  <LineChart className="text-primary" size={24} />
                  Cumulative Scalability Index
                </h4>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold tracking-widest text-on-surface-variant">
                      <span>OPERATIONAL SPEED</span>
                      <span>+340%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold tracking-widest text-on-surface-variant">
                      <span>COST EFFICIENCY</span>
                      <span>+72%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold tracking-widest text-on-surface-variant">
                      <span>VETTING ACCURACY</span>
                      <span>99.2%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-primary-container" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Vertical Bento Grid */}
      <section className="py-24 px-8 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight">Industry Specialization</h2>
            <p className="text-on-surface-variant mt-4">Niche expertise tailored to your vertical's specific regulatory and technical demands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
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
                  <Cloud size={24} />
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

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">Ready to Scale Your Success?</h2>
            <p className="text-emerald-50 text-xl max-w-2xl mx-auto mb-10 opacity-90">Secure your competitive edge with the world's most stable enterprise talent infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg">Scale Your Success</button>
              <button className="bg-primary-container text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">Join the Elite</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
