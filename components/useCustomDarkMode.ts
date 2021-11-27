import useDarkMode from "use-dark-mode";

const classNameDark = "dark-mode";
const classNameLight = "light-mode";

export function useCustomDarkMode() {
  const darkMode = useDarkMode(false, {
    onChange: (value) => {
      document.documentElement.setAttribute("data-darkmode", String(value));
      document.documentElement.classList.add(
        value ? classNameDark : classNameLight
      );
      document.documentElement.classList.remove(
        value ? classNameLight : classNameDark
      );
    },
  });

  return { ...darkMode };
}
