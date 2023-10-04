import React from "react";
import clsx from "clsx";

import styles from "./section-list.module.css";

interface Props {
  title: string;
  data: any[];
  renderItem: (item: any) => React.ReactElement;
  wrapperClass?: string;
}

export default function SectionList({
  title,
  data,
  renderItem,
  wrapperClass,
}: Props) {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={clsx(styles.itemContainer, wrapperClass)}>
        {data.map(renderItem)}
      </div>
    </section>
  );
}
