import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

const contentDir = "content";
const projectDir = "projects";
const langDir = "languages";

export async function getMarkdownList() {
  const fileNames = await readDirectory(projectDir);

  const markdowns: any[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`${projectDir}/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    markdowns.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return markdowns.sort((p1, p2) => (p1.order < p2.order ? -1 : 1));
}

export const loadMarkdown = React.cache(async function loadMarkdown(
  slug: string,
) {
  const rawContent = await readFile(`${projectDir}/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

export async function getLanguageList() {
  const fileNames = await readDirectory(`${langDir}/data`);

  const list: any[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`${langDir}/data/${fileName}`);
    const content = JSON.parse(rawContent);

    list.push({
      lang: fileName.replace(".json", ""),
      name: content.title,
      bgColor: content.theme.bgColor,
      textColor: content.theme.textColor,
    });
  }

  return list;
}

export const loadLanguage = React.cache(async function loadJson(slug: string) {
  const rawContent = await readFile(`${langDir}/data/${slug}.json`);

  return JSON.parse(rawContent);
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), contentDir, localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), contentDir, localPath));
}
