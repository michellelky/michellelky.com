// Animate when scroll into view

"use client";

import React from "react";
import clsx from "clsx";

import styles from "./animate-wrapper.module.css";

export default function AnimateWrapper({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: IntersectionObserverInit;
}) {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          // animate once
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return (
    <div
      ref={ref}
      className={clsx(styles.default, isInView ? styles.fadeIn : "")}
    >
      {children}
    </div>
  );
}
