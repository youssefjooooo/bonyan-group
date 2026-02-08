"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export function ContactCTA() {
  const t = useTranslations("ContactPage");
  const tInfo = useTranslations("Contact.info");

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[#1b343b]/80 z-10 flex flex-col justify-center p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-6">{t("workTogetherTitle")}</h3>
        <p className="text-lg text-slate-200 mb-8 leading-relaxed">
          {t("workTogetherText")}
        </p>
        <div className="w-20 h-1 bg-[#df352c] mx-auto rounded-full mb-8"></div>
        <h4 className="text-2xl font-bold text-white">{t("cta")}</h4>
        <div className="mt-12">
          <a
            href={`mailto:${tInfo("email")}`}
            className="inline-block bg-[#df352c] hover:bg-[#c93028] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            {t("contactToday")}
          </a>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
        alt="Industrial Handshake"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </motion.div>
  );
}
