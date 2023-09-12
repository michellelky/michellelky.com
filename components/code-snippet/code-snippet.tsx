import React from "react";
import { Code } from "bright";

import styles from "./code-snippet.module.css";

export default function CodeSnippet(props: any) {
  return <Code {...props} className={styles.container} />;
}
