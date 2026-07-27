import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-[#475841] text-white p-4 rounded-xl shadow-2xl border-2 border-[#CDBA96] flex items-start space-x-3"
          role="alert"
        >
          <div className="p-1.5 bg-[#5F7355] rounded-lg text-[#CDBA96] shrink-0">
            {toast.type === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-[#C69232]" />
            ) : toast.type === 'info' ? (
              <Info className="w-5 h-5 text-[#CDBA96]" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-[#CDBA96]" />
            )}
          </div>
          <div className="flex-1 pr-2">
            <h4 className="font-semibold text-white text-sm font-poppins">{toast.title}</h4>
            <p className="text-xs text-[#E6DAC4] mt-0.5 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#E6DAC4] hover:text-white hover:bg-[#5F7355] transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
