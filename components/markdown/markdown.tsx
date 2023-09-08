import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import ColumnGrid from "../column-grid";
import { OverviewBlock } from "./overview-block";

interface MarkdownProps {
  source: string;
}

const components = {
  img: ({ src, alt }: any) => {
    return (
      <Image
        src={src}
        alt={alt}
        width={700}
        height={466} // 16:9
        style={{ objectFit: "cover", borderRadius: 30 }}
      />
    );
  },
  ColumnGrid,
  OverviewBlock,
};

export default function Markdown({ source }: MarkdownProps) {
  return <MDXRemote source={source} components={components} />;
}
