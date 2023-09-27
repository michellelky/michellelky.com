import React from "react";
import clsx from "clsx";

import styles from "./language.module.css";
import Block from "@/components/block";
import LANGUAGE_LIST from "./data.json";

const title = "Language Learning | Michelle Lau";
const description = "My resources for language learning";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function LanguagePage() {
  return (
    <div className={clsx("full-page", styles.container)}>
      <h1 className={styles.title}>Language Learning</h1>
      <div className={styles.gridContainer}>
        <div className={styles.outerGrid}>
          <Block
            title="How to learn"
            to="/how-to-learn"
            bgColor="#f9d454"
            imgSrc="/images/icons/language-arts.png"
            size="md"
          />

          <div className={styles.innerGrid}>
            <Block
              title="Useful tools"
              to="/tools"
              bgColor="#0b5b6c"
              textColor="#fff"
              imgSrc="/images/icons/scout.png"
            />
            <Block
              title="Notes"
              to="/notes"
              bgColor="#faa423"
              imgSrc="/images/icons/sketchbook.png"
            />
          </div>
        </div>
      </div>

      <div className={styles.headerWrapper}>
        <h2 className={styles.header}>Resources</h2>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.innerGrid}>
          {LANGUAGE_LIST.map((item) => (
            <Block
              key={item.name}
              title={item.name}
              to={`/language/${item.name.toLowerCase()}`}
              bgColor={item.bgColor}
              textColor={item.textColor}
              size="lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
