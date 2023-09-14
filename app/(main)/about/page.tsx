import React from "react";

import AboutSection from "@/components/sections/about-section";
import AnimateWrapper from "@/components/animation";

export default function About() {
  return (
    <div className="full-page">
      <AnimateWrapper>
        <AboutSection />
      </AnimateWrapper>
    </div>
  );
}
