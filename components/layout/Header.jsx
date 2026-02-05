"use client";

import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("whoWeAre"), href: "#about" },
    { name: t("whatWeDo"), href: "#products" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0f1f23] text-slate-300 py-2.5 text-xs sm:text-sm border-b border-white/10 relative z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a
                href="tel:+201097536662"
                className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="p-1 rounded-full bg-[#df352c]/10 group-hover:bg-[#df352c] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#df352c] group-hover:text-white transition-colors" />
                </div>
                <span>+20 109 753 6662</span>
              </a>
              <a
                href="mailto:info@bonyangroup.com"
                className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="p-1 rounded-full bg-[#df352c]/10 group-hover:bg-[#df352c] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#df352c] group-hover:text-white transition-colors" />
                </div>
                <span>info@bonyangroup.com</span>
              </a>
            </div>
            <LanguageSwitcher className="hidden md:flex" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center gap-2">
                <div
                  className={`font-bold text-[#1b343b] transition-all duration-300 ${
                    scrolled ? "text-2xl" : "text-3xl"
                  }`}>
                  <span className="text-[#df352c]">BONYAN</span> GROUP
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[#1b343b] font-medium hover:text-[#df352c] transition-colors group py-2">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#df352c] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="group relative overflow-hidden bg-[#1b343b] text-white px-6 py-2.5 rounded hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 w-0 bg-[#df352c] transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
                <span className="relative flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  {t("getQuote")} <ChevronRight className="w-4 h-4" />
                </span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1b343b] p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] shadow-2xl md:hidden">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <span className="text-lg font-bold text-[#1b343b]">
                    {t("menu")}
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-500 hover:text-[#df352c] hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="block text-lg font-medium text-slate-600 hover:text-[#1b343b] hover:bg-slate-50 px-4 py-3 rounded-lg transition-colors border-l-4 border-transparent hover:border-[#df352c]">
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="p-6 border-t border-slate-100 bg-slate-50">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-[#df352c] text-white px-6 py-4 rounded-lg hover:bg-[#c52e25] transition-colors font-bold shadow-md hover:shadow-lg transform active:scale-95">
                    {t("getQuoteNow")}
                  </a>

                  <div className="mt-6 flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
