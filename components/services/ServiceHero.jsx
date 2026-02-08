"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function ServiceHero({ data, type, name }) {
  const t = useTranslations("ServicePage");

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b343b]/90 to-[#1b343b]/70 z-10"></div>
        <ImageWithFallback
          src={data.image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1 border border-white/30 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <span className="text-sm font-medium tracking-wider uppercase">
            {type}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6">
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
          {t("subtitle", { serviceType: type })}
        </motion.p>
      </div>
    </section>
  );
}
