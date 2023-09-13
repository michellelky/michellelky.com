import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";

const LINKS = [
  { name: "Work", to: "/" },
  { name: "Language", to: "/language" },
  { name: "Photo", to: "/photography" },
  { name: "About", to: "/about" },
];

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link href={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
