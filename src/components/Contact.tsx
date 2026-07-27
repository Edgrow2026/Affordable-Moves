import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onSuccess: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    pickupPostcode: '',
    deliveryPostcode: '',
    serviceType: 'Full House Removal',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Thank you ${formData.name}! Your message has been sent to our UK removals dispatch desk.`);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveDate: '',
        pickupPostcode: '',
        deliveryPostcode: '',
        serviceType: 'Full House Removal',
        message: '',
        consent: true,
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F4] border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Contact Our Removals Desk
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Have a question, need a custom commercial quote, or want to discuss your key handover schedule? Our team is standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & HQ Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6DAC4] shadow-xs space-y-6">
              <h3 className="text-xl font-bold font-poppins text-[#475841]">Head Office & Dispatch</h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6DAC4]/60 text-[#B29A70] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#B29A70]" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-[#475841]">UK Headquarters</h4>
                    <p className="text-[#666666]">124 High Street, Kensington, London W8 4SG</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6DAC4]/60 text-[#B29A70] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#B29A70]" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-[#475841]">Phone Hotline</h4>
                    <p className="text-[#666666]">Freephone: 0800 123 4567</p>
                    <p className="text-[#666666]">Local Desk: 020 7946 0912</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6DAC4]/60 text-[#B29A70] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#B29A70]" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-[#475841]">Email Inquiries</h4>
                    <p className="text-[#666666]">quotes@affordablemoves.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E6DAC4]/60 text-[#B29A70] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#B29A70]" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-[#475841]">Working Hours</h4>
                    <p className="text-[#666666]">Monday – Sunday: 8:00am – 8:00pm</p>
                    <p className="text-[#666666]">Emergency Moves: 24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="bg-[#E6DAC4] rounded-2xl p-6 border border-[#B29A70]/40 text-center relative overflow-hidden space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#475841] text-white flex items-center justify-center mx-auto shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold font-poppins text-[#475841]">Nationwide Fleet Coverage</h4>
              <p className="text-xs text-[#2F2F2F] max-w-xs mx-auto">
                Vehicles stationed in London, Manchester, Birmingham, Bristol, Leeds, and Edinburgh for rapid local dispatch.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E6DAC4] shadow-xl">
            <h3 className="text-xl font-bold font-poppins text-[#475841] mb-1">Send Us a Direct Message</h3>
            <p className="text-xs text-[#666666] mb-6">Fill out the form below and an advisor will respond within 15 minutes.</p>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4]">
                <CheckCircle2 className="w-12 h-12 text-[#5F7355] mx-auto" />
                <h4 className="text-lg font-bold text-[#475841]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#666666]">We have received your message and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07700 900123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    >
                      <option value="Full House Removal">Full House Removal</option>
                      <option value="Man & Van">Man & Van Transport</option>
                      <option value="Office Relocation">Office / Commercial Move</option>
                      <option value="Packing Service">Packing & Box Supply</option>
                      <option value="Storage">Short / Long Term Storage</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                      Pickup Postcode
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SW1A 1AA"
                      value={formData.pickupPostcode}
                      onChange={(e) => setFormData({ ...formData, pickupPostcode: e.target.value.toUpperCase() })}
                      className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                      Delivery Postcode
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. M1 1AE"
                      value={formData.deliveryPostcode}
                      onChange={(e) => setFormData({ ...formData, deliveryPostcode: e.target.value.toUpperCase() })}
                      className="w-full p-2.5 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475841] uppercase tracking-wider mb-1">
                    Your Message / Move Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your property size, preferred move dates, or special items (pianos, artwork)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F4] rounded-xl border border-[#E6DAC4] text-[#2F2F2F] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C9B80]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 rounded text-[#5F7355] focus:ring-[#8C9B80]"
                  />
                  <label htmlFor="contact-consent" className="text-xs text-[#666666]">
                    I agree to be contacted regarding my quote inquiry. No spam guaranteed.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#5F7355] hover:bg-[#475841] text-white font-bold font-poppins text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-[#CDBA96]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
