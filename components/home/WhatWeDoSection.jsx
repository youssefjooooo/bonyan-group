"use client";

import { ImageWithFallback } from "../common/ImageWithFallback";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cog,
  Zap,
  PaintBucket,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function WhatWeDoSection() {
  const t = useTranslations("WhatWeDo");

  const divisions = [
    {
      title: t("steel.title"),
      icon: Cog,
      description: t("steel.description"),
      link: "/services/steel",
      image:
        "/assets/services/irondep/pexels-michael-orshan-2159363670-36003992.jpg",
      items: [
        t("steel.item1"),
        t("steel.item2"),
        t("steel.item3"),
        t("steel.item4"),
      ],
      note: t("steel.note"),
    },
    {
      title: t("lifting.title"),
      icon: Zap,
      description: t("lifting.description"),
      link: "/services/lifting",
      image: "/assets/services/cranesdep/istockphoto-484014187-612x612.jpg",
      items: [
        t("lifting.item1"),
        t("lifting.item2"),
        t("lifting.item3"),
        t("lifting.item4"),
        t("lifting.item5"),
        t("lifting.item6"),
        t("lifting.item7"),
      ],
      note: t("lifting.note"),
    },
    {
      title: t("copper.title"),
      icon: ShieldCheck,
      description: t("copper.description"),
      link: "/services/copper",
      image: "/assets/services/copperdep/cover.jpg",
      items: [t("copper.item1"), t("copper.item2"), t("copper.item3")],
      note: t("copper.note"),
    },
    {
      title: t("paints.title"),
      icon: PaintBucket,
      description: t("paints.description"),
      link: "/services/paints",
      image: "/assets/services/paintdep/paint.png",
      items: [
        t("paints.item1"),
        t("paints.item2"),
        t("paints.item3"),
        t("paints.item4"),
      ],
      note: t("paints.note"),
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-[#df352c]/10 text-[#df352c] font-medium rounded-full mb-4 border border-[#df352c]/20">
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1b343b] mb-6">
            {t("title")}{" "}
            <span className="text-[#df352c]">{t("titleHighlight")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </motion.p>
        </div>

        {/* Divisions */}
        <div className="space-y-24">
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
              {/* Image */}
              <div className="w-full md:w-1/2 group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Decorative frame */}
                  <div
                    className={`absolute -inset-4 border-2 border-[#df352c]/20 rounded-2xl z-0 transform transition-transform duration-500 ${index % 2 === 0 ? "-translate-x-4 translate-y-4 rtl:translate-x-4" : "translate-x-4 translate-y-4 rtl:-translate-x-4"} group-hover:translate-x-0 group-hover:translate-y-0`}></div>

                  <div className="relative z-10 overflow-hidden h-[400px] md:h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b343b]/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <ImageWithFallback
                      src={division.image}
                      alt={division.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Icon Overlay */}
                    <div className="absolute bottom-6 left-6 rtl:left-auto rtl:right-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <division.icon className="w-8 h-8 text-[#df352c]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#1b343b] mb-4 flex items-center gap-3">
                    {division.title}
                  </h3>
                  <div className="w-20 h-1 bg-[#df352c] rounded-full mb-6"></div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {division.description}
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-semibold text-[#1b343b] mb-4 text-sm uppercase tracking-wide">
                    {t("keyProducts")}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                    {division.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#df352c] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-slate-200 pt-6">
                  <p className="text-[#1b343b] italic text-sm font-medium">
                    "{division.note}"
                  </p>
                  <Link
                    href={division.link}
                    className="flex items-center gap-2 text-[#df352c] font-bold hover:gap-3 transition-all group">
                    {t("learnMore")}{" "}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
