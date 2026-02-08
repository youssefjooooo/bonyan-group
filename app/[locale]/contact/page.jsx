"use client";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
