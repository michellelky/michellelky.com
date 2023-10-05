import React from "react";
import clsx from "clsx";

import HeaderCard from "@/components/header-card";
import NoteItem from "@/components/note-item";
import notesData from "@/content/languages/notes.json";
import styles from "./notes.module.css";

const title = "Notes | Michelle Lau";
const description = "My random language notes";

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

export default function NotePage() {
  const { data, title, theme } = notesData;

  return (
    <div className={clsx("full-page", styles.container)}>
      <HeaderCard
        title={title}
        bgColor={theme.bgColor}
        textColor={theme.textColor}
      />
      <div className={styles.wrapper}>
        {data.map((item: any) => (
          <NoteItem
            key={item.title}
            title={item.title}
            content={item.content}
            translation={item.translation}
            source={item.source}
            tags={item.tags}
            date={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
