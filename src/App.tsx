import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/SignInPage';
import OnboardingPage from './pages/OnboardingPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      case 'signin':
        return (
          <SignInPage 
            onSignIn={() => setCurrentPage('onboarding')} 
            onBack={() => setCurrentPage('home')} 
          />
        );
      case 'onboarding':
        return (
          <OnboardingPage 
            onComplete={() => setCurrentPage('home')} 
            onBack={() => setCurrentPage('signin')} 
          />
        );
      default:
        return <HomePage />;
    }
  };

  const showNavAndFooter = !['signin', 'onboarding'].includes(currentPage);

  return (
    <div className="min-h-screen bg-surface font-body selection:bg-primary/20 selection:text-primary">
      {showNavAndFooter && (
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {showNavAndFooter && (
        <Footer setCurrentPage={setCurrentPage} />
      )}
      {showNavAndFooter && (
        <MobileBottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
