import React from "react";

interface Props {
  href?: string | undefined;
  children?: any;
  className?: string;
  title?: string;
  ariaLabel?: string;
}
export default function ExternalLink({
  href,
  children,
  className,
  title,
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
