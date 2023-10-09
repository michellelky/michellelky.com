import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import ColumnGrid from "@/components/column-grid";
import CodeSnippet from "@/components/code-snippet";
import ExternalLink from "@/components/external-link";
import IFrameEmbed from "@/components/iframe-embed";
import { OverviewBlock } from "./overview-block";
import styles from "./markdown.module.css";

interface MarkdownProps {
  source: string;
}

const components = {
  a: ({ children, ...props }: any) => (
    <ExternalLink showIcon {...props}>
      {children}
    </ExternalLink>
  ),
  img: ({ src, alt }: any) => {
    return (
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} fill sizes="100vw" />
      </div>
    );
  },
  pre: CodeSnippet,
  ColumnGrid,
  OverviewBlock,
  IFrameEmbed,
};

export default function Markdown({ source }: MarkdownProps) {
  return <MDXRemote source={source} components={components} />;
}
