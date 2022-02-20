import Image from "next/image";
import React, { useRef } from "react";

import { useCustomDarkMode } from "../useCustomDarkMode";

import styles from "./themed-img.module.scss";

type Props = {
  dark: string;
  light: string;
  width: number;
  height: number;
  alt: string;
};

// avoid development warning: https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
const useBrowserLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function ThemedImg({ dark, light, alt, ...props }: Props) {
  const darkMode = useCustomDarkMode();
  const ref = useRef<HTMLElement>(null);

  useBrowserLayoutEffect(() => {
    // hiding the image when dark mode is toggled
    // because it creates an annoying background flicker
    // as the CSS background color transitions, but the img does not
    ref.current?.classList.add(styles.hide);
  }, [darkMode.value]);

  return (
    <picture ref={ref} className={styles.wrapper}>
      <Image
        src={darkMode.value ? dark : light}
        onLoad={() => {
          // after the image has loaded, display it
          // which also includes a fade-in transition
          setTimeout(() => ref.current?.classList.remove(styles.hide), 300);
        }}
        layout={"responsive"}
        unoptimized={true}
        alt={alt}
        {...props}
      />
    </picture>
  );
}
