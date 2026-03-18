"use client";

import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function HeroSection() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isEnglish = locale === "en";
  return (
    <section
      id="home"
      className="relative h-[700px] md:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full">
          <ImageWithFallback
            src="/assets/services/irondep/steel 1.png"
            alt="Steel Production Facility"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b343b]/95 via-[#1b343b]/80 to-transparent z-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-white pt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#df352c]"></span>
            <span className="text-sm font-medium tracking-wide uppercase">
              Bonyan Group
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            {t("title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t("subtitle")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-slate-200 mb-8 max-w-2xl leading-relaxed">
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* <Link
              href="/contact"
              className="group bg-[#df352c] text-white px-8 py-4 rounded-lg hover:bg-[#c52e25] transition-all hover:shadow-[0_0_20px_rgba(223,53,44,0.3)] flex items-center gap-2 font-bold">
              {t("cta")}{" "}
              <ChevronRight
                className={` ${!isEnglish && "rotate-180"} w-5 h-5 group-hover:translate-x-1 transition-transform`}
              />
            </Link> */}
            <div className="text-lg font-medium border-l-2 border-white/30 pl-4 ml-2 rtl:border-r-2 rtl:border-l-0 rtl:pr-4 rtl:pl-0 rtl:mr-2 rtl:ml-0">
              <span className="block text-sm text-slate-300 mb-1">
                {t("trusted")}
              </span>
              <span className="text-lg text-[#df352c] italic">
                {t("tagline")}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
