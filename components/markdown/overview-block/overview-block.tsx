import React from "react";

import styles from "./overview-block.module.css";

export default function OverviewBlock({ children }: any) {
  return <div className={styles.block}>{children}</div>;
}
