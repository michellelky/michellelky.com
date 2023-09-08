import React from "react";

interface Props {
  href: string;
  children: any;
}
export default function ExternalLink({ href, children }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}
