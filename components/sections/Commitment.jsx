"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function Commitment() {
  const t = useTranslations("Commitment");

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdvcmtlcnN8ZW58MXx8fHwxNzY1OTAzMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial Background"
          className="w-full h-full object-cover fixed-bg"
        />
        {/* Improved Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b343b] via-[#1b343b]/95 to-[#0f1f23]/90"></div>

        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #df352c 25%, transparent 25%, transparent 50%, #df352c 50%, #df352c 75%, transparent 75%, transparent)",
            backgroundSize: "60px 60px",
          }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <Quote className="w-12 h-12 text-[#df352c] mx-auto mb-8 opacity-80" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
          <span className="text-[#df352c] font-bold tracking-wider uppercase text-sm">
            {t("badge")}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          {t("title")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df352c] to-orange-500">
            {t("titleHighlight")}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          "{t("quote")}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto mb-12">
          <p className="text-2xl font-bold text-white">
            {t("goal")} <br />
            <span className="text-[#df352c]">{t("goalHighlight")}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#df352c] text-white px-10 py-4 rounded-lg hover:bg-[#c52e25] transition-all hover:shadow-lg hover:shadow-[#df352c]/20 hover:-translate-y-1 font-bold text-lg">
            {t("getInTouch")}
          </a>
          <a
            href="#contact"
            className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-[#1b343b] transition-all font-bold text-lg">
            {t("requestQuote")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
