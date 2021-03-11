import { useEffect, useLayoutEffect, useState } from "react";
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

  useLayoutEffect(() => {
    mq_sm && mq_sm.matches && setBreakpoint("sm");
    mq_md && mq_md.matches && setBreakpoint("md");
    mq_lg && mq_lg.matches && setBreakpoint("lg");
  }, []);

  useEffect(() => {
    mq_xs &&
      mq_xs.addEventListener("change", (e) => {
        e.matches && setBreakpoint("");
      });

    mq_sm &&
      mq_sm.addEventListener("change", (e) => {
        e.matches && setBreakpoint("sm");
      });

    mq_md &&
      mq_md.addEventListener("change", (e) => {
        e.matches && setBreakpoint("md");
      });

    mq_lg &&
      mq_lg.addEventListener("change", (e) => {
        e.matches && setBreakpoint("lg");
      });
  }, []);

  return { breakpoint };
};
