import React from "react";
import clsx from "clsx";

import HeaderCard from "@/components/header-card";
import Markdown from "@/components/markdown";
import { loadMarkdown } from "@/helpers/file-helper";
import styles from "./learn.module.css";

async function LearnPage() {
  const { frontmatter, content } = await loadMarkdown(
    "how-to-learn",
    "language",
  );

  return (
    <div className={clsx("full-page", styles.container)}>
      <HeaderCard
        title={frontmatter.title}
        bgColor={`#${frontmatter.bgColor}`}
        textColor={`#${frontmatter.textColor}`}
      />

      <article className={styles.wrapper}>
        <Markdown source={content} />
      </article>
    </div>
  );
}

export default LearnPage;
