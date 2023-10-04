import React from "react";

interface Props {
  href?: string | undefined;
  children?: any;
  className?: string;
}
export default function ExternalLink({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
    </a>
  );
}
