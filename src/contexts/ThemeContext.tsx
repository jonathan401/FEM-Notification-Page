import React, { createContext, useState } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  switchTheme: (theme: "light" | "dark") => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeStore = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
