import { MDXRemote } from "next-mdx-remote/rsc";
import Image, { ImageProps } from "next/image";

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
};

export default function Markdown({ source }: MarkdownProps) {
  return <MDXRemote source={source} components={components} />;
}
