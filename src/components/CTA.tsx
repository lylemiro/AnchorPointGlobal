import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
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
  );
};

export default CTA;
