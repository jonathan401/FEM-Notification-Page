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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // effects
  useEffect(() => {
    // still working on it
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
