import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "theme";

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;

  return savedTheme || "light";
};

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
