import React from "react";

import { ProjectMD } from "@/app/(main)/page";
import ProjectCard from "@/components/project-card";
import AnimateWrapper from "@/components/animation";
import styles from "./side-project.module.css";

interface Props {
  title: string;
  subtitle?: string;
  data: ProjectMD[];
}

export default function SideProjectSection({ title, subtitle, data }: Props) {
  return (
    <section className={styles.container}>
      <AnimateWrapper>
        <h2 className={styles.title}>{title}</h2>
        {!!subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </AnimateWrapper>

      <div className={styles.projectContainer}>
        {data.map((project) => (
          <AnimateWrapper key={project.slug}>
            <ProjectCard
              name={project.title}
              description={project.description}
              to={`/projects/${project.slug}`}
              thumbnail={project.thumbnail}
              size="lg"
            />
          </AnimateWrapper>
        ))}
      </div>
    </section>
  );
}
