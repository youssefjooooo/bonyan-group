"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Hammer, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export function ServiceDetails({ name }) {
  const t = useTranslations("ServicePage");

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
        <h3 className="text-2xl font-bold text-[#1b343b] mb-8 flex items-center gap-3">
          <Hammer className="w-6 h-6 text-[#df352c]" />
          {t("processTitle")}
        </h3>

        <div className="space-y-6">
          {[
            t("processStep1"),
            t("processStep2"),
            t("processStep3"),
            t("processStep4"),
          ].map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#1b343b] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <p className="text-slate-700 font-medium">{step}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500 italic border-t border-slate-200 pt-4">
          {t("processOutro")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}>
        <h3 className="text-2xl font-bold text-[#1b343b] mb-6">
          {t("whyTitle")}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {t("whyText", { serviceName: name })}
        </p>
        <p className="text-[#1b343b] font-medium border-l-2 border-[#df352c] pl-4">
          {t("whyQuote")}
        </p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gradient-to-r from-[#df352c] to-[#c93028] rounded-2xl p-8 text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-3">{t("getQuoteTitle")}</h3>
        <p className="text-white/90 mb-6">
          {t("getQuoteText", { serviceName: name })}
        </p>
        <Link
          href="/contact"
          className="w-full bg-white text-[#df352c] px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-slate-100 transition-colors justify-center">
          {t("getQuoteTitle")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </Link>
      </motion.div>
    </div>
  );
}
