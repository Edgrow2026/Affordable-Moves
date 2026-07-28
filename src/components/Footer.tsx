import React from "react";
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#475841] text-[#E6DAC4] pt-16 border-t border-[#5F7355]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-[#5F7355] flex items-center justify-center text-[#CDBA96] shadow-md">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-poppins text-white tracking-tight">
                Affordable
                <span className="text-[#CDBA96] font-normal ml-1">Moves</span>
              </span>
            </a>

            <p className="text-xs text-[#E6DAC4] leading-relaxed max-w-sm">
              The UK’s trusted choice for stress-free house removals, man and
              van transport, office relocations, and secure climate-controlled
              storage. Operating to British Association of Removers standards.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((soc, i) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-full border border-[#8C9B80] flex items-center justify-center text-[#E6DAC4] hover:bg-[#CDBA96] hover:text-[#475841] transition-colors"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#estimator"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  Cost Estimator
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#coverage"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  Coverage Areas
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  Fleet Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#CDBA96] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Removals Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Full House & Flat Removals</li>
              <li>Man & Van Hourly Service</li>
              <li>Office & Commercial Relocations</li>
              <li>Fragile Packing & Materials</li>
              <li>Short & Long-term Secure Storage</li>
              <li>Nationwide Long-Distance Moving</li>
              <li>Piano & Heavy Item Transport</li>
            </ul>
          </div>

          {/* Contact Details & CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold font-poppins text-white uppercase tracking-wider">
              Dispatch Helpline
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#CDBA96]" />
                <span className="font-semibold text-white">
                  Freephone: 0800 123 4567
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#CDBA96]" />
                <span>quotes@affordablemoves.co.uk</span>
              </p>
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#CDBA96] shrink-0 mt-0.5" />
                <span>124 High St, Kensington, London W8 4SG</span>
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2.5 px-4 bg-[#CDBA96] hover:bg-[#B29A70] text-[#2F2F2F] font-bold font-poppins text-xs rounded-xl shadow-md transition-colors"
            >
              Get Free Online Quote
            </button>
          </div>
        </div>

        <div className="my-8 border-t border-[#8C9B80]/30" />

        {/* Lower Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6DAC4]">
          <p>
            © {new Date().getFullYear()} Affordable Moves Ltd. Registered in
            England & Wales. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#" className="hover:text-[#CDBA96] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#CDBA96] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#CDBA96] transition-colors">
              Insurance Cover Details
            </a>
            <a href="#" className="hover:text-[#CDBA96] transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>

      {/* Very bottom bar */}
      <div className="bg-[#3C4B37] py-3 text-center text-[11px] text-[#E6DAC4]/80 border-t border-[#5F7355]/40">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#CDBA96]" />
          <span>
            BAR Compliant • £50,000 Goods in Transit Protection Included
            Standard
          </span>
        </div>
      </div>
    </footer>
  );
};
