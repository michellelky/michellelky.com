"use client";

import React from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiSun, FiMoon } from "react-icons/fi";
import Cookie from "js-cookie";

import ExternalLink from "@/components/external-link";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  TWITTER,
  USER_THEME,
} from "@/content/constants";
import styles from "./footer.module.css";

const ICON_SIZE = "20px";

export default function Footer({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = React.useState(initialTheme);
  const imgTheme = theme === "light" ? "" : "-dk";

  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    Cookie.set(USER_THEME, newTheme);

    const root = document.documentElement;
    root.setAttribute("data-color-theme", newTheme);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.waveWrapper}>
        <div
          className={styles.wave}
          style={{
            backgroundImage: `url(/images/desert/footer-wave${imgTheme}.svg)`,
          }}
        />
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
        <div>
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

          <button className={styles.control} onClick={handleToggleTheme}>
            {theme === "light" ? (
              <FiSun size={ICON_SIZE} />
            ) : (
              <FiMoon size={ICON_SIZE} />
            )}
          </button>
      </div>
    </footer>
  );
}
