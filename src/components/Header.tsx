import { useEffect, useState, type FC, type MouseEvent } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

interface HeaderProps {
  onOpenQuoteModal: () => void;
  activeSection: string;
}

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Estimator", href: "#estimator" },
  { name: "Why Us", href: "#why-us" },
  { name: "Services", href: "#services" },
  { name: "Coverage", href: "#coverage" },
  { name: "Process", href: "#process" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const Header: FC<HeaderProps> = ({
  onOpenQuoteModal,
  activeSection,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector<HTMLElement>(href);

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Top information bar */}
      <div className="border-b border-[#5F7355] bg-[#475841] px-4 py-2 text-xs text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 sm:flex-row">
          <div className="flex items-center space-x-6 text-[#E6DAC4]">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck
                className="h-3.5 w-3.5 text-[#CDBA96]"
                aria-hidden="true"
              />
              <span>BAR-Compliant UK Removals</span>
            </span>

            <span className="hidden items-center space-x-1.5 md:flex">
              <Clock
                className="h-3.5 w-3.5 text-[#CDBA96]"
                aria-hidden="true"
              />
              <span>Mon - Sun: 8:00am - 8:00pm</span>
            </span>

            <span className="hidden items-center space-x-1.5 lg:flex">
              <MapPin
                className="h-3.5 w-3.5 text-[#CDBA96]"
                aria-hidden="true"
              />
              <span>Nationwide Coverage Across the UK</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden font-medium text-[#CDBA96] sm:inline">
              Free Quote &amp; Advice:
            </span>

            <a
              href="tel:08001234567"
              className="flex items-center space-x-1.5 font-semibold text-white transition-colors hover:text-[#CDBA96]"
              aria-label="Call Affordable Moves on 0800 123 4567"
            >
              <Phone
                className="h-3.5 w-3.5 text-[#CDBA96]"
                aria-hidden="true"
              />
              <span>0800 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          isScrolled
            ? "border-[#E6DAC4] bg-[#FAF8F4]/95 py-3 shadow-md backdrop-blur-md"
            : "border-[#E6DAC4]/60 bg-[#FAF8F4] py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => handleNavClick(event, "#hero")}
            className="group flex items-center space-x-2 rounded-lg p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2"
            aria-label="Affordable Moves home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#475841] text-[#CDBA96] shadow-md transition-colors group-hover:bg-[#5F7355]">
              <Truck className="h-6 w-6" aria-hidden="true" />
            </div>

            <div>
              <span className="block font-poppins text-2xl font-bold leading-none tracking-tight text-[#475841]">
                Affordable
                <span className="ml-1 font-normal text-[#8C9B80]">Moves</span>
              </span>

              <span className="text-[10px] font-medium uppercase tracking-wider text-[#666666]">
                UK Removal Specialists
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center space-x-6 xl:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => handleNavClick(event, link.href)}
                  className={`relative px-1 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "font-semibold text-[#5F7355]"
                      : "text-[#2F2F2F] hover:text-[#5F7355]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#CDBA96]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center space-x-4 sm:flex">
            <a
              href="tel:08001234567"
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#475841] transition-colors hover:bg-[#E6DAC4]/40 hover:text-[#5F7355]"
              aria-label="Call 0800 123 4567"
            >
              <Phone className="h-4 w-4 text-[#5F7355]" aria-hidden="true" />
              <span className="whitespace-nowrap">0800 123 4567</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="group relative overflow-hidden rounded-xl bg-[#5F7355] px-5 py-2.5 font-poppins text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#475841] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] focus-visible:ring-offset-2"
            >
              <span className="relative z-10 whitespace-nowrap">
                Get a Quote
              </span>

              <span
                className="absolute inset-0 h-full w-1/2 -skew-x-12 animate-shine bg-gradient-to-r from-transparent via-[#CDBA96]/30 to-transparent"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current: boolean) => !current)}
            className="rounded-xl p-2 text-[#475841] hover:bg-[#E6DAC4]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDBA96] xl:hidden"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm xl:hidden"
              aria-label="Close navigation menu"
            />

            <motion.aside
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed bottom-0 right-0 top-0 z-[60] flex w-80 max-w-[85vw] flex-col justify-between overflow-y-auto border-l border-[#E6DAC4] bg-[#FAF8F4] p-6 shadow-2xl xl:hidden"
              aria-label="Mobile navigation"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E6DAC4] pb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#475841] text-[#CDBA96]">
                      <Truck className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <span className="font-poppins text-lg font-bold text-[#475841]">
                      Affordable
                      <span className="text-[#8C9B80]">Moves</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg p-2 text-[#475841] hover:bg-[#E6DAC4]/50"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <nav className="mt-6 space-y-1">
                  {navLinks.map((link) => {
                    const sectionId = link.href.slice(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(event: MouseEvent<HTMLAnchorElement>) => handleNavClick(event, link.href)}
                        className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#E6DAC4] font-semibold text-[#475841]"
                            : "text-[#2F2F2F] hover:bg-[#E6DAC4]/40 hover:text-[#5F7355]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-3 border-t border-[#E6DAC4] pt-6">
                <a
                  href="tel:08001234567"
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#E6DAC4]/60 py-3 text-sm font-semibold text-[#475841]"
                >
                  <Phone
                    className="h-4 w-4 text-[#5F7355]"
                    aria-hidden="true"
                  />
                  <span>Call 0800 123 4567</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full rounded-xl bg-moss py-3.5 font-poppins text-sm font-semibold text-white shadow-md transition-colors hover:bg-moss-dark"
                >
                  Get a Free Quote
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
