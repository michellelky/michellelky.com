import React from "react";

interface EmbedProps {
  src: string;
  type: "youtube" | "spotify";
  width?: string | number;
  height?: string | number;
}

const spotifyProps = {
  style: { borderRadius: 12 },
  height: "200",
  frameBorder: "0",
  allowFullScreen: false,
  allow:
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
};

const ytProps = {
  style: { aspectRatio: 16 / 9 },
  title: "YouTube video player",
  frameBorder: "0",
  allowFullScreen: true,
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
};

export default function IFrameEmbed({ src, type, width, height }: EmbedProps) {
  const embedProps = type === "spotify" ? spotifyProps : ytProps;

  return (
    <div style={{ width: "100%", marginBottom: "1rem" }}>
      <iframe
        src={src}
        loading="lazy"
        width={width || "100%"}
        height={height}
        {...embedProps}
      ></iframe>
    </div>
  );
}
