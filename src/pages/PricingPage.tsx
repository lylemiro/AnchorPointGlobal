import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import FAQItem from '../components/FAQItem';

const PricingPage: React.FC = () => {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-container/10 to-surface min-h-[614px] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-4xl w-full text-center z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary-container/10 text-primary font-label font-bold text-[10px] uppercase tracking-widest mb-6">Transparent Engagement Models</span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter mb-8 leading-[1.1]">
            Success-Driven <br/><span className="text-primary">Pricing & Plans</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body leading-relaxed mb-12">
            Our flexible talent model scales with your ambition. High-end glass-box management ensures clarity, performance, and dedicated executive-level support.
          </p>
          <div className="glass-card p-2 rounded-2xl inline-flex gap-2 mx-auto">
            <button className="px-8 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-headline font-bold text-sm shadow-sm">Monthly</button>
            <button className="px-8 py-3 rounded-xl text-on-surface-variant font-headline font-medium text-sm hover:bg-white/20 transition-all">Yearly (-15%)</button>
          </div>
        </div>
        {/* Atmospheric decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]"></div>
      </section>

      {/* Pricing Cards Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Part-Time Essential */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 border border-outline-variant/10 shadow-sm flex flex-col"
          >
            <div className="mb-8">
              <h3 className="font-headline font-bold text-xl text-on-surface mb-2 tracking-tight">Part-Time Essential</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-headline font-extrabold text-on-surface tracking-tighter">$1,200</span>
                <span className="text-on-surface-variant/70 font-medium">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {[
                "20h/week dedicated support",
                "Flexible scheduling",
                "Inbox management",
                "Core VA support"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <CheckCircle2 className="text-primary-container" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-primary-container text-primary font-headline font-bold text-sm hover:bg-primary-container/5 transition-colors duration-200">
              Choose Essential
            </button>
          </motion.div>

          {/* Full-Time Essential */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group p-[2px] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container"></div>
            <div className="relative bg-white p-10 rounded-[calc(0.75rem-1px)] h-full flex flex-col">
              <div className="absolute top-6 right-8">
                <span className="px-4 py-1.5 bg-gradient-to-br from-primary to-primary-container text-white text-[10px] font-bold font-label uppercase tracking-widest rounded-full">Popular</span>
              </div>
              <div className="mb-8">
                <h3 className="font-headline font-bold text-xl text-on-surface mb-2 tracking-tight">Full-Time Essential</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-headline font-extrabold text-on-surface tracking-tighter">$2,400</span>
                  <span className="text-on-surface-variant/70 font-medium">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "40h/week dedicated support",
                  "Dedicated Success Manager",
                  "CRM coverage & management",
                  "Priority talent matching",
                  "Unlimited task revisions"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold text-sm shadow-lg shadow-primary-container/20">
                Get Full-Time
              </button>
            </div>
          </motion.div>

          {/* Professional */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 border border-outline-variant/10 shadow-sm flex flex-col"
          >
            <div className="mb-8">
              <h3 className="font-headline font-bold text-xl text-on-surface mb-2 tracking-tight">Professional</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-headline font-extrabold text-on-surface tracking-tighter">$3,000<span className="text-2xl font-medium">+</span></span>
                <span className="text-on-surface-variant/70 font-medium">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {[
                "Industry-specific experts",
                "AI-agent assisted workflows",
                "Custom enterprise infrastructure",
                "Dedicated workflow automation"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
                  <CheckCircle2 className="text-primary-container" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl bg-on-surface text-white font-headline font-bold text-sm hover:opacity-90 transition-opacity">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-4">Compare Features</h2>
          <p className="text-on-surface-variant font-body">Find the granularity that fits your operational needs.</p>
        </div>
        <div className="overflow-hidden rounded-3xl bg-surface-container-low p-1">
          <div className="overflow-x-auto bg-white rounded-[2.8rem]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="p-8 text-sm font-headline font-extrabold text-on-surface tracking-wider uppercase">Capability</th>
                  <th className="p-8 text-sm font-headline font-bold text-on-surface">Part-Time</th>
                  <th className="p-8 text-sm font-headline font-bold text-primary">Full-Time</th>
                  <th className="p-8 text-sm font-headline font-bold text-on-surface">Professional</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium font-body text-on-surface-variant">
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-8 font-semibold text-on-surface">Talent Vetting</td>
                  <td className="p-8">Rigorous (Tier 1)</td>
                  <td className="p-8">Premium (Tier 2)</td>
                  <td className="p-8">Custom / Domain Specific</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors border-t border-slate-100">
                  <td className="p-8 font-semibold text-on-surface">Security Protocol</td>
                  <td className="p-8">Standard Encryption</td>
                  <td className="p-8">Enterprise Vault</td>
                  <td className="p-8">SOC2 Compliant / Air-gapped</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors border-t border-slate-100">
                  <td className="p-8 font-semibold text-on-surface">Success Management</td>
                  <td className="p-8">Shared Pool</td>
                  <td className="p-8">Dedicated PM</td>
                  <td className="p-8">Executive Director</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors border-t border-slate-100">
                  <td className="p-8 font-semibold text-on-surface">Integration Support</td>
                  <td className="p-8">—</td>
                  <td className="p-8">CRM & Email</td>
                  <td className="p-8">Custom API / Webhooks</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors border-t border-slate-100">
                  <td className="p-8 font-semibold text-on-surface">AI Acceleration</td>
                  <td className="p-8">Basic Tools</td>
                  <td className="p-8">AnchorAI Standard</td>
                  <td className="p-8">Custom Model Training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {[
            { q: "How does the VA matching process work?", a: "We use a proprietary 7-stage vetting process that includes skills testing, cultural alignment, and security background checks. Once you sign up, we match you with three candidates within 48 hours for your final selection." },
            { q: "Is there a long-term commitment?", a: "No. All our plans are month-to-month by default. We believe in earning your partnership every single cycle. You can upgrade, downgrade, or cancel with a 30-day notice." },
            { q: "What security measures are in place?", a: "All AnchorPointGlobal talent works through managed virtual environments. We use encrypted password managers (like 1Password) so your credentials are never exposed, and all workstations are monitored for compliance." },
            { q: "Can I change my plan later?", a: "Absolutely. As your business grows, you can seamlessly scale from Part-Time to Full-Time or move into our Professional tier for more complex infrastructure needs." }
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 tracking-tighter">Ready to reclaim your time?</h2>
            <p className="text-white/80 text-lg mb-12 font-body">Join 500+ executives who have offloaded their operations to AnchorPointGlobal.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-5 bg-white text-primary rounded-xl font-headline font-bold text-lg hover:bg-surface-container-lowest transition-all scale-100 hover:scale-105 active:scale-95">Get Started Today</button>
              <button className="px-10 py-5 bg-black/10 border border-white/20 backdrop-blur-sm rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all">Schedule a Demo</button>
            </div>
          </div>
          {/* Abstract patterns */}
          <div className="absolute -top-12 -right-12 w-64 h-64 border-8 border-white/10 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
