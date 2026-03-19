import React from 'react';

const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[10px] md:text-xs font-bold text-on-surface-variant tracking-widest uppercase">Trusted by Industry Leaders</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {['Stripe', 'Airbnb', 'HubSpot', 'Shopify', 'Slack'].map((logo) => (
            <div key={logo} className="text-xl md:text-3xl font-black tracking-tighter text-on-surface">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
