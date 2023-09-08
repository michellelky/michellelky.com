import React from "react";

import ProjectCard from "@/components/project-card";
import { ProjectMD } from "@/app/page";
import styles from "./side-project.module.css";

interface Props {
  title: string;
  subtitle?: string;
  data: ProjectMD[];
}

export default function SideProjectSection({ title, subtitle, data }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {!!subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <div className={styles.projectContainer}>
        {data.map((project) => (
          <ProjectCard
            key={project.slug}
            name={project.title}
            description={project.desc}
            to={`/project/${project.slug}`}
            thumbnail={project.thumbnail}
            size="lg"
          />
        ))}
      </div>
    </section>
  );
}
