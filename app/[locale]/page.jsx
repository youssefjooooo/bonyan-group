import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import { WhatWeDo } from "../../components/sections/WhatWeDo";
import { Industries } from "../../components/sections/Industries";
import { Commitment } from "../../components/sections/Commitment";
import { Contact } from "../../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Industries />
      <Commitment />
      {/* <Contact /> */}
    </>
  );
}
