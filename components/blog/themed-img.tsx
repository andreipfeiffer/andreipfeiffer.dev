import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

import { useCustomDarkMode } from "../useCustomDarkMode";

import styles from "./themed-img.module.scss";

type Props = {
  dark: string;
  light: string;
  width: number;
  height: number;
  alt: string;
};

export function ThemedImg({ dark, light, ...props }: Props) {
  const darkMode = useCustomDarkMode();
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    // hiding the image when dark mode is toggled
    // because it creates an annoying background flicker
    // as the CSS background color transitions, but the img does not
    ref.current?.classList.add(styles.hide);

    setTimeout(() => {
      // after the background transition end, we show the image
      // which also includes a fade-in transition
      ref.current?.classList.remove(styles.hide);
    }, 200);
  }, [darkMode.value]);

  return (
    <picture ref={ref} className={styles.wrapper}>
      <Image src={darkMode.value ? dark : light} {...props} />
    </picture>
  );
}
