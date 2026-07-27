import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

interface FAQProps {
  onOpenQuoteModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenQuoteModal }) => {
  const [openId, setOpenId] = useState<string>('f1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS_DATA
    : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF8F4] border-b border-[#E6DAC4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Got Questions? We Have Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Everything you need to know about booking, insurance, packing, and moving day procedures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'pricing', label: 'Pricing & Estimates' },
            { id: 'insurance', label: 'Insurance Cover' },
            { id: 'packing', label: 'Packing & Boxes' },
            { id: 'general', label: 'General & Booking' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-poppins transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#5F7355] text-white border-[#5F7355] shadow-sm'
                  : 'bg-white text-[#2F2F2F] border-[#E6DAC4] hover:border-[#8C9B80]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#E6DAC4]/20 border-[#8C9B80] shadow-md'
                    : 'bg-white border-[#E6DAC4] hover:border-[#8C9B80]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base font-bold font-poppins text-[#475841]">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-full bg-[#FAF8F4] border border-[#E6DAC4] shrink-0 text-[#5F7355]">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#5F7355]' : 'text-[#8C9B80]'
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm text-[#666666] leading-relaxed border-t border-[#E6DAC4]/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#E6DAC4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6DAC4] text-[#475841] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-poppins text-[#475841]">Have a specific moving question?</h4>
              <p className="text-xs text-[#666666]">Our friendly customer service team is available 7 days a week.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="tel:08001234567"
              className="px-4 py-2.5 bg-[#FAF8F4] border border-[#E6DAC4] text-[#475841] hover:bg-[#E6DAC4] font-semibold text-xs rounded-xl transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#5F7355]" />
              <span>0800 123 4567</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-[#5F7355] hover:bg-[#475841] text-white font-semibold font-poppins text-xs rounded-xl shadow-xs transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
