import { HeroSection } from "../../components/home/HeroSection";
import { AboutSection } from "../../components/home/AboutSection";
import { WhatWeDoSection } from "../../components/home/WhatWeDoSection";
import { IndustriesSection } from "../../components/home/IndustriesSection";
import { CommitmentSection } from "../../components/home/CommitmentSection";
// import { Contact } from "../../components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <IndustriesSection />
      <CommitmentSection />
      {/* <Contact /> */}
    </>
  );
}
