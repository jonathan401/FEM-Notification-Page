import React, { createContext, useState, useEffect } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  switchTheme: (theme: "light" | "dark") => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const defaultTheme: "light" | "dark" = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? "dark"
  : "light";

const themeData = JSON.parse(localStorage.getItem("theme") as "light" | "dark");

const initialTheme = themeData ? themeData : defaultTheme;

export const ThemeStore = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme);

  // effects
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    const storedTheme = JSON.parse(
      localStorage.getItem("theme") as "light" | "dark"
    );
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [theme]);

  const switchTheme = (currTheme: "light" | "dark") => {
    currTheme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
