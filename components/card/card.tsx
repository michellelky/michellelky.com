import React from "react";
import Image from "next/image";

import styles from "./card.module.css";

interface Props {
  image: any;
  alt?: string;
  caption?: string;
}

export default function Card({ caption, image, alt }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alt || "feature"}
          fill
          className={styles.image}
        />
      </div>
      {!!caption && (
        <div className={styles.textWrapper}>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}
