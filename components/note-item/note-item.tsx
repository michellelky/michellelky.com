"use client";

import React from "react";

import styles from "./note-item.module.css";
import { FaExternalLinkSquareAlt, FaSpotify, FaYoutube } from "react-icons/fa";
import ExternalLink from "../external-link";
import clsx from "clsx";

const flags: { [key: string]: string } = {
  italian: "🇮🇹",
  french: "🇫🇷",
  spanish: "🇪🇸",
};

interface Props {
  title: string;
  content: string;
  translation: string;
  date: string;
  source?: { type: string; url: string };
  tags?: string[];
}

export default function NoteItem({
  title,
  content,
  translation,
  tags,
  source,
}: Props) {
  const [transVisible, setTransVisible] = React.useState(false);

  function toggleContent() {
    setTransVisible(!transVisible);
  }

  function getCountryFlag(t: string) {
    return flags[t] || "";
  }

  function getSourceIcon(type: string) {
    const SIZE = "28px";
    if (type === "youtube") {
      return <FaYoutube size={SIZE} />;
    }
    if (type === "spotify") {
      return <FaSpotify size={SIZE} />;
    }
    return <FaExternalLinkSquareAlt size={SIZE} />;
  }

  return (
    <div className={styles.container}>
      <button className={styles.card} onClick={toggleContent}>
        <p className={styles.header}>{content}</p>
        {transVisible && (
          <div className={styles.highlightWrapper}>
            <p className={styles.highlight}>{translation}</p>
          </div>
        )}
        <p className={styles.body}>{title}</p>

        {tags &&
          tags.map((t) => (
            <p key={t} className={styles.category}>
              {getCountryFlag(t)}
            </p>
          ))}

        <div className={styles.tipWrapper}>
          <div className={clsx(styles.tip, transVisible ? styles.open : "")}>
            {transVisible ? "Hide" : "Translate"}
          </div>
        </div>
      </button>

      {!!source && (
        <div className={styles.actionWrapper}>
          <ExternalLink
            className={styles.action}
            href={source.url}
            title={source.type}
          >
            {getSourceIcon(source.type)}
          </ExternalLink>
        </div>
      )}
    </div>
  );
}
