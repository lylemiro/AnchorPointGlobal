import React, { useState, useEffect } from 'react';
import { Anchor, Search } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-md' : 'bg-white/40 backdrop-blur-md'} border-b border-white/20`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center md:justify-between min-h-[64px] md:min-h-[80px]">
        
        {/* Logo - Centered on mobile, Left-aligned on desktop */}
        <div className="flex items-center gap-2 md:gap-3 md:static">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Anchor className="text-white" size={16} />
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-lg md:text-xl font-extrabold tracking-tighter text-on-surface font-headline">
            AnchorPointGlobal
          </a>
        </div>

        {/* Desktop Navigation Links - Grouped together */}
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm text-on-surface-variant">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); }} className={`hover:text-primary transition-colors ${currentPage === 'solutions' ? 'text-primary font-bold' : ''}`}>Solutions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('pricing'); }} className={`hover:text-primary transition-colors ${currentPage === 'pricing' ? 'text-primary font-bold' : ''}`}>Pricing</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} className={`hover:text-primary transition-colors ${currentPage === 'about' ? 'text-primary font-bold' : ''}`}>About</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} className={`hover:text-primary transition-colors ${currentPage === 'contact' ? 'text-primary font-bold' : ''}`}>Contact</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 text-on-surface-variant/70 hover:text-primary transition-colors hidden lg:block">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setCurrentPage('signin')}
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
