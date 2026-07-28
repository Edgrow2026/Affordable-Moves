/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CostEstimator } from "./components/CostEstimator";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { ServiceAreas } from "./components/ServiceAreas";
import { Timeline } from "./components/Timeline";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { TrustCertifications } from "./components/TrustCertifications";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { CTABanner } from "./components/CTABanner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { CookieConsent } from './components/CookieConsent';
import { QuoteModal } from "./components/QuoteModal";
import { Toast } from "./components/Toast";
import { ToastMessage, QuoteFormData, MoveEstimate } from "./types";

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<
    Partial<QuoteFormData>
  >({});
  const [activeSection, setActiveSection] = useState("hero");
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Active section observer for smooth header navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "estimator",
        "why-us",
        "services",
        "coverage",
        "process",
        "gallery",
        "reviews",
        "faq",
        "blog",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (
    title: string,
    message: string,
    type: "success" | "info" | "warning" = "success",
  ) => {
    setToast({
      id: Date.now().toString(),
      title,
      message,
      type,
    });
  };

  const handleOpenQuoteModal = () => {
    setQuoteInitialData({});
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithData = (data: {
    pickupPostcode?: string;
    deliveryPostcode?: string;
    moveType?: string;
    moveDate?: string;
  }) => {
    setQuoteInitialData({
      pickupPostcode: data.pickupPostcode || "",
      deliveryPostcode: data.deliveryPostcode || "",
      propertySize: data.moveType || "2-bed-house",
      moveDate: data.moveDate || "",
    });
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithService = (serviceName: string) => {
    setQuoteInitialData({
      notes: `Inquiry for ${serviceName} service.`,
    });
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithLocation = (location: string) => {
    setQuoteInitialData({
      pickupPostcode: location,
      notes: `Move requested in ${location} coverage area.`,
    });
    setIsQuoteModalOpen(true);
  };

  const handleLockInEstimate = (estimate: MoveEstimate) => {
    setQuoteInitialData({
      pickupPostcode: estimate.pickupPostcode,
      deliveryPostcode: estimate.deliveryPostcode,
      propertySize: estimate.propertyType,
      packingNeeded: estimate.services.packing,
      storageNeeded: estimate.services.storage,
      notes: `Calculated Estimate: £${estimate.estimatedMin} - £${estimate.estimatedMax} (${estimate.distanceMiles} miles, ${estimate.floorAccess} access).`,
    });

    triggerToast(
      "Estimate Locked In!",
      `Budget range £${estimate.estimatedMin} - £${estimate.estimatedMax} saved. Please complete your contact details below to confirm availability.`,
      "info",
    );

    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] font-inter text-[#2F2F2F] flex flex-col">
      {/* Header Navigation */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModalWithData={handleOpenQuoteWithData}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* About Section */}
        <About onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Moving Cost Estimator */}
        <CostEstimator onLockInEstimate={handleLockInEstimate} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Services Breakdown */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Coverage Areas & Interactive Postcode Lookup */}
        <ServiceAreas onOpenQuoteWithLocation={handleOpenQuoteWithLocation} />

        {/* Process Timeline */}
        <Timeline onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Gallery */}
        <Gallery />

        {/* Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Trust & Certifications */}
        <TrustCertifications />

        {/* FAQ Section */}
        <FAQ onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Blog & Resources */}
        <Blog />

        {/* High Impact CTA Banner */}
        <CTABanner onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Contact Form & HQ Info */}
        <Contact
          onSuccess={(msg) => triggerToast("Message Sent!", msg, "success")}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Cookie Consent Banner
      <CookieConsent /> */}

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={quoteInitialData}
        onSuccess={(msg) =>
          triggerToast("Quote Request Received!", msg, "success")
        }
      />

      {/* Toast Notification Handler */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
