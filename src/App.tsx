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
  ArrowRight,
  Users,
  ChevronDown,
  Cloud,
  CreditCard,
  ShoppingBag,
  Shield,
  Brain
} from 'lucide-react';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
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
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-2xl font-extrabold tracking-tighter text-primary font-headline">
            AnchorPointGlobal
          </a>
        </div>

        <div className="hidden md:flex justify-center gap-8 items-center font-semibold text-sm text-on-surface-variant">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); }} className={`hover:text-primary transition-colors ${currentPage === 'solutions' ? 'text-primary font-bold border-b-2 border-primary pb-1' : ''}`}>Solutions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('pricing'); }} className={`hover:text-primary transition-colors ${currentPage === 'pricing' ? 'text-primary font-bold border-b-2 border-primary pb-1' : ''}`}>Pricing</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} className={`hover:text-primary transition-colors ${currentPage === 'about' ? 'text-primary font-bold border-b-2 border-primary pb-1' : ''}`}>About</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center justify-end gap-4">
          <button 
            onClick={() => setCurrentPage('signin')}
            className="hidden sm:block text-sm font-bold text-on-surface-variant px-4 py-2 hover:bg-white/50 rounded-xl transition-all"
          >
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
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); setIsMobileMenuOpen(false); }} className="text-lg font-semibold py-2 border-b border-slate-50">Solutions</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('pricing'); setIsMobileMenuOpen(false); }} className="text-lg font-semibold py-2 border-b border-slate-50">Pricing</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsMobileMenuOpen(false); }} className="text-lg font-semibold py-2 border-b border-slate-50">About</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="text-lg font-semibold py-2 border-b border-slate-50">Contact</a>
            <button 
              onClick={() => { setCurrentPage('signin'); setIsMobileMenuOpen(false); }}
              className="w-full py-4 rounded-xl border border-slate-200 font-bold mt-4"
            >
              Sign In
            </button>
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-zvFR_PkVQpzFj6_ZIYlCTtmcWdmCiBGvZnQNYTpcYW3JJRRzOItjWMfUzwy-i40qzxCIp9HnMsmiKu5VWaFoVTKP14_r758MdujNAd9Ob4h4QDkwxPkeXnTTUatdJvLjZ4nxwPrQ6B9D96fD5Cv5a2L1yh4CNmn6UsP-AHVNYoyGXnyIbYDUOP_YbBOU4jlYEYCa1VBqV_zlzoQGgcGbIS5hki8HJam3rQDmSv7GD77mEdjuBnj-8l6azHrgixTe5lDweebV2rQ" 
          alt="Successful corporate team collaboration" 
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
            Stop searching for staff and start building your legacy. We connect ambitious enterprises with the world's top 1% of talent to drive measurable business outcomes and sustainable growth.
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN0N_9v8gAzfJFZrYucleBIGqJBodw_X2BBlc9bILKKWPI6lZRDpDoMlM-A8ULDMCGJ_iP1zz7Kze62Vk_OnwoG4_bRwo8Z28nr_unbjWmEnDW4n0nrkKmcZWRWhAxmPbWgZqBjHwsNuRVzv6OKDuYdZMtpqhHnC04uJ4AlUAKqSwcK2AKj-L5FZy3R0ZBAPY_r-tOjKgnECKnG8t3u2ShSbz0ngMqTFRJuF_nm5IovSjRk15hgWn-L50LonGk0TJJkvZLVq_FBu0" 
              alt="Diverse professionals celebrating a win" 
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLLtBWyTxL1bL7Mj2oTh8VEImPK-MQ9W3BdEdDvcK51J9wapGbQj11CbNQf9avlpp3AvpJY7pWQzywVtbE_nmEC1X6tOaBat_ritELEHYZiqR_sIvDcQayWmIUB7vZoVi8z8RloxT60qC09xdTM7c9RW_9BZTOVthM3JeY8ucH41VJH9Tq4sN5v6BLQX5CFoVIfAsR1Qqx-w1rlt8_xG2vRQvcuOL-FP4cqnY7bBakFe-hTk_mEv6_kqH8pgpOG8zzgEhX8P4hNhc",
      quote: "AnchorPointGlobal didn't just find us a virtual assistant; they provided a structural solution to our scaling bottlenecks. Their vetting is unlike anything I've seen.",
      stars: 5,
      type: "client"
    },
    {
      name: "Maria S.",
      role: "Senior Operations VA",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNeoO3cXLe7xPdfV9r2M6NQ5ON0Bvsy77-tR59dDu3LwPCjgxTDT2m4wpFa9J4eofcZWWcvI6o_ivtrghUOyg3fvDmLsVPnLOXYrQdUqB7wTp2-MLXuXGTnWhTYsvRuTPW-g8dzweWSQ7N2YCuvHytADXR67yag2rYgpexB9VfWNIaWS9kk11zSKg1LSPZ2LV9oYxZi9nZbgZZ0nNugP__oa5nJfS-sXWAfso2th6a0iJXCkBysOeKIm3SDDE_MKOzUVZCaN9L5pY",
      quote: "Joining APG transformed my career trajectory. I'm now lead operator for a top AI firm in San Francisco, working on projects that truly matter.",
      badge: "Elite Talent Path",
      type: "talent"
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Ops, FinTech Global",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX8linfpg8Fj23O07_pnafctq7HbcJhXSRtvq7pEzj1br4ScIqP8N81aLCZOYuY0NJVTQhWmQ1djjY6dTUHz3X7JrBQBGOIymS_ha0AemyyA6hIA-CQKGh6mbDqYLk-1woFtr--8Lo34BhcK9TxoO1yiiCjsxfSyOt3wkNDGEIUwh6SgPJjvJFjaZZm3YF2N4kOannVZVjYVfa4e27i2WlQZGi_TBWX22ebe1fc5hV1xjasbUheAwljTpubPL-LucBMZ5f7jtZISQ",
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1y6DRVt13EeKLnJhL8AvULPKE779nXgJ8pBXrB89uUA-DjKZJtOlNFV_uDP2aE9-5RhYa7AYnb5_b77V6OzxvGU7Hmst1GFYMyGYbQsPsJZ2HKabnuUepYEWv2CXWyLClBt6qm53O9sdzHVCmz_jxnWsS3vtV4-UZ5m-F0Zg5qKe9NRAWVbtOW0hXHbaHpzCuJfeR4qgV1tPqtHR930R9D2TZqweog6jVio7kcS-qE9FU8VaiALCn7qjJMDmm-QVxWePl35Sbghs" 
                alt="Professional working in a high-tech environment" 
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
          <img alt="Enterprise Logo" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHRoZElBBnhPa47ppZDcgHw5ed6Bviv4H1Bw9zVnfSVWK9mCkV9qWtRAKj-DZXYgzUKRowMR5n7phoXZrJQR2RwNg2qc512l_QnEyQqvF7wrzFoZEL_6O50TMP0EHKl3yDm1l2QQM77AqPdDxLQmBmMzv_almOQ_mohgy74Tuwy2j5PeAuYz3PJ5T4B45i3UWRAIrh1ZEMd5PpOeJtAJL6BM6n5x5X3syNCtHavFXE02X06gTOdxZnMV3Qjw8b6gfC7hMP_GVK1tc"/>
          <img alt="Enterprise Logo" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Nr1cWBdtOOuzpqrMgPHOlC6w4LPIXVr-Pt44_BesaVrD7IaxSpsFXENAXCYE6s-zPxeQTJIr-gSYAxYf_yxicL495dPGiNHTDpPAoZszlIaKFwdHcLPW7rygY08W6Yhx11KXy-NQmPYCw5aytIxbCgBk5347Zxjra1kENniKheyXZBs-NKrSX9LLsJZkqo2EPdYrSXxI4wcuVhWz4QXPDlAC7rYEl0iJukoyFi2C0d0CZgsUBrUrdQTHZUB9Antk8gSHgq8djt0"/>
          <img alt="Enterprise Logo" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA59dJWh8VJOJidAPOmPTpzyMW8rpfdY1GhKpoowFk_HQd5AwasPWWOrrI-mc4QCcN6E6q6jXE_0SczR1aFNeFri6DTZ4Y6Vej_LZhJZ905MzPdf4gtctBqOA-52dL_FfSsPXFSGqJyVB9axlI1d3uJvCiWsUZK4GULKrEuhJ07g561cvJq_Yl8W_2FQHgcjbJryzK8fYbN_ONx4DxcS57S2cMIQTSg7PVUMg3rwsMujOI3cmrXPxOBHQg80wVf8pM7HZAEKTcNXc"/>
          <img alt="Enterprise Logo" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA52bkQxQomQyTjOOUJkf-dD0hiWnxKAed6D5HQP1t9T79rwLJbhsw5H7zNjXlEaQ_gb3V1mONiDqkVfQBspbuQL43ShceqpFOSR9BfGhRFYhAvn3fw7Si5XxSEIkZpUIEfouKOyS0tRyuHA83Woaa5bHC-QIj6CKCTJwLleOCmZzNmsz5cHMWMTMCoDSkdJ1NjqfKXh1elpbXpeHEcEmDo4oxnci1FDmGvwqX_ScdydG7K_SYzDpDg0ZrhqvwSP_YwR3wmipa1S8E"/>
          <img alt="Enterprise Logo" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxjD-KMsXdO4iHXsNS3lfAm0lKzxbTowzZuGYOz-BpE1T2SA2ctW4Wuz3ZhF1Mqq4tWCIfUgdxgblWfAKmdM1seGuniL24URmPhoTJHJ87jTgxH1GJqc_8zDYFrUKbXluaZdnRKjzQ4i2URtdfS9oUeNvNWO0V7WMVvt-7Ty06ODjpkpX49ThLRotm5BzDTceCw_bZe05z8OV1MnndAtU8gVbTxoZ0GeTkIJ6MiHv6OJhOXmSm6d3UY_Szx91g0m9UaT1pu7ux4lU"/>
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

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-6 max-w-xs">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="block font-black text-on-surface font-headline text-3xl tracking-tighter hover:text-primary transition-colors">AnchorPointGlobal</a>
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

// --- About Page Components ---

const AboutPage = () => {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-[2.5rem] p-8 md:p-16 space-y-8 shadow-2xl shadow-emerald-900/5"
          >
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
              Building a <span className="text-primary italic">Legacy</span> of Shared Success
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
              At AnchorPointGlobal, we believe true excellence is born from partnership. We empower visionary leaders and elite professionals to achieve more together than they ever could alone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary px-8 py-4 text-lg">
                Scale Your Legacy
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                Join the Partnership
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success by the Numbers */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "250k+", label: "Hours Saved" },
            { value: "98%", label: "Retention Rate" },
            { value: "40%", label: "VA Income Growth" },
            { value: "15+", label: "Industries Served" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 glass-card rounded-2xl border-none shadow-sm"
            >
              <div className="text-4xl font-bold text-primary font-headline mb-2">{stat.value}</div>
              <p className="text-sm text-on-surface-variant font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
              <Handshake size={16} />
              Our Philosophy
            </div>
            <h2 className="font-headline text-4xl font-bold tracking-tight">Success is a Two-Way Street</h2>
            <div className="space-y-6 text-on-surface-variant leading-loose">
              <p>
                We didn't start AnchorPointGlobal to just fill seats. We started it because we saw a world where incredible founders were burning out and brilliant professionals were being underutilized. We realized that the secret to sustainable growth wasn't just "hiring"—it was forming a deep, managed partnership.
              </p>
              <p className="font-semibold text-primary border-l-4 border-primary pl-4">
                "Our clients' growth is the engine; our VAs' professional fulfillment is the fuel."
              </p>
              <p>
                Every story at APG is a story of dual success. When a client doubles their revenue because they finally have the headspace to strategize, and their VA simultaneously achieves financial independence and career mastery—that is when we know we've succeeded. We are the bridge that makes these parallel victories possible.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              alt="Team collaborating in a modern space" 
              className="relative rounded-3xl shadow-2xl object-cover w-full aspect-square" 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-sm font-bold text-emerald-800 italic">"We don't just provide talent; we cultivate the partnerships that define industry leaders."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-surface-container-low py-24 border-y border-white/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-4xl font-bold">Partnership Spotlights</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Real results from the AnchorPoint ecosystem.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl bg-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold">The SaaS Scaling Sprint</h4>
                  <p className="text-xs text-on-surface-variant font-medium">FinTech Client + Ops Specialist</p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">"By matching us with a specialist who understood our DNA, we offloaded 30+ hours of ops work weekly. Our founder focused on Series B, and our VA was promoted to Lead Coordinator within the year. A win-win."</p>
            </div>
            <div className="glass-card p-8 rounded-3xl bg-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Executive Freedom</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Agency Founder + Executive Assistant</p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">"It wasn't just help; it was synergy. My EA manages my entire personal and professional life with 100% autonomy. I've regained my evenings, and she has built a stable, high-income career she loves."</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline text-4xl font-bold">The AnchorPoint Process</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">A rigorous, three-stage framework designed for long-term operational excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="relative z-10 space-y-6 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold mb-2">1. Elite Vetting</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">We process thousands of applications monthly. Only the top 1% undergo our 4-stage assessment covering technical skills, IQ, and cultural IQ.</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[64px] right-[-48px] h-[2px] bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-6 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Handshake size={32} />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold mb-2">2. Precision Matching</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">We don't just "assign" talent. We match your business's specific DNA with a professional who possesses the exact specialized experience required.</p>
              </div>
              <div className="hidden md:block absolute top-8 left-[64px] right-[-48px] h-[2px] bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="relative z-10 space-y-6 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <LineChart size={32} />
              </div>
              <div>
                <h4 className="font-headline text-xl font-bold mb-2">3. Active Management</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Post-hiring, APG remains your partner. We provide ongoing QA, security updates, and performance optimization to ensure ROI remains constant.</p>
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight">"My vision for APG is to create a world where talent has no borders and excellence has no compromise."</h2>
            <div className="space-y-4">
              <p className="text-emerald-100/80 leading-relaxed italic">
                "I founded AnchorPoint because I saw brilliant professionals in emerging markets being undervalued, and world-class founders being slowed down by poor hiring decisions. We are building the stable 'anchor' for both. We aren't just a service; we are a career-long partnership."
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
            <p className="text-on-surface-variant">Everything you need to know about the AnchorPoint ecosystem.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "How does APG handle data security for enterprise clients?", a: "All our VAs undergo comprehensive background checks and are trained in GDPR and HIPAA compliance. We provide managed hardware and secure VPN access if required by your IT protocols." },
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

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="glass-card p-6 rounded-2xl hover:bg-white/50 transition-colors cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg">{question}</h4>
        <ChevronDown className={`text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="text-on-surface-variant text-sm overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Solutions Page Components ---

const SolutionsPage = () => {
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
                <h3 className="font-headline text-2xl font-bold mb-4">The Stable 'Anchor' Approach</h3>
                <p className="text-on-surface-variant text-sm">Our 1,200+ VA network provides a redundancy-proof talent pool. If your lead talent steps away, we have ready-to-deploy vertical experts who already know your industry.</p>
              </div>
              <div className="hidden lg:block text-8xl font-black text-primary/5">APG</div>
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

// --- Pricing Page Components ---

const PricingPage = () => {
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
            { q: "What security measures are in place?", a: "All AnchorPoint talent works through managed virtual environments. We use encrypted password managers (like 1Password) so your credentials are never exposed, and all workstations are monitored for compliance." },
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

// --- Main App ---

const SignInPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(circle at top left, #f8f9fb 0%, #e1e2e4 40%, #6ffbbe 100%)' }}>
      {/* Visual Accents */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary-container/10 blur-[120px] rounded-full -z-10"></div>

      <main className="flex-grow flex items-center justify-center w-full px-6 py-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl rounded-xl p-8 md:p-12 shadow-[0_40px_40px_rgba(0,108,73,0.04)]"
          style={{
            background: 'rgba(255, 255, 255, 0.35)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Brand Anchor */}
          <div className="mb-10 text-center">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="inline-block">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tighter text-primary mb-2 hover:opacity-80 transition-opacity">AnchorPointGlobal</h2>
            </a>
            <h1 className="font-headline text-xl text-on-surface-variant font-medium tracking-tight">Join AnchorPointGlobal</h1>
          </div>

          {/* Social Action */}
          <button className="w-full bg-white/40 hover:bg-white/60 transition-all duration-300 py-4 px-6 rounded-2xl flex items-center justify-center gap-3 border border-white/20 active:scale-[0.98]">
            <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span className="font-semibold text-on-surface-variant tracking-tight">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative my-8 flex items-center">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="px-4 font-label text-xs tracking-widest text-on-surface-variant font-bold">OR</span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 ml-1 font-bold">Full Name</label>
                <input 
                  className="w-full bg-surface-container-high rounded-md py-4 px-4 text-sm border-none focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none focus:border-b-2 focus:border-b-primary focus:rounded-b-none" 
                  placeholder="Enter your full name" 
                  type="text"
                />
              </div>
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 ml-1 font-bold">Email Address</label>
                <input 
                  className="w-full bg-surface-container-high rounded-md py-4 px-4 text-sm border-none focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none focus:border-b-2 focus:border-b-primary focus:rounded-b-none" 
                  placeholder="name@example.com" 
                  type="email"
                />
              </div>
              <div className="relative group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 ml-1 font-bold">Password</label>
                <input 
                  className="w-full bg-surface-container-high rounded-md py-4 px-4 text-sm border-none focus:ring-0 focus:bg-surface-container-lowest transition-all outline-none focus:border-b-2 focus:border-b-primary focus:rounded-b-none" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
            </div>

            {/* CTA */}
            <button 
              className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold py-5 rounded-2xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-300 tracking-tight text-lg" 
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant text-sm font-medium">
              Already have an account? 
              <a href="#" onClick={(e) => { e.preventDefault(); }} className="text-primary font-bold hover:underline underline-offset-4 ml-1">Log in</a>
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer Block (Shared Component) */}
      <footer className="flex flex-col md:flex-row justify-center items-center gap-6 w-full pb-8 bg-transparent z-10">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a href="#" className="font-manrope text-xs tracking-wide uppercase text-slate-400 hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy Policy</a>
          <a href="#" className="font-manrope text-xs tracking-wide uppercase text-slate-400 hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms of Service</a>
          <a href="#" className="font-manrope text-xs tracking-wide uppercase text-slate-400 hover:text-primary transition-colors opacity-80 hover:opacity-100">Help Center</a>
        </div>
        <p className="font-manrope text-xs tracking-wide uppercase text-slate-400 opacity-80">© 2026 AnchorPointGlobal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'signin' && <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Stats />
            <Testimonials />
            <Features />
            <TalentSection />
            <LogoCloud />
            <Pricing />
            <Methodology />
            <CTA />
          </>
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'solutions' && <SolutionsPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'signin' && <SignInPage setCurrentPage={setCurrentPage} />}
      </main>
      {currentPage !== 'signin' && <Footer setCurrentPage={setCurrentPage} />}
    </div>
  );
}
