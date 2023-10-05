"use client";

import React from "react";
import clsx from "clsx";

import styles from "./note-item.module.css";

interface Props {
  title: string;
  content: string;
  translation: string;
  date: string;
  source?: string;
  tags?: string[];
}

export default function NoteItem({ title, content, translation, tags }: Props) {
  const [transVisible, setTransVisible] = React.useState(false);

  function toggleContent() {
    setTransVisible(!transVisible);
  }

  return (
    <div className={styles.container} onClick={toggleContent}>
      <p className={styles.header}>{content}</p>
      {transVisible && (
        <div className={styles.highlightWrapper}>
          <p className={clsx(styles.header, styles.highlight)}>{translation}</p>
        </div>
      )}
      <p className={styles.body}>{title}</p>

      {tags &&
        tags.map((t) => (
          <p key={t} className={styles.category}>
            #{t}
          </p>
        ))}
    </div>
  );
}
