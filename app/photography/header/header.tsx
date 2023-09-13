import React from "react";
import Link from "next/link";

import styles from "./header.module.css";

// TODO - /photography/about
const LINKS = [{ name: "About", to: "/about" }];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/photography">
        <span id={styles.logoText}>michelle lau</span>
      </Link>

      <div>
        {LINKS.map((link) => (
          <Link key={link.to} href={link.to} className={styles.menuItem}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
