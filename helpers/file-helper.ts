import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

const projectPath = "/content/projects";

export async function getMarkdownList() {
  const fileNames = await readDirectory(projectPath);

  const markdowns: any[] = [];

  for (let fileName of fileNames) {    
    const rawContent = await readFile(`${projectPath}/${fileName}/index.mdx`);

    const { data: frontmatter } = matter(rawContent);

    markdowns.push({
      slug: fileName,
      ...frontmatter,
    });
  }

  return markdowns.sort((p1, p2) => (p1.order < p2.order ? -1 : 1));
}

export const loadMarkdown = React.cache(async function loadMarkdown(
  slug: string,
) {
  const rawContent = await readFile(`${projectPath}/${slug}/index.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
