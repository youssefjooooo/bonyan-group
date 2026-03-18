"use client";

import { useTranslations } from "next-intl";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function AboutSection() {
  const t = useTranslations("About");

  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-[#df352c]/10 text-[#df352c] rounded mb-4">
              {t("badge")}
            </div>
            <h2 className="text-4xl text-[#1b343b] mb-6">{t("title")}</h2>
            <p className="text-slate-600 mb-6">{t("description1")}</p>
            <p className="text-slate-600 mb-8">{t("description2")}</p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-[#1b343b] mb-4">{t("whyChoose")}</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#df352c] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#1b343b] mt-6 italic">{t("quote")}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/assets/services/irondep/pexels-rolledalloys-metal-supply-8972008.jpg"
                alt="Construction Projects"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
