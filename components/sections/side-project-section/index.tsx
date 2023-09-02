import React from "react";
import styles from "./side-project.module.css";
import ProjectCard from "@/components/project-card";

const PROJECTS = [
  {
    id: "s1",
    name: "Duolingo Hoots archive",
    desc: "Daily writing prompt to practice foreign language",
    type: "mobile",
    slug: "duolingo-hoots-archive",
    thumbnail: "",
  },
];

interface Props {
  title: string;
  subtitle?: string;
}

export default function SideProjectSection({ title, subtitle }: Props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {!!subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      <div className={styles.projectContainer}>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
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
