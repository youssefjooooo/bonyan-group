"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function ServiceImageCarousel({ images, name }) {
  const t = useTranslations("ServicePage");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-[#df352c]/10 text-[#df352c] font-medium rounded-full mb-4 border border-[#df352c]/20">
            {t("galleryBadge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b343b]">
            {t("galleryTitle")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative  w-full flex">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, direction: dir }}
            className="w-full "
            dir={dir}>
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-slate-200">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#1b343b]/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={src}
                      alt={`${name} - ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Slide number badge */}
                    <div className="absolute top-3 start-3 z-20 bg-white/90 backdrop-blur-sm text-[#1b343b] text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index + 1} / {images.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="border-[#1b343b] text-[#1b343b] hover:bg-[#1b343b] hover:text-white transition-colors active:transform-none" />
            <CarouselNext className="border-[#1b343b] text-[#1b343b] hover:bg-[#1b343b] hover:text-white transition-colors " /> */}
          </Carousel>
        </motion.div>

        {/* Decorative bottom line */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-6 bg-[#df352c]"
                  : "w-2 bg-[#df352c]/30 hover:bg-[#df352c]/50 cursor-pointer"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
