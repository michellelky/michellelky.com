import React from "react";

import styles from "./header-card.module.css";

interface Props {
  title: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
}

export default function HeaderCard({
  title,
  subtitle,
  bgColor,
  textColor,
}: Props) {
  return (
    <div className={styles.box} style={{ background: bgColor }}>
      <h1 className={styles.title} style={{ color: textColor }}>
        {title}
      </h1>
      {!!subtitle && (
        <p className={styles.subtitle} style={{ color: textColor }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
