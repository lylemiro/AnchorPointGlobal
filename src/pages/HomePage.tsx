import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import TalentSection from '../components/TalentSection';
import LogoCloud from '../components/LogoCloud';
import Pricing from '../components/Pricing';
import Methodology from '../components/Methodology';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Testimonials />
      <Features />
      <TalentSection />
      <LogoCloud />
      <Pricing />
      <Methodology />
      <CTA />
    </main>
  );
};

export default HomePage;
