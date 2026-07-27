import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Home, Phone, Mail, User, ShieldCheck, Check } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<QuoteFormData>;
  onSuccess: (message: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialData, onSuccess }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    moveDate: '',
    pickupAddress: '',
    pickupPostcode: '',
    deliveryAddress: '',
    deliveryPostcode: '',
    propertySize: '2-bed-house',
    packingNeeded: false,
    storageNeeded: false,
    notes: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Thank you ${formData.fullName || 'Customer'}! Your free quote request has been received. Our team will contact you within 15 minutes.`);
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF8F4] rounded-2xl shadow-2xl border border-[#E6DAC4] overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#475841] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#5F7355] hover:bg-[#8C9B80] text-[#E6DAC4] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-[#CDBA96] text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>BAR Compliant • No Obligation Quote</span>
            </div>
            <h2 className="text-2xl font-bold font-poppins text-white">Get Your Free Moving Quote</h2>
            <p className="text-sm text-[#E6DAC4] mt-1">
              Guaranteed fixed pricing with zero hidden surcharges.
            </p>
          </div>

          {submitted ? (
            <div className="p-10 text-center space-y-4">
              <div className="w-16 h-16 bg-[#5F7355] text-[#CDBA96] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#475841] font-poppins">Processing Your Request...</h3>
              <p className="text-[#666666]">Securing your quote details and assigning your move manager.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07700 900123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Target Move Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="date"
                      required
                      value={formData.moveDate}
                      onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Moving From (Postcode) *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. SW1A 1AA"
                      value={formData.pickupPostcode}
                      onChange={(e) => setFormData({ ...formData, pickupPostcode: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Moving To (Postcode) *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. M1 1AE"
                      value={formData.deliveryPostcode}
                      onChange={(e) => setFormData({ ...formData, deliveryPostcode: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Property / Move Size
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-3 w-4 h-4 text-[#8C9B80]" />
                    <select
                      value={formData.propertySize}
                      onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    >
                      <option value="1-bed-flat">1 Bed Flat / Studio</option>
                      <option value="2-bed-house">2 Bed House / Flat</option>
                      <option value="3-bed-house">3 Bed House</option>
                      <option value="4-plus-house">4+ Bed House</option>
                      <option value="office">Office / Commercial Space</option>
                      <option value="single-item">Single Item / Man & Van</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-6">
                  <label className="flex items-center space-x-2 text-xs text-[#2F2F2F] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.packingNeeded}
                      onChange={(e) => setFormData({ ...formData, packingNeeded: e.target.checked })}
                      className="w-4 h-4 rounded text-[#5F7355] focus:ring-[#8C9B80]"
                    />
                    <span>Include Packing Service</span>
                  </label>

                  <label className="flex items-center space-x-2 text-xs text-[#2F2F2F] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.storageNeeded}
                      onChange={(e) => setFormData({ ...formData, storageNeeded: e.target.checked })}
                      className="w-4 h-4 rounded text-[#5F7355] focus:ring-[#8C9B80]"
                    />
                    <span>Include Storage</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                  Additional Details / Heavy Items
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Piano, stairs only, fragile antiques, preferred time window..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-white rounded-lg border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                />
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="consent-check"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="w-4 h-4 rounded text-[#5F7355] focus:ring-[#8C9B80]"
                />
                <label htmlFor="consent-check" className="text-xs text-[#666666]">
                  I agree to be contacted by Affordable Moves regarding my moving quote. Privacy policy respected.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#5F7355] hover:bg-[#475841] text-white font-semibold font-poppins rounded-xl shadow-lg transition-all transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2 flex items-center justify-center space-x-2"
                >
                  <span>Submit for Free Instant Quote</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
