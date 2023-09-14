"use client";

import React from "react";

import styles from "./hero-section.module.css";

interface Props {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: Props) {
  const [scrollY, setScrollY] = React.useState(0);

  const getYPos = (speed: number) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 700) {
        return;
      }
    }
    return -((scrollY * speed) / 100);
  };

  React.useEffect(() => {
    const updateParallax = (e: Event) => {
      const top = window.scrollY;
      if (typeof top === "number") {
        setScrollY(top);
      }
    };

    window.addEventListener("scroll", updateParallax);

    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  return (
    <section className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>

      <div
        className={styles.sunImg}
        id={styles.sunSm}
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className={styles.sunImg}
        id={styles.sunLg}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className={styles.sandImg}
        id={styles.mountain2}
        style={{ transform: `translateY(${getYPos(10)}px)` }}
      />
      <div
        className={styles.sandImg}
        id={styles.mountain1}
        style={{ transform: `translateY(${getYPos(15)}px)` }}
      />
      <div className={styles.sandImg} id={styles.dune} />
    </section>
  );
}
