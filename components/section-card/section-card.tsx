import React from "react";
import Image from "next/image";

import ExternalLink from "@/components/external-link";
import { greyDataURL } from "@/helpers/image-placeholder";
import styles from "./section-card.module.css";

interface Props {
  name: string;
  description?: string;
  thumbnail: string;
  href: string;
  alt?: string;
  isFirst?: boolean;
}

export default function Card({
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
          width={240}
          height={240}
          sizes="(max-width: 768px) 100vw, 20vw"
          placeholder="blur"
          blurDataURL={greyDataURL()}
        />

        <div className={styles.textWrapper}>
          <p className={styles.title}>{name}</p>
          {!!description && (
            <p className={styles.body} title={description}>
              {description}
            </p>
          )}
        </div>
      </div>
    </ExternalLink>
  );
}
