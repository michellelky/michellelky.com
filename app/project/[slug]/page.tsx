import React from "react";
import { notFound } from "next/navigation";
import clsx from "clsx";

import { Markdown, BannerImage } from "@/components/markdown";
import { loadMarkdown } from "@/helpers/file-helper";
import styles from "./project.module.css";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const { frontmatter } = await loadMarkdown(params.slug);
  const { title, desc } = frontmatter;

  const combinedTitle = `${title} | Michelle Lau`;

  return {
    title: combinedTitle,
    description: desc,
    openGraph: {
      title: combinedTitle,
      description: desc,
    },
    twitter: {
      card: "summary_large_image",
      title: combinedTitle,
      description: desc,
    },
  };
}

async function ProjectDetail({ params }: any) {
  const { frontmatter, content } = await loadMarkdown(params.slug);

  if (!frontmatter) {
    notFound();
  }
  const { title, desc, banner, technologies, links } = frontmatter;

  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>{title}</p>
      <h1 className={styles.title}>{desc}</h1>

      <div className={styles.bannerWrapper}>
        <BannerImage src={`/images/${banner}`} alt={title} />
      </div>

      <div className={clsx(styles.infoGrid, styles.body)}>
        <p className={styles.heading}>Technologies</p>
        <div className={styles.btnRow}>
          {technologies.map((tech: string) => (
            <div key={tech} className={styles.categoryBtn}>
              <p className={styles.categoryText}>{tech}</p>
            </div>
          ))}
        </div>
      </div>

      <article className={styles.body}>
        <Markdown source={content} />
      </article>

      {links && (
        <div className={styles.infoGrid}>
          <p className={styles.heading}>Links</p>
          <div className={styles.btnRow}>
            {links.web && (
              <a href={links.web} target="_blank" rel="noreferrer noopener">
                Visit Site
              </a>
            )}
            {links.apple && (
              <a href={links.apple} target="_blank" rel="noreferrer noopener">
                App Store
              </a>
            )}
            {links.google && (
              <a href={links.google} target="_blank" rel="noreferrer noopener">
                Google Play
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
