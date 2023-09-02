import React from "react";
import Image from "next/image";
import styles from "./hero-section.module.css";
import Dune from "@/public/images/dune-main-low.svg";
import MountainFlat from "@/public/images/mountain-flat.svg";
import MountainPeak from "@/public/images/mountain-peak.svg";

interface Props {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
      <div className={styles.sunImg} id={styles.sunSm} />
      <div className={styles.sunImg} id={styles.sunLg} />

      <Image
        src={Dune}
        className={styles.sandImg}
        id={styles.dune}
        alt="dune"
        priority
        />
      <Image
        src={MountainFlat}
        className={styles.sandImg}
        id={styles.mountain1}
        alt="backdrop mountain"
        priority
        />
      <Image
        src={MountainPeak}
        className={styles.sandImg}
        id={styles.mountain2}
        alt="backdrop mountain"
        priority
      />
    </section>
  );
}
