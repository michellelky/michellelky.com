import React from "react";

import HeroSection from "@/components/sections/hero-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import SideProjectSection from "@/components/sections/side-project-section";
import { getMarkdownList } from "@/helpers/file-helper";

export type ProjectMD = {
  slug: string;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  links?: {
    web?: string;
    apple?: string;
    google?: string;
  };
  builtAt: string;
  banner: string;
  thumbnail: string;
  order: number;
};

async function Home() {
  const projects = await getMarkdownList();

  const allProjects = projects.reduce(
    (
      acc: {
        work: ProjectMD[];
        side: ProjectMD[];
      },
      cur,
    ) => {
      acc[!!cur.builtAt ? "work" : "side"].push(cur);
      return acc;
    },
    { work: [], side: [] },
  );

  return (
    <>
      <HeroSection
        title="Hi. I'm Michelle."
        subtitle="I build stuff on web and mobile."
      />
      <ShowcaseSection data={allProjects.work} />
      <SideProjectSection title="Some fun stuff." data={allProjects.side} />
    </>
  );
}

export default Home;
