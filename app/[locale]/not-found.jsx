"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "motion/react";
import { Home } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <>
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 relative overflow-hidden py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#df352c]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#1b343b]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-bold text-[#df352c]/10 mb-4">
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[#1b343b] mb-6">
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 mb-10 max-w-md mx-auto">
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#df352c] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#c52e25] transition-all transform hover:scale-105 shadow-md">
              <Home className="w-5 h-5" />
              {t("backHome")}
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
