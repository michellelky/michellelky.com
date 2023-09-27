import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "./block.module.css";

interface Props {
  to: string;
  title: string;
  bgColor: string;
  textColor?: string;
  imgSrc?: string;
  size?: "lg" | "md" | "sm";
}

export default function Block({
  to,
  title,
  bgColor,
  textColor = "#000000",
  imgSrc,
  size = "sm",
}: Props) {
  const isSm = size === "sm";
  const textStyle = !isSm ? styles.featureText : "";
  const iconSize = isSm ? 60 : 80;

  return (
    <Link href={to}>
      <div className={styles.box} style={{ background: bgColor }}>
        <p
          className={clsx(styles.title, textStyle)}
          style={{ color: textColor }}
        >
          {title}
        </p>

        {!!imgSrc && (
          <Image
            src={imgSrc}
            alt={`${title} icon`}
            width={iconSize}
            height={iconSize}
            className={styles.icon}
          />
        )}
      </div>
    </Link>
  );
}
