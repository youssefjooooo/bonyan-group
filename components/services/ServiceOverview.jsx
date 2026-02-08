"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Factory, CheckCircle2 } from "lucide-react";

export function ServiceOverview({ name, data, locale }) {
  const t = useTranslations("ServicePage");

  return (
    <div className="space-y-12 md:sticky md:top-24 md:z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold text-[#1b343b] mb-6">
          {t("overviewTitle")}
        </h2>
        <div className="prose prose-lg text-slate-600">
          <p className="mb-4">{t("description", { serviceName: name })}</p>
          <p>
            {t("overviewText", { serviceName: name }).replace(
              "[primary use case]",
              data.useCase[locale] || data.useCase.en,
            )}
          </p>
        </div>

        <div className="mt-8 border-l-4 border-[#df352c] pl-6 py-2 bg-slate-50 rounded-r-xl">
          <p className="text-[#1b343b] text-xl font-medium italic">
            "{t("overviewQuote")}"
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#df352c]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

        <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
          <Factory className="w-6 h-6 text-[#df352c]" />
          {t("provideTitle")}
        </h3>

        <div className="space-y-4 relative z-10">
          <p className="text-slate-300 mb-4">{t("provideDesc")}</p>
          <ul className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#df352c] mt-1 flex-shrink-0" />
                <span>{t("provideNote")}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
