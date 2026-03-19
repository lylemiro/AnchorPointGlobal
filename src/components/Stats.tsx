import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {[
            { label: 'GLOBAL TALENT', value: '1,200+' },
            { label: 'CLIENT SAVINGS', value: '$15M+' },
            { label: 'VETTING RATE', value: '1%' },
            { label: 'RETENTION', value: '98%' },
          ].map((stat, i) => (
            <div key={i} className="space-y-1 md:space-y-2">
              <div className="text-3xl md:text-5xl font-black text-primary tracking-tighter">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold text-on-surface-variant tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
