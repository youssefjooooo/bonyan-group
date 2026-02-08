"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function AboutMainContent() {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-[#1b343b] mb-6">
              {t("trustTitlePart1")}
              <span className="text-[#df352c]">{t("trustTitlePart2")}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t("description")}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t("description2")}
            </p>

            <div className="bg-slate-50 border-l-4 border-[#df352c] p-6 rounded-r-lg">
              <p className="text-[#1b343b] font-medium italic">
                "{t("whyQuote")}"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
                  alt="Construction Site"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800"
                  alt="Teamwork"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
                  alt="Steel Beams"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
