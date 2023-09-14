import React from "react";

import Card from "@/components/card";
import styles from "./column-grid.module.css";

type GridItem = { image: string; text: string };

interface Props {
  data: GridItem[];
}

export default function ColumnGrid({ data }: Props) {
  const filterList = data.reduce(
    (
      acc: {
        left: GridItem[];
        right: GridItem[];
      },
      cur,
      i,
    ) => {
      acc[i % 2 === 0 ? "left" : "right"].push(cur);
      return acc;
    },
    { left: [], right: [] },
  );

  return (
    <div className={styles.grid}>
      <div className={styles.col}>
        {filterList.left.map((item) => (
          <Card key={item.image} caption={item.text} image={item.image} />
        ))}
      </div>
      <div className={styles.col}>
        {filterList.right.map((item) => (
          <Card key={item.image} caption={item.text} image={item.image} />
        ))}
      </div>
    </div>
  );
}
