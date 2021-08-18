import { useEffect, useState } from "react";

import { theme } from "../theme";

const { sm, md, lg } = theme.breakpoint;

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<"" | "sm" | "md" | "lg">("");
  const isBrowser = typeof window !== "undefined";

  const mq_xs = isBrowser && window.matchMedia(`(max-width: ${sm - 1}px)`);
  const mq_sm =
    isBrowser &&
    window.matchMedia(`(min-width: ${sm}px) and (max-width: ${md - 1}px)`);
  const mq_md =
    isBrowser &&
    window.matchMedia(`(min-width: ${md}px) and (max-width: ${lg - 1}px)`);
  const mq_lg = isBrowser && window.matchMedia(`(min-width: ${lg}px)`);

  useEffect(() => {
    mq_sm && mq_sm.matches && setBreakpoint("sm");
    mq_md && mq_md.matches && setBreakpoint("md");
    mq_lg && mq_lg.matches && setBreakpoint("lg");

    function handleXS(e: MediaQueryListEvent) {
      e.matches && setBreakpoint("");
    }
    function handleSM(e: MediaQueryListEvent) {
      e.matches && setBreakpoint("sm");
    }
    function handleMD(e: MediaQueryListEvent) {
      e.matches && setBreakpoint("md");
    }
    function handleLG(e: MediaQueryListEvent) {
      e.matches && setBreakpoint("lg");
    }

    try {
      mq_xs && mq_xs.addEventListener("change", handleXS);
      mq_sm && mq_sm.addEventListener("change", handleSM);
      mq_md && mq_md.addEventListener("change", handleMD);
      mq_lg && mq_lg.addEventListener("change", handleLG);
    } catch (e) {
      console.warn(e);
    }

    return () => {
      try {
        mq_xs && mq_xs.removeEventListener("change", handleXS);
        mq_sm && mq_sm.removeEventListener("change", handleSM);
        mq_md && mq_md.removeEventListener("change", handleMD);
        mq_lg && mq_lg.removeEventListener("change", handleLG);
      } catch (e) {
        console.warn(e);
      }
    };
  }, []);

  return { breakpoint };
};
