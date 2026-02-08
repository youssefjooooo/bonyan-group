"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ShieldCheck, Target, Award } from "lucide-react";

export function AboutValues() {
  const t = useTranslations("AboutPage");

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1b343b] mb-4">
            {t("whyTitle")}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{t("whyText")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#df352c]" />
            </div>
            <h3 className="text-xl font-bold text-[#1b343b] mb-4">
              {t("approachTitle")}
            </h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              {t("approachText")}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t("approachText2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#df352c]">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#df352c]" />
            </div>
            <h3 className="text-xl font-bold text-[#1b343b] mb-4">
              {t("missionTitle")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t("missionText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-[#df352c]" />
            </div>
            <h3 className="text-xl font-bold text-[#1b343b] mb-4">
              {t("visionTitle")}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t("visionText")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
