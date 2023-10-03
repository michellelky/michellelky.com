import React from "react";
import clsx from "clsx";

import HeaderCard from "@/components/header-card";
import SectionList from "@/components/sections/section-list/section-list";
import SpofifyEmbed from "@/components/spofify-embed";
import { getLanguageList, loadLanguage } from "@/helpers/file-helper";
import styles from "./lang.module.css";

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
        <SectionList key={r.name} title={r.name} data={r.content} />
      ))}

      <SpofifyEmbed src={data.spotify} height={200} />
    </div>
  );
}

export default ResourceByLanguage;
