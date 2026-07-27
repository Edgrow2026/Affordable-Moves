import React from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Leaf, UserCheck, ArrowRight, Award } from 'lucide-react';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const highlights = [
    {
      icon: Users,
      title: 'BAR-Trained Uniformed Crews',
      desc: 'Our movers are full-time employed, DBS-checked, and trained to British Association of Removers standards for safe handling of antiques & heavy furniture.'
    },
    {
      icon: ShieldCheck,
      title: 'Fixed Upfront Pricing',
      desc: 'No hidden mileage surcharges, key delay penalties, or surprise stair fees. What we quote in writing is exactly what you pay.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Packing Materials',
      desc: 'We supply 100% recyclable heavy-duty double-walled cartons, biodegradable tape, and reusable plastic crates for commercial moves.'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Personal Move Manager',
      desc: 'You receive a single point of contact who handles pre-move logistics, box deliveries, vehicle scheduling, and key release coordination.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF8F4] border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E6DAC4]">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800"
                alt="Affordable Moves Crew Carrying Furniture"
                className="w-full h-[450px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#475841]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-[#E6DAC4] shadow-lg flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#5F7355] text-[#CDBA96] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-poppins text-[#475841]">12+ Years UK Removals Excellence</h4>
                  <p className="text-xs text-[#666666]">Serving London, Midlands, North West & Nationwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-1">
                About Affordable Moves
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841] tracking-tight">
                The UK’s Most Dependable & Transparent Removals Company
              </h2>
            </div>

            <p className="text-[#666666] leading-relaxed text-base">
              Founded over a decade ago, Affordable Moves was created with a straightforward mission: to deliver first-class house and office removals at straightforward, honest rates. We understand that moving house is one of life’s biggest milestones — which is why our team treats every box and sofa with the same care as if it were our own.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-[#E6DAC4] shadow-xs space-y-2 transition-transform duration-300 hover:-translate-y-1 hover:border-[#8C9B80]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E6DAC4] flex items-center justify-center text-[#5F7355]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold font-poppins text-[#475841]">{item.title}</h3>
                    <p className="text-xs text-[#666666] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#5F7355] text-[#5F7355] hover:bg-[#5F7355] hover:text-white font-semibold font-poppins text-sm rounded-xl transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2"
              >
                <span>Learn More / Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
