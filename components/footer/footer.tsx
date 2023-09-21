import React from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

import ExternalLink from "@/components/external-link";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/content/constants";
import styles from "./footer.module.css";

const ICON_SIZE = "1.2rem";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.waveWrapper}>
        <div className={styles.wave} />
      </div>

      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>Let’s build something together</h2>
        <p className={styles.contactBody}>
          Feel free to reach out if you’re looking for a developer, or just want
          to connect.
        </p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>

      <div className={styles.footerRow}>
        <p>© designed & built by Michelle Lau</p>
        <div className={styles.social}>
          <ExternalLink href={TWITTER}>
            <FiTwitter size={ICON_SIZE} />
          </ExternalLink>
          <ExternalLink href={GITHUB}>
            <FiGithub size={ICON_SIZE} />
          </ExternalLink>
          <ExternalLink href={LINKEDIN}>
            <FiLinkedin size={ICON_SIZE} />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
