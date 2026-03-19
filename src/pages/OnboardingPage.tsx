import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, User, Building2, Globe, Sparkles, ChevronLeft } from 'lucide-react';

interface OnboardingPageProps {
  onComplete: () => void;
  onBack: () => void;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    industry: '',
    needs: [] as string[]
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const steps = [
    { title: "Personal Info", icon: <User size={18} /> },
    { title: "Company Details", icon: <Building2 size={18} /> },
    { title: "Talent Needs", icon: <Globe size={18} /> },
    { title: "Ready to Launch", icon: <Sparkles size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Progress Header */}
      <div className="max-w-xl w-full mb-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-headline font-black text-lg">A</div>
            <span className="text-on-surface font-headline font-bold text-lg tracking-tighter">AnchorPointGlobal</span>
          </div>
          <div className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Step {step} of 4</div>
        </div>
        
        <div className="flex gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full bg-outline-variant/20 overflow-hidden">
              <motion.div 
                initial={false}
                animate={{ width: step > i ? '100%' : '0%' }}
                className="h-full bg-primary"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-outline-variant/10 relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Let's get started</h2>
                <p className="text-on-surface-variant font-body">Tell us a bit about yourself to personalize your experience.</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none" 
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Your Role</label>
                  <input 
                    type="text" 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none" 
                    placeholder="CEO / Founder / Operations Manager"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Company Details</h2>
                <p className="text-on-surface-variant font-body">Where are you building the future?</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Company Name</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none" 
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant ml-1">Industry</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-4 px-5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none"
                  >
                    <option value="">Select an industry</option>
                    <option value="tech">Technology / SaaS</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="realestate">Real Estate</option>
                    <option value="finance">Finance / Fintech</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Talent Needs</h2>
                <p className="text-on-surface-variant font-body">What kind of support are you looking for?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Executive Assistant",
                  "Customer Support",
                  "Sales Development",
                  "Operations Support",
                  "Creative / Design",
                  "Technical Support"
                ].map((need) => (
                  <button 
                    key={need}
                    onClick={() => toggleNeed(need)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between group ${
                      formData.needs.includes(need) 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-outline-variant/20 hover:border-primary/50 text-on-surface-variant'
                    }`}
                  >
                    <span className="font-headline font-bold text-sm">{need}</span>
                    {formData.needs.includes(need) && <CheckCircle2 size={18} />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                <Sparkles size={48} />
              </div>
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">You're all set!</h2>
                <p className="text-on-surface-variant font-body">We've analyzed your profile and are ready to match you with elite talent.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-3xl text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-medium text-on-surface">Profile verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-medium text-on-surface">Talent pool matched</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-medium text-on-surface">Security protocols initialized</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex items-center gap-4">
          {step > 1 && step < 4 && (
            <button 
              onClick={prevStep}
              className="p-4 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-lowest transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          {step < 4 ? (
            <button 
              onClick={nextStep}
              className="flex-1 bg-on-surface text-white font-headline font-bold py-4 rounded-xl shadow-xl shadow-on-surface/10 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Continue</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button 
              onClick={onComplete}
              className="flex-1 bg-primary text-white font-headline font-bold py-4 rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
