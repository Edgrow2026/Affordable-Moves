import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CTABannerProps {
  onOpenQuoteModal: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #475841 0%, #5F7355 55%, #8C9B80 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xs px-3.5 py-1 rounded-full text-xs font-semibold text-[#CDBA96] border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast 15-Minute Response Time</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-poppins text-white leading-tight">
              Ready to Make Your Next Move Effortless & Affordable?
            </h2>

            <p className="text-sm sm:text-base text-[#E6DAC4] max-w-2xl font-normal leading-relaxed">
              Get a guaranteed binding price quote today. No hidden costs, £50k transit insurance included, and free 48-hour cancellation policy.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 bg-[#CDBA96] hover:bg-[#B29A70] text-[#2F2F2F] font-bold font-poppins text-sm rounded-xl shadow-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <span>Get Your Free Instant Quote</span>
              <ArrowRight className="w-4 h-4 text-[#2F2F2F]" />
            </button>

            <a
              href="tel:08001234567"
              className="w-full sm:w-auto px-6 py-3 border border-[#E6DAC4] hover:bg-white hover:text-[#475841] text-white font-semibold font-poppins text-xs rounded-xl transition-colors flex items-center justify-center space-x-2 text-center"
            >
              <Phone className="w-4 h-4 text-[#CDBA96]" />
              <span className="whitespace-nowrap">Speak to an Advisor: 0800 123 4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
