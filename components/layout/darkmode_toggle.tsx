import React from "react";

import { useCustomDarkMode } from "../useCustomDarkMode";

import styles from "./darkmode_toggle.module.scss";

export function DarkModeToggle() {
  const darkMode = useCustomDarkMode();

  return (
    <div className={styles.toggle}>
      <input
        id="toggle-dark-mode"
        type="checkbox"
        checked={!!darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor="toggle-dark-mode">Toggle dark mode</label>
    </div>
  );
}
