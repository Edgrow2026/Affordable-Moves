import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="reviews" className="py-20 bg-[#E6DAC4]/40 border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Verified Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            What UK Homeowners & Businesses Say
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Real feedback from recent house moves, office relocations, and man-and-van transports across the UK.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#E6DAC4] relative space-y-6"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-[#E6DAC4] opacity-50">
                <Quote className="w-16 h-16" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-[#B29A70]">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B29A70]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-lg text-[#2F2F2F] leading-relaxed italic font-normal relative z-10">
                "{TESTIMONIALS_DATA[currentIndex].quote}"
              </p>

              {/* Author & Move Info */}
              <div className="pt-4 border-t border-[#E6DAC4] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-bold font-poppins text-[#475841]">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </h3>
                    {TESTIMONIALS_DATA[currentIndex].verified && (
                      <span className="inline-flex items-center space-x-1 text-[10px] font-semibold bg-[#E6DAC4]/60 text-[#475841] px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-[#5F7355]" />
                        <span>Verified Move</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#666666] mt-0.5">
                    {TESTIMONIALS_DATA[currentIndex].location} • <span className="font-medium text-[#475841]">{TESTIMONIALS_DATA[currentIndex].moveDetails}</span>
                  </p>
                </div>

                <span className="text-xs text-[#666666] font-medium">
                  {TESTIMONIALS_DATA[currentIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#5F7355]' : 'w-2.5 bg-[#CDBA96]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full bg-[#5F7355] hover:bg-[#475841] text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full bg-[#5F7355] hover:bg-[#475841] text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
