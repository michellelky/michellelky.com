import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import ColumnGrid from "@/components/column-grid";
import CodeSnippet from "@/components/code-snippet";
import { OverviewBlock } from "./overview-block";

interface MarkdownProps {
  source: string;
}

const components = {
  img: ({ src, alt }: any) => {
    return (
      <div className="md-image">
        <Image src={src} alt={alt} fill sizes="100vw" />
      </div>
    );
  },
  pre: CodeSnippet,
  ColumnGrid,
  OverviewBlock,
};

export default function Markdown({ source }: MarkdownProps) {
  return <MDXRemote source={source} components={components} />;
}
