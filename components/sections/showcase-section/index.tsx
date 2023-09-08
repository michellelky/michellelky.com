import React from "react";

import ProjectCard from "@/components/project-card";
import styles from "./showcase-section.module.css";
import { ProjectMD } from "@/app/page";

interface Props {
  data: ProjectMD[];
}

export default function ShowcaseSection({ data }: Props) {
  return (
    <section>
      <div className={styles.circleTop} />

      <div className={styles.showcase}>
        <div className={styles.textWrapper}>
          <p>
            I’m a software developer specializing in frontend development and
            creating accessible interface. I also love design and UX.
          </p>
        </div>

        <div className={styles.projectContainer}>
          <div className={styles.projectGrid}>
            {data.map((project) => (
              <ProjectCard
                key={`${project.slug}`}
                name={project.title}
                description={project.desc}
                to={`/project/${project.slug}`}
                thumbnail={project.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.circleBottom} />
    </section>
  );
}
