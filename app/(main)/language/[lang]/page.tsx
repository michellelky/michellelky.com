import React from "react";
import clsx from "clsx";

import HeaderCard from "@/components/header-card";
import SectionList from "@/components/section-list";
import SectionCard from "@/components/section-card";
import IFrameEmbed from "@/components/iframe-embed";
import { getLanguageList, loadLanguage } from "@/helpers/file-helper";
import styles from "./lang.module.css";

export async function generateMetadata({ params }: PageProps) {
  const data = await loadLanguage(params.lang);

  const combinedTitle = `${data.title} resources | Michelle Lau`;
  const description = `My resources for learning ${data.title}`;

  return {
    title: combinedTitle,
    description,
    openGraph: {
      title: combinedTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: combinedTitle,
      description,
    },
  };
}

// Generate dynamic routes
export async function generateStaticParams() {
  const languages = await getLanguageList();

  return languages.map((item) => ({
    lang: item.lang,
  }));
}

interface PageProps {
  params: { lang: string };
}

async function ResourceByLanguage({ params }: PageProps) {
  const data = await loadLanguage(params.lang);

  return (
    <div className={clsx("full-page", styles.container)}>
      <HeaderCard
        title={data.title}
        subtitle={data.original}
        bgColor={data.theme.bgColor}
        textColor={data.theme.textColor}
      />

      {data.resources.map((r: any) => (
        <SectionList
          key={r.name}
          title={r.name}
          data={r.content}
          renderItem={(item) => (
            <SectionCard
              key={item.name}
              name={item.name}
              description={item.description}
              href={item.url}
              thumbnail={item.thumbnail}
            />
          )}
        />
      ))}

      {data.spotify && <IFrameEmbed src={data.spotify} type="spotify" />}
    </div>
  );
}

export default ResourceByLanguage;
