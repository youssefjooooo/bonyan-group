"use client";

import { Building2, Factory, Warehouse, Car, Zap, Boxes } from "lucide-react";
import { useTranslations } from "next-intl";

export function Industries() {
  const t = useTranslations("Industries");

  const industries = [
    {
      icon: Building2,
      title: t("construction.title"),
      description: t("construction.description"),
    },
    {
      icon: Factory,
      title: t("manufacturing.title"),
      description: t("manufacturing.description"),
    },
    {
      icon: Warehouse,
      title: t("warehousing.title"),
      description: t("warehousing.description"),
    },
    {
      icon: Car,
      title: t("automotive.title"),
      description: t("automotive.description"),
    },
    {
      icon: Zap,
      title: t("energy.title"),
      description: t("energy.description"),
    },
    {
      icon: Boxes,
      title: t("general.title"),
      description: t("general.description"),
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#df352c]/10 text-[#df352c] rounded mb-4">
            {t("badge")}
          </div>
          <h2 className="text-4xl text-[#1b343b] mb-4">{t("title")}</h2>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#df352c] rounded-lg flex items-center justify-center mb-4">
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-[#1b343b] mb-2">{industry.title}</h3>
              <p className="text-slate-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
