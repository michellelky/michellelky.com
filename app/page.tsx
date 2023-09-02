import React from "react";
import HeroSection from "@/components/sections/hero-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import SideProjectSection from "@/components/sections/side-project-section";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Hi. I'm Michelle."
        subtitle="I build stuff on web and mobile."
      />
      <ShowcaseSection />
      <SideProjectSection title="Some fun stuff." />
    </>
  );
}
