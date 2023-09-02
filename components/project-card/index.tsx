import React from "react";
import Image from "next/image";
import Link from "next/link";
import smStyles from "./card-sm.module.css";
import lgStyles from "./card-lg.module.css";

interface ProjectCardProps {
  to: string;
  thumbnail: string;
  name: string;
  description: string;
  size?: "sm" | "lg";
}

export default function ProjectCard({
  to,
  thumbnail,
  name,
  description,
  size = "sm",
}: ProjectCardProps) {
  const styles = size === "sm" ? smStyles : lgStyles;

  return (
    <Link href={to}>
      <div className={styles.card}>
        {/* TODO - mockup */}
        {/* <Image src={thumbnail} alt={name} /> */}

        <div className={styles.textWrapper}>
          <p className={styles.cardTitle}>{name}</p>
          <p className={styles.cardBody}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
