"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");

  const contactInfo = [
    {
      icon: MapPin,
      title: t("info.visitUs"),
      details: [t("info.address")],
    },
    {
      icon: Phone,
      title: t("info.callUs"),
      details: [t("info.phone")],
    },
    {
      icon: Mail,
      title: t("info.emailUs"),
      details: [t("info.email")],
    },
    {
      icon: Clock,
      title: t("info.workingHours"),
      details: [t("info.hours1"), t("info.hours2")],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#df352c]/10 text-[#df352c] rounded mb-4">
            {t("badge")}
          </div>
          <h2 className="text-4xl text-[#1b343b] mb-4">{t("title")}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-slate-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-700 mb-2">
                    {t("form.fullName")} {t("form.required")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df352c]"
                    placeholder={t("form.fullName")}
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df352c]"
                    placeholder={t("form.company")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-700 mb-2">
                    {t("form.email")} {t("form.required")}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df352c]"
                    placeholder={t("form.email")}
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-2">
                    {t("form.phone")} {t("form.required")}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df352c]"
                    placeholder="+20 XXX XXX XXXX"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-slate-700 mb-2">
                  {t("form.division")}
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df352c]">
                  <option>{t("form.selectDivision")}</option>
                  <option>{t("form.steel")}</option>
                  <option>{t("form.lifting")}</option>
                  <option>{t("form.copper")}</option>
                  <option>{t("form.paints")}</option>
                  <option>{t("form.multiple")}</option>
                  <option>{t("form.other")}</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-slate-700 mb-2">
                  {t("form.message")} {t("form.required")}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df352c]"
                  placeholder={t("form.messagePlaceholder")}></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#df352c] text-white px-8 py-3 rounded-lg hover:bg-[#c52e25] transition-colors">
                {t("form.submit")}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#df352c] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#1b343b] mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
