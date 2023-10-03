import React from "react";

import styles from "./section-list.module.css";
import SectionCard from "../section-card";

interface Props {
  title: string;
  data: any[];
}

export default function SectionList({ title, data }: Props) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.itemContainer}>
        {data.map((item) => (
          <SectionCard
            key={item.name}
            name={item.name}
            description={item.description}
            href={item.url}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
