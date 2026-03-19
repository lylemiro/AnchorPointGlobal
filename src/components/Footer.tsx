import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-surface-container-low pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="font-headline text-2xl font-black tracking-tighter text-primary">AnchorPointGlobal</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">The elite global talent network designed to anchor your business in excellence and scalability.</p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-on-surface-variant hover:text-primary hover:shadow-lg transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); }} className="hover:text-primary transition-colors">Enterprise Talent</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); }} className="hover:text-primary transition-colors">SaaS Support</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); }} className="hover:text-primary transition-colors">FinTech Compliance</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('solutions'); }} className="hover:text-primary transition-colors">E-commerce Ops</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }} className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('pricing'); }} className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }} className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('onboarding'); }} className="hover:text-primary transition-colors">Join the Elite</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-on-surface-variant font-medium">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hello@anchorpointglobal.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold text-on-surface-variant tracking-widest uppercase">
          <div>© 2026 AnchorPointGlobal. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
