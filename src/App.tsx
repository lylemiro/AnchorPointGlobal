/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Star, 
  Quote, 
  Trophy, 
  Handshake, 
  Rocket, 
  CheckCircle2, 
  Check, 
  ShieldCheck, 
  Network, 
  LineChart, 
  Share2, 
  Globe,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm border-b border-white/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="flex justify-start">
          <a href="#" className="text-2xl font-extrabold tracking-tighter text-primary font-headline">
            AnchorPointGlobal
          </a>
        </div>

        <div className="hidden md:flex justify-center gap-8 items-center font-semibold text-sm text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a>
          <a href="#" className="hover:text-primary transition-colors">Enterprise</a>
        </div>
        
        <div className="flex items-center justify-end gap-4">
          <button className="hidden sm:block text-sm font-bold text-on-surface-variant px-4 py-2 hover:bg-white/50 rounded-xl transition-all">
            Sign In
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-emerald-900/10 hover:scale-105 active:scale-95 transition-all">
            Scale Your Business
          </button>
          <button 
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#" className="text-lg font-semibold py-2 border-b border-slate-50">Solutions</a>
            <a href="#pricing" className="text-lg font-semibold py-2 border-b border-slate-50">Pricing</a>
            <a href="#testimonials" className="text-lg font-semibold py-2 border-b border-slate-50">Success Stories</a>
            <a href="#" className="text-lg font-semibold py-2 border-b border-slate-50">Enterprise</a>
            <button className="w-full py-4 rounded-xl border border-slate-200 font-bold mt-4">Sign In</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600880212340-3f4459e12263?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern office collaboration" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/80 to-transparent"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary-fixed/20 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 rounded-[2.5rem] space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-widest uppercase font-headline border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Powering Global Success
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface">
            Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Growth</span> with Elite Talent
          </h1>
          
          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-medium">
            Stop searching for staff and start building your legacy. We connect ambitious enterprises with the world's top 1% of talent to drive measurable business outcomes.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-primary">Scale Your Business</button>
            <button className="btn-secondary">Join the Elite</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative group"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-3 scale-105 group-hover:rotate-1 transition-transform duration-700"></div>
          <div className="glass-card p-4 rounded-[3rem] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Diverse team celebrating" 
              className="rounded-[2rem] w-full h-[550px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-10 left-10 right-10 hero-glass p-8 rounded-2xl border border-white/30">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-on-surface text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Recent Outcome</p>
                  <p className="text-on-surface font-headline font-extrabold text-2xl">+45% Revenue Growth</p>
                </div>
                <div className="bg-primary p-4 rounded-2xl shadow-xl shadow-emerald-900/20">
                  <TrendingUp className="text-white" size={28} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Client Cost Savings", value: "$15M+" },
    { label: "Ops Velocity Increase", value: "3x" },
    { label: "Talent Retention", value: "98%" },
    { label: "Scaling Successes", value: "400+" },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <span className="text-primary font-black font-headline tracking-[0.2em] uppercase text-xs">Proven Success</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight">Measurable Outcomes, Delivered.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-3 p-8 rounded-[2rem] bg-surface-container-low border border-slate-100 hover:shadow-lg transition-all"
            >
              <p className="text-4xl md:text-5xl font-black text-primary font-headline tracking-tighter">{stat.value}</p>
              <p className="text-on-surface-variant font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Chen",
      role: "COO, Velocity Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      quote: "AnchorPointGlobal didn't just find us a virtual assistant; they provided a structural solution to our scaling bottlenecks. Their vetting is unlike anything I've seen.",
      stars: 5,
      type: "client"
    },
    {
      name: "Maria S.",
      role: "Senior Operations VA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      quote: "Joining APG transformed my career trajectory. I'm now lead operator for a top AI firm in San Francisco, working on projects that truly matter.",
      badge: "Elite Talent Path",
      type: "talent"
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Ops, FinTech Global",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      quote: "The level of professionalism from our APG-sourced talent matches our onshore executive team. The managed performance layer gives us complete peace of mind.",
      stars: 5,
      type: "client"
    }
  ];

  return (
    <section className="py-32 px-6 bg-surface-container-lowest" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-primary font-black font-headline tracking-[0.2em] uppercase text-xs">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Trusted by Visionaries, Driven by Excellence</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-medium">Real outcomes from the leaders and talent who power the AnchorPointGlobal network.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 rounded-[2.5rem] flex flex-col h-full relative overflow-hidden group ${t.type === 'talent' ? 'bg-emerald-900/5' : ''}`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="flex items-center gap-5 mb-8">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-extrabold text-on-surface text-lg">{t.name}</h4>
                  <p className={`text-sm font-bold ${t.type === 'talent' ? 'text-primary' : 'text-on-surface-variant opacity-70'}`}>{t.role}</p>
                </div>
              </div>
              
              <Quote className="text-primary/10 mb-4" size={48} />
              <p className="text-on-surface-variant text-lg leading-relaxed italic mb-10 flex-grow">"{t.quote}"</p>
              
              {t.stars ? (
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                  {t.badge}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Top 1% Results",
      desc: "Access talent that doesn't just execute, but innovates. Our assessment protocol ensures you only work with the industry's highest achievers.",
      icon: <Trophy size={32} />
    },
    {
      title: "Culture-First Match",
      desc: "Success requires alignment. We match talent based on your specific cultural DNA and operational rhythm for immediate impact.",
      icon: <Handshake size={32} />
    },
    {
      title: "Accelerated ROI",
      desc: "Bypass the learning curve. Our talent arrives pre-vetted and ready to contribute to your bottom line from day one.",
      icon: <Rocket size={32} />
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-black font-headline tracking-[0.2em] uppercase text-xs">For Enterprises</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Designed for Your Success</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-medium">We don't just find staff; we build the engine for your continued success.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-12 rounded-[2.5rem] group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-2xl font-extrabold font-headline mb-5">{f.title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TalentSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <span className="text-primary-fixed font-black font-headline tracking-[0.2em] uppercase text-xs">For Talent</span>
            <h2 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tight leading-[1.1]">Your Success, Powered by the Best</h2>
            <p className="text-slate-400 text-xl leading-relaxed font-medium">Join a network where your talent is valued, your growth is prioritized, and your success is our mission.</p>
            
            <div className="space-y-8">
              {[
                { title: "Global Career Advancement", desc: "Collaborate with market leaders and high-growth startups to elevate your professional trajectory.", icon: <Star /> },
                { title: "Premium Recognition", desc: "Earn elite-level compensation, comprehensive benefits, and bonuses that reflect your contribution.", icon: <ShieldCheck /> },
                { title: "Lifelong Learning Path", desc: "Continuous access to the latest AI tools and management strategies ensures you stay at the forefront.", icon: <LineChart /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-fixed border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold mb-2">{item.title}</h4>
                    <p className="text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-primary-container transition-all shadow-2xl shadow-emerald-500/20 mt-4">
              Join the Elite
            </button>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Elite professional" 
                className="w-full h-[700px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 lumina-emerald-glass p-10 rounded-3xl">
                <p className="text-[10px] font-black text-primary-fixed mb-3 uppercase tracking-[0.2em]">Impact Highlight</p>
                <p className="text-white italic text-lg font-medium leading-relaxed">"At APG, I'm not just a contractor. I'm a strategic partner helping my client hit record-breaking milestones."</p>
                <p className="mt-6 font-black text-white text-sm">— Maria S.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoCloud = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-sm font-black font-headline mb-16 opacity-30 uppercase tracking-[0.4em] text-on-surface-variant">Powering Global Market Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="h-8 w-32 bg-on-surface-variant/20 rounded-full"></div>
          <div className="h-8 w-40 bg-on-surface-variant/20 rounded-full"></div>
          <div className="h-8 w-28 bg-on-surface-variant/20 rounded-full"></div>
          <div className="h-8 w-36 bg-on-surface-variant/20 rounded-full"></div>
          <div className="h-8 w-32 bg-on-surface-variant/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Part-Time Success",
      price: "$1,200",
      desc: "per month / Flexible Growth",
      features: ["20h/week Dedicated Talent", "Outcome-based scheduling", "Full Admin Support"],
      cta: "Scale Your Business",
      popular: false
    },
    {
      name: "Full-Time Accelerator",
      price: "$2,400",
      desc: "per month / Dedicated Success",
      features: ["40h/week High-Impact Support", "Strategic Success Management", "Full Workflow Integration", "Priority Scaling Support"],
      cta: "Scale Your Business",
      popular: true
    },
    {
      name: "Enterprise Elite",
      price: "$3,000+",
      desc: "per month / Custom Scaling",
      features: ["Specialized Industry Talent", "AI-Enhanced Workflow Ops", "Bespoke Performance Tracking"],
      cta: "Scale Your Business",
      popular: false
    }
  ];

  return (
    <section className="py-32 px-6 bg-surface-container-low" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-primary font-black font-headline tracking-[0.2em] uppercase text-xs">Investment in Success</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Flexible Capacity. Total Focus.</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-medium">Scale your operations with elastic tiers designed to accelerate your growth trajectory.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-12 rounded-[2.5rem] transition-all duration-500 ${tier.popular ? 'bg-white shadow-2xl border-4 border-primary/10 scale-105 z-10' : 'glass-card'}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] shadow-xl">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-10">
                <span className="text-xs font-black text-primary tracking-[0.2em] uppercase">{tier.name}</span>
                <h3 className="text-5xl font-black font-headline mt-3 tracking-tighter">{tier.price}</h3>
                <p className="text-on-surface-variant/60 text-sm font-bold mt-1">{tier.desc}</p>
              </div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4 text-on-surface font-bold text-sm">
                    {tier.popular ? <CheckCircle2 className="text-primary" size={20} /> : <Check className="text-primary" size={20} />}
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-5 rounded-2xl font-black text-sm transition-all ${tier.popular ? 'bg-gradient-to-br from-primary to-primary-container text-white shadow-xl shadow-emerald-900/20 hover:scale-[1.02]' : 'border-2 border-primary/20 text-primary hover:bg-primary hover:text-white'}`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { title: "Outcome-Ready Vetting", desc: "We select for problem-solvers who drive results, not just task-takers who follow orders.", icon: <ShieldCheck /> },
    { title: "Strategic Matching", desc: "Our AI ensures your talent's skills are perfectly aligned with your specific business goals.", icon: <Network /> },
    { title: "Growth Management", desc: "Continuous oversight ensures your talent scales with your vision, providing long-term value.", icon: <LineChart /> }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-black font-headline tracking-[0.2em] uppercase text-xs block mb-4">The Success Path</span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Streamlined Activation.</h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card p-10 rounded-[2.5rem] hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {React.cloneElement(step.icon as React.ReactElement, { size: 40 })}
              </div>
              <h4 className="text-2xl font-extrabold font-headline mb-5">{step.title}</h4>
              <p className="text-on-surface-variant font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden bg-slate-950 px-10 py-28 text-center"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary blur-[150px] opacity-20 -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-container blur-[150px] opacity-20 -ml-64 -mb-64"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline text-white tracking-tight leading-[1.1]">Ready to scale your vision?</h2>
            <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">Join 400+ enterprises who have turned their ambitious goals into measurable successes.</p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <button className="bg-primary text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-primary-container transition-all shadow-2xl shadow-emerald-500/30">
                Scale Your Business
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-14 py-6 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
                Join the Elite
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-6 max-w-xs">
            <span className="font-black text-on-surface font-headline text-3xl tracking-tighter">AnchorPointGlobal</span>
            <p className="text-sm font-bold tracking-[0.2em] text-on-surface-variant/50 uppercase">Your Success, Powered by Elite Talent.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-20">
            <div className="space-y-6">
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Platform</h5>
              <div className="flex flex-col gap-4 font-bold text-sm text-on-surface-variant">
                <a href="#" className="hover:text-primary transition-colors">Solutions</a>
                <a href="#" className="hover:text-primary transition-colors">Enterprise</a>
                <a href="#" className="hover:text-primary transition-colors">Pricing</a>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Company</h5>
              <div className="flex flex-col gap-4 font-bold text-sm text-on-surface-variant">
                <a href="#" className="hover:text-primary transition-colors">About</a>
                <a href="#" className="hover:text-primary transition-colors">Careers</a>
                <a href="#" className="hover:text-primary transition-colors">Success Stories</a>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Legal</h5>
              <div className="flex flex-col gap-4 font-bold text-sm text-on-surface-variant">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Security</a>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-primary">Connect</h5>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
                  <Share2 size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 AnchorPointGlobal. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40">
            <a href="#" className="hover:text-primary transition-colors">Status</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <Features />
        <TalentSection />
        <LogoCloud />
        <Pricing />
        <Methodology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
