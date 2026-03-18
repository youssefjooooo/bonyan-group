"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function AboutHero() {
  const t = useTranslations("AboutPage");

  return (
    <section className="relative py-20 bg-[#1b343b] overflow-hidden h-[50vh] flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] rounded-full bg-[#df352c]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#1b343b] to-transparent z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="About Bonyan Group"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6">
          {t("title")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-24 h-1 bg-[#df352c] mx-auto rounded-full"></motion.div>
      </div>
    </section>
  );
}
