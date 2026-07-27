import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Truck, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#475841] text-white text-xs py-2 px-4 border-b border-[#5F7355]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-6 text-[#E6DAC4]">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CDBA96]" />
              <span>BAR-Compliant UK Removals</span>
            </span>
            <span className="hidden md:flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#CDBA96]" />
              <span>Mon - Sun: 8:00am - 8:00pm</span>
            </span>
            <span className="hidden lg:flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#CDBA96]" />
              <span>Nationwide Coverage Across the UK</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#CDBA96] font-medium hidden xs:inline">Free Quote & Advice:</span>
            <a
              href="tel:08001234567"
              className="flex items-center space-x-1.5 font-semibold text-white hover:text-[#CDBA96] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#CDBA96]" />
              <span>0800 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md shadow-md border-b border-[#E6DAC4] py-3'
            : 'bg-[#FAF8F4] py-4 border-b border-[#E6DAC4]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-[#475841] flex items-center justify-center text-[#CDBA96] shadow-md group-hover:bg-[#5F7355] transition-colors">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-poppins text-[#475841] tracking-tight block leading-none">
                Affordable<span className="text-[#8C9B80] font-normal ml-1">Moves</span>
              </span>
              <span className="text-[10px] text-[#666666] tracking-wider uppercase font-medium">
                UK Removal Specialists
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors py-1.5 px-1 ${
                    isActive ? 'text-[#5F7355] font-semibold' : 'text-[#2F2F2F] hover:text-[#5F7355]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CDBA96] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:08001234567"
              className="flex items-center space-x-2 text-sm font-semibold text-[#475841] hover:text-[#5F7355] transition-colors px-3 py-2 rounded-lg hover:bg-[#E6DAC4]/40"
            >
              <Phone className="w-4 h-4 text-[#5F7355]" />
              <span className="whitespace-nowrap">0800 123 4567</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative overflow-hidden bg-[#5F7355] hover:bg-[#475841] text-white text-sm font-semibold font-poppins px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2 group"
            >
              <span className="relative z-10 whitespace-nowrap">Get a Quote</span>
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#CDBA96]/30 to-transparent -skew-x-12 animate-shine" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#475841] hover:bg-[#E6DAC4]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Right Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 xl:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#FAF8F4] z-50 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#E6DAC4] xl:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E6DAC4]">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-[#475841] flex items-center justify-center text-[#CDBA96]">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold font-poppins text-[#475841]">
                      Affordable<span className="text-[#8C9B80]">Moves</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#475841] hover:bg-[#E6DAC4]/50 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-6 space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-[#E6DAC4] text-[#475841] font-semibold'
                            : 'text-[#2F2F2F] hover:bg-[#E6DAC4]/40 hover:text-[#5F7355]'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E6DAC4] space-y-3">
                <a
                  href="tel:08001234567"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-[#E6DAC4]/60 text-[#475841] rounded-xl font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#5F7355]" />
                  <span>Call 0800 123 4567</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3.5 bg-[#5F7355] text-white font-semibold font-poppins rounded-xl shadow-md text-sm hover:bg-[#475841] transition-colors"
                >
                  Get a Free Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
