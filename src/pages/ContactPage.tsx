import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4 md:mb-6">Get in Touch</h1>
        <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body">
          Ready to scale your enterprise with elite talent? Our team is here to answer your questions and build your custom solution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
        {/* Contact Info */}
        <div className="space-y-6 md:space-y-12">
          <div className="bg-surface-container-low rounded-2xl md:rounded-3xl p-6 md:p-10 border border-slate-100">
            <h3 className="text-xl md:text-2xl font-headline font-bold mb-6 md:mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] md:text-sm text-on-surface-variant mb-1 uppercase tracking-widest">Email Us</h4>
                  <a href="mailto:hello@anchorpointglobal.com" className="text-base md:text-lg font-semibold hover:text-primary transition-colors break-all">hello@anchorpointglobal.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] md:text-sm text-on-surface-variant mb-1 uppercase tracking-widest">Call Us</h4>
                  <a href="tel:+18005550199" className="text-base md:text-lg font-semibold hover:text-primary transition-colors">+1 (800) 555-0199</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] md:text-sm text-on-surface-variant mb-1 uppercase tracking-widest">Headquarters</h4>
                  <p className="text-base md:text-lg font-semibold">100 Innovation Drive<br/>San Francisco, CA 94111</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100 mb-12 md:mb-0">
          <h3 className="text-xl md:text-2xl font-headline font-bold mb-6 md:mb-8">Send a Message</h3>
          <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="block font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold ml-1">First Name</label>
                <input type="text" className="w-full bg-surface-container-lowest border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="block font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold ml-1">Last Name</label>
                <input type="text" className="w-full bg-surface-container-lowest border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold ml-1">Email Address</label>
              <input type="email" className="w-full bg-surface-container-lowest border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <label className="block font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold ml-1">Company</label>
              <input type="text" className="w-full bg-surface-container-lowest border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Company Name" />
            </div>
            <div className="space-y-2">
              <label className="block font-label text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant font-bold ml-1">Message</label>
              <textarea rows={4} className="w-full bg-surface-container-lowest border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" placeholder="How can we help you scale?"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white font-headline font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
