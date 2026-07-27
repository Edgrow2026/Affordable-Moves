import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Home, Truck, Building2, PackageCheck, Warehouse, MapPin, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteWithService }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Truck':
        return <Truck className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6" />;
      default:
        return <MapPin className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FAF8F4] border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Tailored Removals Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Our Professional Moving Services
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            From single furniture pickups to nationwide 5-bedroom house relocations, we have the right team, fleet, and equipment for every requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6DAC4] shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Soft Moss Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#475841]/85 via-[#475841]/40 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-[#FAF8F4]/95 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E6DAC4] text-xs font-bold text-[#475841] font-poppins shadow-xs">
                    {service.startingPrice}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E6DAC4] text-[#475841] flex items-center justify-center shrink-0 shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg font-bold font-poppins text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E6DAC4]/60">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#2F2F2F]">
                        <CheckCircle2 className="w-4 h-4 text-[#5F7355] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#FAF8F4] mt-auto">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-semibold text-[#5F7355] hover:text-[#B29A70] transition-colors flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="px-4 py-2 bg-[#5F7355] hover:bg-[#475841] text-white text-xs font-semibold font-poppins rounded-xl transition-colors shadow-xs"
                >
                  Book Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#FAF8F4] rounded-2xl max-w-2xl w-full border border-[#E6DAC4] shadow-2xl overflow-hidden relative"
          >
            <div className="relative h-56">
              <img
                src={selectedServiceModal.imageUrl}
                alt={selectedServiceModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#475841] via-[#475841]/60 to-transparent" />
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-[#CDBA96] uppercase tracking-wider block mb-1">
                  Service Specifications
                </span>
                <h3 className="text-2xl font-bold font-poppins">{selectedServiceModal.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-[#2F2F2F] leading-relaxed">{selectedServiceModal.fullDesc}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#475841] mb-2">
                  What’s Included in this Service:
                </h4>
                <ul className="space-y-2">
                  {selectedServiceModal.features.map((f, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-[#666666]">
                      <CheckCircle2 className="w-4 h-4 text-[#5F7355] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E6DAC4]">
                <div>
                  <span className="text-xs text-[#666666] block">Starting Rate</span>
                  <span className="text-lg font-bold text-[#475841] font-poppins">
                    {selectedServiceModal.startingPrice}
                  </span>
                </div>

                <button
                  onClick={() => {
                    const title = selectedServiceModal.title;
                    setSelectedServiceModal(null);
                    onOpenQuoteWithService(title);
                  }}
                  className="px-6 py-3 bg-[#5F7355] hover:bg-[#475841] text-white font-semibold font-poppins text-sm rounded-xl shadow-md transition-colors"
                >
                  Request Quote for {selectedServiceModal.title}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
