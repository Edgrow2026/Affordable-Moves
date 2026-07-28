import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  ShieldCheck,
  Star,
  Truck,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenQuoteModalWithData: (data: {
    pickupPostcode?: string;
    deliveryPostcode?: string;
    moveType?: string;
    moveDate?: string;
  }) => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModalWithData,
  onOpenQuoteModal,
}) => {
  const [pickupPostcode, setPickupPostcode] = useState("");
  const [deliveryPostcode, setDeliveryPostcode] = useState("");
  const [moveType, setMoveType] = useState("2-bed-house");
  const [moveDate, setMoveDate] = useState("");

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuoteModalWithData({
      pickupPostcode,
      deliveryPostcode,
      moveType,
      moveDate,
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-16 lg:py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
          alt="Affordable Moves Truck & Moving Team"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Moss Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(71, 88, 65, 0.95) 0%, rgba(71, 88, 65, 0.82) 45%, rgba(71, 88, 65, 0.45) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-white"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#FAF8F4]/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E6DAC4]/30">
              <Star className="w-4 h-4 text-[#CDBA96] fill-[#CDBA96]" />
              <span className="text-xs font-medium text-white tracking-wide">
                Rated 4.9/5 by 1,200+ UK Homeowners & Businesses
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-[1.15] text-white tracking-tight">
              Stress-Free UK Removals at{" "}
              <span className="text-[#CDBA96]">Prices You Can Trust</span>
            </h1>

            <p className="text-base sm:text-lg text-[#E6DAC4] max-w-2xl font-normal leading-relaxed">
              Fully insured house and office removals across England, Scotland,
              Wales, and Northern Ireland. Professional 2-4 man crews, tail-lift
              lutons, and free furniture protection blankets included.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#CDBA96] hover:bg-[#B29A70] text-[#2F2F2F] font-bold font-poppins px-7 py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <span className="whitespace-nowrap">Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-[#2F2F2F]" />
              </button>

              <a
                href="tel:08001234567"
                className="border-2 border-[#E6DAC4] hover:bg-white hover:text-[#475841] text-white font-semibold font-poppins px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="w-4 h-4" />
                <span className="whitespace-nowrap">
                  Call Now: 0800 123 4567
                </span>
              </a>
            </div>

            {/* Micro Feature Bullet Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs text-[#E6DAC4]">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CDBA96] shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CDBA96] shrink-0" />
                <span>£50,000 Transit Cover</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CDBA96] shrink-0" />
                <span>Free 48h Cancellation</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Instant Quote Card Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 bg-white/45 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E6DAC4]/60">
              {" "}
              <div>
                <span className="text-[11px] font-bold text-[#a57f3e] uppercase tracking-wider block">
                  Instant Calculator
                </span>
                <h3 className="text-xl font-bold font-poppins text-[#475841]">
                  Quick Quote Estimator
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#5F7355]">
                {" "}
                <Truck className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleQuickQuoteSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                  Property Size / Type
                </label>
                <select
                  value={moveType}
                  onChange={(e) => setMoveType(e.target.value)}
                  className="w-full py-2.5 px-3 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                >
                  <option value="1-bed-flat">1 Bedroom Flat / Studio</option>
                  <option value="2-bed-house">2 Bedroom House / Flat</option>
                  <option value="3-bed-house">3 Bedroom House</option>
                  <option value="4-plus-house">
                    4+ Bedroom Detached House
                  </option>
                  <option value="office">Office / Commercial Space</option>
                  <option value="single-item">
                    Single Furniture Item / Man & Van
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Pickup Postcode
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. SW1A 1AA"
                      value={pickupPostcode}
                      onChange={(e) =>
                        setPickupPostcode(e.target.value.toUpperCase())
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Destination Postcode
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. M1 1AE"
                      value={deliveryPostcode}
                      onChange={(e) =>
                        setDeliveryPostcode(e.target.value.toUpperCase())
                      }
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                  Estimated Moving Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                  <input
                    type="date"
                    required
                    value={moveDate}
                    onChange={(e) => setMoveDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#5F7355] hover:bg-[#475841] text-white font-semibold font-poppins text-sm rounded-xl shadow-lg transition-all transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <span>Calculate & Get Full Price</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#666666] text-center">
                🔒 100% Free • No Spam Guarantee • Response in 15 Minutes
              </p>
            </form>
          </motion.div>
        </div>

        {/* Hero Trust Badges Row */}
        <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-[#CDBA96] block">
              15,000+
            </span>
            <span className="text-xs sm:text-sm font-medium text-white block">
              Moves Completed
            </span>
            <span className="text-[11px] text-[#E6DAC4] block">
              Across England & UK
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-[#CDBA96] block">
              4.9 / 5.0
            </span>
            <span className="text-xs sm:text-sm font-medium text-white block">
              Trustpilot Score
            </span>
            <span className="text-[11px] text-[#E6DAC4] block">
              1,200+ Verified Reviews
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-[#CDBA96] block">
              £50,000
            </span>
            <span className="text-xs sm:text-sm font-medium text-white block">
              Goods in Transit
            </span>
            <span className="text-[11px] text-[#E6DAC4] block">
              Standard Protection Included
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-[#CDBA96] block">
              12+ Years
            </span>
            <span className="text-xs sm:text-sm font-medium text-white block">
              Removals Excellence
            </span>
            <span className="text-[11px] text-[#E6DAC4] block">
              BAR Standard Trained Crews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
