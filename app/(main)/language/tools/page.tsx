import React from "react";
import clsx from "clsx";

import HeaderCard from "@/components/header-card";
import SectionList from "@/components/section-list";
import HorizontalCard from "@/components/horizontal-card";
import DATA from "@/content/languages/tools.json";
import styles from "./tools.module.css";

const title = "Useful tools | Michelle Lau";
const description = "Tools for language learning";

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

async function ToolPage() {
  const data = DATA;

  return (
    <div className={clsx("full-page", styles.container)}>
      <HeaderCard
        title={data.title}
        bgColor={data.theme.bgColor}
        textColor={data.theme.textColor}
      />

      {data.resources.map((r: any) => (
        <SectionList
          key={r.name}
          title={r.name}
          data={r.content}
          wrapperClass={styles.listWrapper}
          renderItem={(item) => (
            <HorizontalCard
              key={item.name}
              name={item.name}
              description={item.description}
              href={item.url}
              thumbnail={item.thumbnail}
            />
          )}
        />
      ))}
    </div>
  );
}

export default ToolPage;
