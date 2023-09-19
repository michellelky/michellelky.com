import React from "react";
import { notFound } from "next/navigation";
import { ResolvingMetadata } from "next";
import clsx from "clsx";

import AnimateWrapper from "@/components/animation";
import Markdown from "@/components/markdown";
import BannerImage from "@/components/banner-image";
import Link from "@/components/external-link";
import { getMarkdownList, loadMarkdown } from "@/helpers/file-helper";
import styles from "./project.module.css";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
) {
  const { frontmatter } = await loadMarkdown(params.slug);
  const { title, desc, banner } = frontmatter;

  const combinedTitle = `${title} | Michelle Lau`;
  const previousImages = (await parent).openGraph?.images || [];
  const images = [`/images/projects/${banner}`, ...previousImages];

  return {
    title: combinedTitle,
    description: desc,
    openGraph: {
      title: combinedTitle,
      description: desc,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: combinedTitle,
      description: desc,
      images,
    },
  };
}

// Generate dynamic routes
export async function generateStaticParams() {
  const projects = await getMarkdownList();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function ProjectDetail({ params }: any) {
  const { frontmatter, content } = await loadMarkdown(params.slug);

  if (!frontmatter) {
    notFound();
  }
  const { title, desc, banner, technologies, links, builtAt } = frontmatter;

  return (
    <AnimateWrapper>
      <div className={styles.container}>
        <p className={styles.subtitle}>{title}</p>
        <h1 className={styles.title}>{desc}</h1>

        <div className={styles.bannerWrapper}>
          <BannerImage src={`/images/projects/${banner}`} alt={title} />
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
              {links.github && <Link href={links.github}>GitHub</Link>}
              {links.web && <Link href={links.web}>Visit Site</Link>}
              {links.apple && <Link href={links.apple}>App Store</Link>}
              {links.google && <Link href={links.google}>Google Play</Link>}
            </div>
          </div>
        )}

        {builtAt && (
          <div className={styles.infoGrid}>
            <p className={styles.heading}>Built at</p>
            <p>{builtAt}</p>
          </div>
        )}
      </div>
    </AnimateWrapper>
  );
}

export default ProjectDetail;
