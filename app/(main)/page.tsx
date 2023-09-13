import React from "react";
import HeroSection from "@/components/sections/hero-section";
import ShowcaseSection from "@/components/sections/showcase-section";
import SideProjectSection from "@/components/sections/side-project-section";
import { getMarkdownList } from "@/helpers/file-helper";

export type ProjectMD = {
  slug: string;
  title: string;
  desc: string;
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
  const projects: ProjectMD[] = await getMarkdownList();
  const workProjects = projects.filter((project) => !!project.builtAt);
  const sideProjects = projects.filter((project) => !project.builtAt);

  return (
    <>
      <HeroSection
        title="Hi. I'm Michelle."
        subtitle="I build stuff on web and mobile."
      />
      <ShowcaseSection data={workProjects} />
      <SideProjectSection title="Some fun stuff." data={sideProjects} />
    </>
  );
}

export default Home;
