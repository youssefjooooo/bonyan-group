"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export function ContactInfo() {
  const t = useTranslations("ContactPage");
  const tInfo = useTranslations("Contact.info");

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-12">
      <div>
        <h3 className="text-2xl font-bold text-[#1b343b] mb-4">
          {t("getInTouch")}
        </h3>
        <p className="text-slate-600 mb-8">{t("getInTouchDesc")}</p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#df352c]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1b343b]">
                {tInfo("callUs")}
              </h4>
              <p className="text-slate-600 font-medium mt-1" dir="ltr">
                {tInfo("phone")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#df352c]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1b343b]">
                {tInfo("emailUs")}
              </h4>
              <p className="text-slate-600 mt-1">{tInfo("email")}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#df352c]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1b343b]">
                {tInfo("visitUs")}
              </h4>
              <p className="text-slate-600 mt-1">{tInfo("address")}</p>
              <p className="text-slate-500 text-sm mt-1">{t("locationText")}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#df352c]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#df352c]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1b343b]">
                {tInfo("workingHours")}
              </h4>
              <p className="text-slate-600 mt-1">{tInfo("hours1")}</p>
              <p className="text-slate-600 text-sm">{tInfo("hours2")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <h3 className="text-xl font-bold text-[#1b343b] mb-4">
          {t("businessTitle")}
        </h3>
        <p className="text-slate-600 mb-6">{t("businessText")}</p>
        <div className="flex items-center gap-3 text-[#df352c] font-medium bg-white p-4 rounded-xl shadow-sm">
          <MessageSquare className="w-5 h-5" />
          <p>"{t("businessQuote")}"</p>
        </div>
      </div>
    </motion.div>
  );
}
