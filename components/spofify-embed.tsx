import React from "react";

interface EmbedProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

export default function SpofifyEmbed({ src, width, height }: EmbedProps) {
  return (
    <iframe
      style={{ borderRadius: 12 }}
      src={src}
      width={width || "100%"}
      height={height || "352"}
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
