import React from "react";
import useDarkMode from "use-dark-mode";

import styles from "./darkmode_toggle.module.scss";

export function DarkModeToggle() {
  const darkMode = useDarkMode();

  return (
    <div className={styles.toggle}>
      <input
        id="toggle-dark-mode"
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor="toggle-dark-mode">Toggle dark mode</label>
    </div>
  );
}
