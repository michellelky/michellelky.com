import React from "react";
import styles from "./showcase-section.module.css";
import ProjectCard from "@/components/project-card";

const PROJECTS = [
  {
    id: 1,
    name: "Praise-HK",
    desc: "Personalized air quality tracking app",
    type: "mobile",
    slug: "praisehk",
    thumbnail: "",
  },
  {
    id: 2,
    name: "Embrace Blue Lantau",
    desc: "Guided tour app with AR games",
    type: "mobile",
    slug: "embrace-blue-lantau",
    thumbnail: "",
  },
  {
    id: 3,
    name: "Tamacorgi",
    desc: "NFT collection and minting",
    type: "web",
    slug: "tamacorgi",
    thumbnail: "",
  },
  {
    id: 4,
    name: "Bid it",
    desc: "Community marketplace app development",
    type: "mobile",
    slug: "bid-it-app",
    thumbnail: "",
  },
];

export default function ShowcaseSection() {
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
            {PROJECTS.map((project) => (
              <ProjectCard
                key={`p${project.id}`}
                name={project.name}
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
