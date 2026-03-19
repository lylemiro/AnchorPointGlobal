import React from 'react';
import { Home, Rocket, CreditCard, Info, Mail, User } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={22} /> },
    { id: 'solutions', label: 'Solutions', icon: <Rocket size={22} /> },
    { id: 'pricing', label: 'Pricing', icon: <CreditCard size={22} /> },
    { id: 'about', label: 'About', icon: <Info size={22} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={22} /> },
    { id: 'signin', label: 'Sign In', icon: <User size={22} /> },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-xl border-t border-on-surface/5 flex items-center overflow-x-auto no-scrollbar py-1 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex flex-col items-center gap-1 p-2 transition-colors min-w-[72px] flex-shrink-0 ${currentPage === item.id ? 'text-primary' : 'text-on-surface-variant/50 hover:text-primary'}`}
          >
            {item.icon}
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
