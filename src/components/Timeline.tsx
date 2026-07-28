import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FileText,
  Box,
  Truck,
  CheckCircle2,
  ArrowRight,
  Package,
  ClipboardCheck,
  CalendarCheck,
  MapPin,
} from "lucide-react";

interface TimelineProps {
  onOpenQuoteModal: () => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Request Quote",
      desc: "Submit your moving requirements online or contact our team for a free, no-obligation quotation.",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Free Survey",
      desc: "We assess your moving requirements through a virtual or on-site survey to provide an accurate plan.",
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Planning",
      desc: "We schedule your moving date, assign the right team, and create a customized moving plan.",
    },
    {
      number: "04",
      icon: Package,
      title: "Packing",
      desc: "Our professional movers carefully pack your belongings using high-quality packing materials for maximum protection.",
    },
    {
      number: "05",
      icon: Truck,
      title: "Moving",
      desc: "Your belongings are transported safely by our experienced team using fully equipped removal vehicles.",
    },
    {
      number: "06",
      icon: MapPin,
      title: "Delivery",
      desc: "We deliver your items safely and place them in the correct rooms at your new property.",
    },
    {
      number: "07",
      icon: CheckCircle2,
      title: "Unpacking",
      desc: "We help unpack your belongings, reassemble furniture if required, and ensure everything is in place before we leave.",
    },
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
            We handle every detail from initial planning to final room layout,
            ensuring a seamless, stress-free move.
          </p>
        </div>

        {/* Desktop Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-[#E6DAC4] -z-0">
            <motion.div
              className="h-full bg-[#5F7355]"
              initial={{ width: "0%" }}
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
                      ? "border-[#5F7355] shadow-xl ring-2 ring-[#8C9B80]/40 -translate-y-2"
                      : "border-[#E6DAC4] shadow-xs hover:border-[#8C9B80]"
                  }`}
                >
                  {/* Number Circle */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg font-poppins mb-4 transition-colors shadow-md ${
                      isActive
                        ? "bg-[#5F7355] text-white"
                        : "bg-[#E6DAC4] text-[#5F7355]"
                    }`}
                  >
                    <span>{step.number}</span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-[#E6DAC4] flex items-center justify-center text-[#475841] mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold font-poppins text-[#475841] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {step.desc}
                  </p>
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
