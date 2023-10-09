import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  href?: string | undefined;
  children?: any;
  className?: string;
  title?: string;
  ariaLabel?: string;
  showIcon?: boolean;
}
export default function ExternalLink({
  href,
  children,
  className,
  title,
  ariaLabel,
  showIcon,
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
      {showIcon && (
        <span style={{ display: "inline-flex", marginLeft: 6 }}>
          <FaExternalLinkAlt />
        </span>
      )}
    </a>
  );
}
