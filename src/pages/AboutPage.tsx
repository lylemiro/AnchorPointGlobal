import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Handshake, LineChart, Quote, ChevronDown } from 'lucide-react';
import FAQItem from '../components/FAQItem';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Vision Hero Section */}
      <section className="relative py-24 px-8 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-label font-bold text-[10px] uppercase tracking-widest">Our Vision</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1]">
                Anchoring the Future of <span className="text-primary">Global Partnership</span>.
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                AnchorPointGlobal was founded on a simple yet radical premise: that world-class talent is distributed globally, but opportunity is not. We are the bridge that connects high-growth enterprises with the elite professionals they need to scale without compromise.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-4 rounded-[3rem] shadow-2xl shadow-emerald-900/10">
                <img 
                  className="rounded-[2.5rem] w-full h-[600px] object-cover" 
                  alt="Modern architectural structure representing stability and vision" 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold mb-4">The AnchorPointGlobal DNA</h2>
            <p className="text-on-surface-variant">Our core values are the bedrock of every partnership we build.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto">
                <ShieldCheck size={40} />
              </div>
              <h3 className="font-headline text-2xl font-bold">Uncompromising Vetting</h3>
              <p className="text-on-surface-variant leading-relaxed">We don't just screen; we audit. Our 1% acceptance rate ensures that every AnchorPointGlobal professional is an expert in their domain.</p>
            </div>
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto">
                <Handshake size={40} />
              </div>
              <h3 className="font-headline text-2xl font-bold">Radical Transparency</h3>
              <p className="text-on-surface-variant leading-relaxed">Glass-box management means you have full visibility into performance, security, and ROI at all times.</p>
            </div>
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto">
                <LineChart size={40} />
              </div>
              <h3 className="font-headline text-2xl font-bold">Scalable Stability</h3>
              <p className="text-on-surface-variant leading-relaxed">Our infrastructure is designed to grow with you, providing a stable anchor as your business navigates global markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="glass-card p-10 rounded-[2.5rem] relative z-10 border-white/40 shadow-xl">
                <Quote className="text-primary w-12 h-12 mb-8 opacity-30" />
                <p className="text-2xl font-headline font-bold leading-tight mb-8">"AnchorPointGlobal didn't just find me a VA; they found me a strategic partner. My EA manages my entire personal and professional life with 100% autonomy."</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      alt="Client Portrait" 
                      className="w-full h-full object-cover" 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Executive Freedom</h4>
                    <p className="text-xs text-on-surface-variant font-medium">Agency Founder + Executive Assistant</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic mt-8">"It wasn't just help; it was synergy. My EA manages my entire personal and professional life with 100% autonomy. I've regained my evenings, and she has built a stable, high-income career she loves."</p>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-4xl font-bold">The AnchorPointGlobal Process</h2>
              <p className="text-on-surface-variant">A rigorous, three-stage framework designed for long-term operational excellence.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Elite Vetting</h4>
                    <p className="text-sm text-on-surface-variant">Only the top 1% undergo our 4-stage assessment covering technical skills, IQ, and cultural IQ.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Precision Matching</h4>
                    <p className="text-sm text-on-surface-variant">We match your business's specific DNA with a professional who possesses the exact specialized experience required.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <LineChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Active Management</h4>
                    <p className="text-sm text-on-surface-variant">Ongoing QA, security updates, and performance optimization to ensure ROI remains constant.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center border-none shadow-xl bg-emerald-950 text-white">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-emerald-500/30">
            <img 
              alt="Founder Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <Quote className="text-emerald-400 w-12 h-12" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight">"My vision for AnchorPointGlobal is to create a world where talent has no borders and excellence has no compromise."</h2>
            <div className="space-y-4">
              <p className="text-emerald-100/80 leading-relaxed italic">
                "I founded AnchorPointGlobal because I saw brilliant professionals in emerging markets being undervalued, and world-class founders being slowed down by poor hiring decisions. We are building the stable 'anchor' for both. We aren't just a service; we are a career-long partnership."
              </p>
              <div>
                <p className="font-bold text-xl">Elena V. Sterling</p>
                <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest">Founder & CEO, AnchorPointGlobal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-on-surface-variant">Everything you need to know about the AnchorPointGlobal ecosystem.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "How does AnchorPointGlobal handle data security for enterprise clients?", a: "All our VAs undergo comprehensive background checks and are trained in GDPR and HIPAA compliance. We provide managed hardware and secure VPN access if required by your IT protocols." },
              { q: "What happens if my assigned VA isn't a perfect fit?", a: "While our precision matching has a 98% success rate, we offer a \"Zero-Friction Replacement\" guarantee. We will transition you to a new professional within 72 hours at no additional cost." },
              { q: "I'm a professional VA—how do I join the Elite network?", a: "Our application window opens quarterly. You'll need at least 5 years of executive-level experience and will undergo a technical trial. Successful candidates gain access to our proprietary training tracks." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="glass-card bg-primary-container p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden border-none shadow-2xl shadow-emerald-900/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-800 opacity-90"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white tracking-tighter">Ready to redefine your perspective on success?</h2>
            <p className="text-white/80 max-w-2xl mx-auto font-medium">Whether you are looking to secure elite support or join our global network of experts, the future of partnership starts at AnchorPointGlobal.</p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:bg-surface-container-lowest transition-all shadow-xl shadow-black/10">
                Scale Your Business
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Join the Elite
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
