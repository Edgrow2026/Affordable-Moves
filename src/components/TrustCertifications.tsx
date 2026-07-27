import React from 'react';
import { ShieldCheck, Award, Truck, HeartHandshake, Leaf, Lock } from 'lucide-react';

export const TrustCertifications: React.FC = () => {
  const certs = [
    {
      icon: ShieldCheck,
      title: 'BAR Compliant Standards',
      desc: 'Operating strictly under British Association of Removers code of practice guidelines.'
    },
    {
      icon: Lock,
      title: '£50k Goods in Transit',
      desc: 'All household items fully insured against damage or loss during loading and transport.'
    },
    {
      icon: Award,
      title: 'RHA Member License',
      desc: 'Licensed member of the Road Haulage Association with verified vehicle inspection standards.'
    },
    {
      icon: Leaf,
      title: 'Carbon Offset Fleet',
      desc: 'Eco-friendly double-walled cartons and route optimization to minimize carbon emissions.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block">
            Accreditations & Guarantees
          </span>
          <h3 className="text-2xl font-bold font-poppins text-[#475841] mt-1">
            Fully Licensed & Accredited UK Moving Operator
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => {
            const IconComp = c.icon;
            return (
              <div
                key={i}
                className="bg-[#E6DAC4]/30 rounded-2xl p-6 border border-[#8C9B80]/40 text-center space-y-3 transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F4] border border-[#E6DAC4] text-[#475841] flex items-center justify-center mx-auto shadow-xs">
                  <IconComp className="w-6 h-6 text-[#475841]" />
                </div>
                <h4 className="text-sm font-bold font-poppins text-[#475841]">{c.title}</h4>
                <p className="text-xs text-[#666666] leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
