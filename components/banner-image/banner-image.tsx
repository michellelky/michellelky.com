import type { ComponentProps } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./banner-image.module.css";

export default function BannerImage(props: ComponentProps<typeof Image>) {
  return (
    <Image
      {...props}
      alt={props.alt}
      width={1100}
      height={500}
      className={clsx(props.className, styles.image)}
      priority
    />
  );
}
