"use client";

import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const quickLinks = [
    { name: t("home"), href: "#home" },
    { name: t("whoWeAre"), href: "#about" },
    { name: t("whatWeDo"), href: "#products" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1b343b] to-[#0f2329] text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#df352c] via-[#df352c] to-[#1b343b]"></div>

      {/* Background pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold mb-4">
              <span className="text-[#df352c]">BONYAN</span> GROUP
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              {t("companyInfo")}
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#df352c] hover:border-[#df352c] hover:-translate-y-1 transition-all duration-300 group">
                  <Icon className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-[#df352c] pl-3 rtl:border-r-4 rtl:border-l-0 rtl:pr-3 rtl:pl-0">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-[#df352c] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#df352c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-[#df352c] pl-3 rtl:border-r-4 rtl:border-l-0 rtl:pr-3 rtl:pl-0">
              {t("getInTouch")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#df352c] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  123 Industrial Zone, 6th of October City,
                  <br />
                  Giza, Egypt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#df352c] flex-shrink-0" />
                <a
                  href="tel:+201097536662"
                  className="text-slate-300 hover:text-white transition-colors text-sm">
                  +20 109 753 6662
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#df352c] flex-shrink-0" />
                <a
                  href="mailto:info@bonyangroup.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm">
                  info@bonyangroup.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-[#df352c] pl-3 rtl:border-r-4 rtl:border-l-0 rtl:pr-3 rtl:pl-0">
              {t("newsletter")}
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              {t("newsletterDescription")}
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="w-full pl-4 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#df352c] focus:ring-1 focus:ring-[#df352c] text-white text-sm placeholder:text-slate-500 transition-all rtl:pr-4 rtl:pl-12"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-[#df352c] w-10 flex items-center justify-center rounded hover:bg-[#c52e25] transition-colors group rtl:right-auto rtl:left-1">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 rtl:rotate-180 transition-transform" />
                </button>
              </div>
              <p className="text-xs text-slate-500">{t("privacyNote")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">{t("copyright")}</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("termsOfService")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("sitemap")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
