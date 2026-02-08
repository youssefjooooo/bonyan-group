"use client";

import { notFound, useParams } from "next/navigation";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceDetails } from "@/components/services/ServiceDetails";

const serviceData = {
  steel: {
    image:
      "https://images.unsplash.com/photo-1624027492684-327af1fb7559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2NTY3MTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    names: {
      en: "Steel Supply",
      ar: "توريد الصلب",
    },
    types: {
      en: "Steel",
      ar: "الصلب",
    },
    useCase: {
      en: "construction and industrial fabrication",
      ar: "البناء والتصنيع الصناعي",
    },
  },
  lifting: {
    image:
      "https://images.unsplash.com/photo-1759390304567-c322de52f8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFuZSUyMGxpZnRpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY1OTAyNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    names: {
      en: "Lifting & Crane Solutions",
      ar: "حلول الرفع والرافعات",
    },
    types: {
      en: "Lifting",
      ar: "الرفع",
    },
    useCase: {
      en: "heavy material handling and safety",
      ar: "مناولة المواد الثقيلة والسلامة",
    },
  },
  copper: {
    image:
      "https://images.unsplash.com/photo-1602272429619-752db85d8db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjBtZXRhbCUyMHNoZWV0c3xlbnwxfHx8fDE3NjU5MDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    names: {
      en: "Copper Supply",
      ar: "توريد النحاس",
    },
    types: {
      en: "Copper",
      ar: "النحاس",
    },
    useCase: {
      en: "electrical and industrial components",
      ar: "المكونات الكهربائية والصناعية",
    },
  },
  paints: {
    image:
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGFpbnQlMjBjb2F0aW5nfGVufDF8fHx8fDE3NjU5MDI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    names: {
      en: "Industrial & Automotive Paints",
      ar: "الدهانات الصناعية والسيارات",
    },
    types: {
      en: "Paints",
      ar: "الدهانات",
    },
    useCase: {
      en: "surface protection and finishing",
      ar: "حماية الأسطح والتشطيب",
    },
  },
};

export default function ServicePage() {
  const { slug, locale } = useParams();

  const serviceKey = Array.isArray(slug) ? slug[0] : slug;
  const currentService = serviceData[serviceKey];

  if (!currentService) {
    if (serviceKey === "template" || serviceKey === "individual-service") {
    } else {
      notFound();
    }
  }

  const data = currentService || {
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    names: { en: "Individual Service", ar: "خدمة فردية" },
    types: { en: "Service", ar: "الخدمة" },
    useCase: { en: "industrial applications", ar: "التطبيقات الصناعية" },
  };

  const name = data.names[locale] || data.names.en;
  const type = data.types[locale] || data.types.en;

  return (
    <div className="bg-white">
      <ServiceHero data={data} type={type} name={name} />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start relative">
            <ServiceOverview name={name} data={data} locale={locale} />
            <ServiceDetails name={name} />
          </div>
        </div>
      </section>
    </div>
  );
}
