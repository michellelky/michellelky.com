import React from "react";
import styles from "./showcase-section.module.css";
import ProjectCard from "@/components/project-card";

type ProjectMD = {
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
