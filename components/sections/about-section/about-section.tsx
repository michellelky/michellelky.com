import React from "react";
import Image from "next/image";

import styles from "./about.module.css";
import MyPic from "./michelle-lau-pic.jpeg";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      <Image
        src={MyPic}
        alt="Michlle Lau's picture"
        width={500}
        height={350}
        quality={50}
        placeholder="blur"
        style={{
          objectFit: "cover",
          borderRadius: 30,
        }}
      />

      <div className={styles.textWrapper}>
        <p>
          {`Hi there, I’m Michelle! I’m a software engineer based in Hong Kong.`}
        </p>
        <p>
          {`A few years ago, I became interested in web development - learning from tutorials online and eventually joined a coding bootcamp. Working in a small startup, I took up the role for a range of tasks from designing the UI, building with frontend frameworks like React, to setting up Node backend.`}
        </p>
        <p>
          {`When I’m not coding, I like to take photos, learn new languages and bake (dessert ❤️).`}
        </p>
      </div>
    </section>
  );
}
