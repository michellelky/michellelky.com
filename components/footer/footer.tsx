import React from "react";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>Let’s build something together</h2>
        <p className={styles.contactBody}>
          Feel free to reach out if you’re looking for a developer, or just want
          to connect.
        </p>
        <a href="mailto:michellelkys@gmail.com">michellelkys@gmail.com</a>
      </div>
      <div className={styles.footerRow}>
        <p>© designed & built by Michelle Lau</p>
        <div className={styles.social}>
          <a>O</a>
          <a>O</a>
          <a>O</a>
        </div>
      </div>

      <div className={styles.waveImg} />
    </footer>
  );
}
