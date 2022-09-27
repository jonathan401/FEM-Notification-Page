import React, { createContext, useState, useEffect } from "react";

type themeType = "light" | "dark";

export type ThemeContextType = {
  theme: themeType;
  switchTheme: (theme: themeType) => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const defaultTheme: themeType = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? "dark"
  : "light";

const themeData = JSON.parse(localStorage.getItem("theme") as themeType);

export const ThemeStore = ({ children }: Props) => {
  const [theme, setTheme] = useState<themeType>(
    themeData ? themeData : defaultTheme
  );

  // effects
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    const storedTheme = JSON.parse(localStorage.getItem("theme") as themeType);

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [theme]);

  const switchTheme = (theme: themeType) => {
    // theme === "light" ? setTheme("dark") : setTheme("light");
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
