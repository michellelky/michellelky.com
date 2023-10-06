import React from "react";

interface Props {
  href?: string | undefined;
  children?: any;
  className?: string;
  title?: string;
}
export default function ExternalLink({
  href,
  children,
  className,
  title,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      title={title}
    >
      {children}
    </a>
  );
}
