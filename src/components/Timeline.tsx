import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Box, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

interface TimelineProps {
  onOpenQuoteModal: () => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Free Quote & Virtual Survey',
      desc: 'Submit your move details online or schedule a quick 5-minute video call to receive an instant, binding price quote with zero obligation.'
    },
    {
      number: '02',
      icon: Box,
      title: 'Custom Plan & Box Delivery',
      desc: 'Confirm your moving date and receive your double-walled box bundle delivered to your doorstep. Optional full packing service scheduled for the day prior.'
    },
    {
      number: '03',
      icon: Truck,
      title: 'Moving Day Execution',
      desc: 'Our uniformed crew arrives punctually, lays down protective floor runners, wraps furniture, and safely loads everything onto our tail-lift vehicle.'
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Safe Delivery & Unpacking',
      desc: 'We transport your goods under live GPS tracking, position furniture into your designated rooms, reassemble beds/wardrobes, and collect empty packing boxes.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Simple 4-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            How Our Removals Process Works
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            We handle every detail from initial planning to final room layout, ensuring a seamless, stress-free move.
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-[#E6DAC4] -z-0">
            <motion.div
              className="h-full bg-[#5F7355]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer bg-white rounded-2xl p-6 border transition-all duration-300 text-center flex flex-col items-center ${
                    isActive
                      ? 'border-[#5F7355] shadow-xl ring-2 ring-[#8C9B80]/40 -translate-y-2'
                      : 'border-[#E6DAC4] shadow-xs hover:border-[#8C9B80]'
                  }`}
                >
                  {/* Number Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg font-poppins mb-4 transition-colors shadow-md ${
                      isActive ? 'bg-[#5F7355] text-white' : 'bg-[#E6DAC4] text-[#5F7355]'
                    }`}
                  >
                    <span>{step.number}</span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#E6DAC4] flex items-center justify-center text-[#475841] mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold font-poppins text-[#475841] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#5F7355] hover:bg-[#475841] text-white font-bold font-poppins text-sm rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
          >
            <span>Start Step 1: Request Your Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#CDBA96]" />
          </button>
        </div>
      </div>
    </section>
  );
};
