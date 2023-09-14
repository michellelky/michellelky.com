import React from "react";

import AnimateWrapper from "@/components/animation";
import ProjectCard from "@/components/project-card";
import { ProjectMD } from "@/app/(main)/page";
import styles from "./showcase-section.module.css";

interface Props {
  data: ProjectMD[];
}

export default function ShowcaseSection({ data }: Props) {
  return (
    <section>
      <div className={styles.circleTop} />

      <div className={styles.showcase}>
        <div className={styles.textWrapper}>
          <AnimateWrapper>
            <p>
              I’m a software developer specializing in frontend development and
              creating accessible interface. I also love design and UX.
            </p>
          </AnimateWrapper>
        </div>

        <div className={styles.projectContainer}>
          <div className={styles.projectGrid}>
            {data.map((project) => (
              <AnimateWrapper key={`${project.slug}`}>
                <ProjectCard
                  name={project.title}
                  description={project.desc}
                  to={`/projects/${project.slug}`}
                  thumbnail={project.thumbnail}
                />
              </AnimateWrapper>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.circleBottom} />
    </section>
  );
}
