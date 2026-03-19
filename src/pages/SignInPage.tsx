import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Lock, Github, Chrome } from 'lucide-react';

interface SignInPageProps {
  onSignIn: () => void;
  onBack: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({ onSignIn, onBack }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-surface overflow-hidden">
      {/* Left Panel - Branding/Visual */}
      <div className="hidden md:flex md:w-1/2 bg-on-surface relative p-16 flex-col justify-between overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12 cursor-pointer" onClick={onBack}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-headline font-black text-xl">A</div>
            <span className="text-white font-headline font-bold text-xl tracking-tighter">AnchorPointGlobal</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-black text-white tracking-tighter leading-[0.9] mb-8">
            The Future of <br/><span className="text-primary">Global Talent</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md font-body leading-relaxed">
            Access elite, vetted professionals and scale your enterprise with AnchorPointGlobal's managed talent ecosystem.
          </p>
        </div>
        
        <div className="relative z-10">
          <div className="flex -space-x-3 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-on-surface bg-surface-container-high overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-on-surface bg-primary flex items-center justify-center text-white text-[10px] font-bold">+500</div>
          </div>
          <p className="text-white/40 text-sm font-medium">Trusted by 500+ global enterprises</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-24 lg:px-32 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="md:hidden flex items-center gap-3 mb-12" onClick={onBack}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-headline font-black text-xl">A</div>
            <span className="text-on-surface font-headline font-bold text-xl tracking-tighter">AnchorPointGlobal</span>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant font-body">Enter your credentials to access your dashboard.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none" 
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
                <button className="text-xs font-bold text-primary hover:underline">Forgot password?</button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              onClick={onSignIn}
              className="w-full bg-on-surface text-white font-headline font-bold py-4 rounded-xl shadow-xl shadow-on-surface/10 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Sign In</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/20"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-on-surface-variant">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors font-headline font-bold text-sm">
                <Chrome size={18} />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 border border-outline-variant/30 rounded-xl hover:bg-surface-container-lowest transition-colors font-headline font-bold text-sm">
                <Github size={18} />
                <span>GitHub</span>
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-on-surface-variant font-body">
            Don't have an account? <button className="text-primary font-bold hover:underline">Contact Sales</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
