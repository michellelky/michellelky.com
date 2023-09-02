import React from "react";
import styles from "./error.module.css";
import { baloo } from "@/styles/fonts";

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
