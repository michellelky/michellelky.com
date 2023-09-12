import React from "react";

import Card from "@/components/card";
import styles from "./column-grid.module.css";

interface Props {
  data: any[];
}

export default function ColumnGrid({ data }: Props) {
  const leftItems = data.filter((d, index) => index % 2 === 0);
  const righeItems = data.filter((d, index) => index % 2 !== 0);

  return (
    <div className={styles.grid}>
      <div className={styles.col}>
        {leftItems.map((item) => (
          <Card key={item.image} caption={item.text} image={item.image} />
        ))}
      </div>
      <div className={styles.col}>
        {righeItems.map((item) => (
          <Card key={item.image} caption={item.text} image={item.image} />
        ))}
      </div>
    </div>
  );
}
