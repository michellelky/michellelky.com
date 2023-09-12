import React from "react";

import { baloo } from "@/styles/fonts";
import styles from "./error-block.module.css";

interface Props {
  title: string;
  message?: string;
}

export default function ErrorBlock({ title, message }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={`${baloo.className} ${styles.title}`}>{title}</h1>
      {!!message && <p className={styles.body}>{message}</p>}
    </div>
  );
}
