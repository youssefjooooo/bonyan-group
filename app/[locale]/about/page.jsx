"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutMainContent } from "@/components/about/AboutMainContent";
import { AboutValues } from "@/components/about/AboutValues";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutMainContent />
      <AboutValues />
    </div>
  );
}
