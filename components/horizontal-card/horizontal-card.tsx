import React from "react";
import Image from "next/image";

import ExternalLink from "@/components/external-link";
import { greyDataURL } from "@/helpers/image-placeholder";
import styles from "./horizontal-card.module.css";

interface Props {
  name: string;
  description?: string;
  thumbnail: string;
  href: string;
  alt?: string;
  isFirst?: boolean;
}

export default function HorizontalCard({
  name,
  description,
  href,
  thumbnail,
  alt,
  isFirst = false,
}: Props) {
  return (
    <ExternalLink href={href}>
      <div className={styles.container}>
        <Image
          src={thumbnail}
          alt={alt || `${name}`}
          className={styles.thumbnail}
          priority={isFirst}
          width={150}
          height={150}
          blurDataURL={greyDataURL()}
        />

        <div className={styles.textWrapper}>
          <p className={styles.title}>{name}</p>
          {!!description && <p className={styles.body}>{description}</p>}
        </div>
      </div>
    </ExternalLink>
  );
}
