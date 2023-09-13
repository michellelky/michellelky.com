import React from "react";
import Image from "next/image";

import "@/styles/reset.css";
import "@/styles/globals.css";
import Header from "./header";
import styles from "./photography.module.css";

export default function PhotoPage() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.galleryContainer}>
        <div className={styles.fullImg}>
          <Image
            src="/images/photography/hochstrahlbrunnen.jpg"
            alt="feature photo"
            fill
          />
        </div>
      </div>
    </div>
  );
}
