import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('affordable_moves_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('affordable_moves_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('affordable_moves_cookie_consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#475841] text-white p-4 sm:p-5 border-t-2 border-[#CDBA96] shadow-2xl"
          role="dialog"
          aria-label="Cookie consent banner"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#5F7355] text-[#CDBA96] rounded-xl shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-poppins text-white">We Value Your Privacy</h4>
                <p className="text-xs text-[#E6DAC4] mt-0.5 leading-relaxed max-w-3xl">
                  We use cookies to optimize your browsing experience, provide accurate instant moving cost calculations, and analyze site usage.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 shrink-0 w-full sm:w-auto justify-end">
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-transparent border border-[#E6DAC4] text-white hover:bg-white hover:text-[#475841] text-xs font-semibold rounded-xl transition-colors"
              >
                Decline Non-Essential
              </button>

              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-[#CDBA96] hover:bg-[#B29A70] text-[#2F2F2F] text-xs font-bold font-poppins rounded-xl transition-colors shadow-sm"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
