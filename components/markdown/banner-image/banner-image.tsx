// import { useState } from "react";
import type { ComponentProps } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./banner-image.module.css";

export default function BannerImage(props: ComponentProps<typeof Image>) {
  // const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      width={1100}
      height={600}
      className={clsx(
        props.className,
        styles.image,
        // isLoading ? styles.loading : "",
      )}
      // onLoadingComplete={() => setLoading(false)}
    />
  );
}
