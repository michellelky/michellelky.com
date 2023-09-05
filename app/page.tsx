import React from "react";
import HeroSection from "@/components/sections/hero-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import SideProjectSection from "@/components/sections/side-project-section";
import { getMarkdownList } from "@/helpers/file-helper";

async function Home() {
  const projects = await getMarkdownList();

  return (
    <>
      <HeroSection
        title="Hi. I'm Michelle."
        subtitle="I build stuff on web and mobile."
      />
      <ShowcaseSection data={projects} />
      <SideProjectSection title="Some fun stuff." />
    </>
  );
}

export default Home;
