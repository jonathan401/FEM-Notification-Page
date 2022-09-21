import React, { createContext, useState, useEffect } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  switchTheme: (theme: "light" | "dark") => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeStore = ({ children }: Props) => {
  let userDefault: "light" | "dark" = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState<"light" | "dark">(userDefault);

  // effects
  useEffect(() => {
    // still working on it
    // update theme based on local storage
    // let storedTheme: "light" | "dark" = localStorage.getItem("theme")
    //   ? localStorage.getItem("theme")
    //   : theme;
  }, [theme]);

  const switchTheme = (currTheme: "light" | "dark") => {
    currTheme === "light" ? setTheme("dark") : setTheme("light");
  };
  localStorage.setItem("theme", theme);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
