import React from "react";
import Image from "next/image";

import styles from "./card.module.css";

interface Props {
  image: any;
  alt?: string;
  caption?: string;
  isFirst?: boolean;
}

export default function Card({ caption, image, alt, isFirst = false }: Props) {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={alt || "feature"}
        className={styles.image}
        priority={isFirst}
        width={800}
        height={800}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {!!caption && (
        <div className={styles.textWrapper}>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}
