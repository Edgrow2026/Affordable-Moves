import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, Truck, DollarSign, CalendarX, HeartHandshake, BoxSelect } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'No Hidden Surcharges',
      desc: 'Fixed written quotes with zero unexpected key delay penalties, weekend markups, or fuel surcharges.',
      useMossBg: true,
    },
    {
      icon: ShieldCheck,
      title: '£50,000 Transit Cover Included',
      desc: 'All your goods, furniture, and personal items are fully insured during transit and loading at no extra cost.',
      useMossBg: false,
    },
    {
      icon: Clock,
      title: 'Punctual & Uniformed Crews',
      desc: 'Our movers arrive on time, in full uniform with identity badges, ready to work with extreme care.',
      useMossBg: true,
    },
    {
      icon: Truck,
      title: 'Tail-Lift Modern Fleet',
      desc: 'Clean, padded vehicles equipped with hydraulic tail lifts, stair-climbing trolleys, and transit straps.',
      useMossBg: false,
    },
    {
      icon: CalendarX,
      title: 'Free 48h Date Cancellation',
      desc: 'Plans changed due to property conveyancing? Cancel or reschedule your move free of charge up to 48 hours prior.',
      useMossBg: true,
    },
    {
      icon: BoxSelect,
      title: 'Free Furniture Protection Wraps',
      desc: 'Quilted sofa covers, mattress bags, and television crates applied as standard on every home move.',
      useMossBg: false,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            The Affordable Moves Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Why UK Families & Businesses Choose Us
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Combining traditional UK removals care with modern efficiency, clear pricing, and total security for your belongings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6DAC4] shadow-xs hover:border-[#8C9B80] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group"
              >
                {/* Alternating Icon Circles */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm ${
                    feature.useMossBg
                      ? 'bg-[#5F7355] text-white group-hover:bg-[#475841]'
                      : 'bg-[#E6DAC4] text-[#475841] group-hover:bg-[#CDBA96]'
                  }`}
                >
                  <IconComp className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold font-poppins text-[#475841] mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
