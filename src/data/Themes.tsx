import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext, { ThemeContextType } from "../contexts/ThemeContext";

type Props = {
  children: React.ReactNode;
};

export type themeProps = {
  [key: string]: {
    mainBg: string;
    ContainerBg: string;
    unreadBg: string;
    textPrimary: string;
    textDark: string;
    textLight: string;
    textTertiary: string;
    userLinkText: string;
    hover: string;
    borderColor: string;
    MessageBoxHover: string;
  };
};

const themes: themeProps = {
  light: {
    mainBg: "hsl(210, 60%, 98%)",
    ContainerBg: "#fff",
    unreadBg: "hsl(210, 60%, 98%)",
    textPrimary: "hsl(219, 12%, 42%)",
    textDark: "hsl(219, 12%, 42%)",
    textLight: "hsl(219, 14%, 63%)",
    textTertiary: "hsl(219, 85%, 26%)",
    userLinkText: "hsl(224, 21%, 14%)",
    hover: "hsl(219, 85%, 26%)",
    borderColor: "hsl(205, 33%, 90%)",
    MessageBoxHover: "hsl(211, 68%, 94%)",
  },
  dark: {
    mainBg: "#141625",
    ContainerBg: "#21243b",
    unreadBg: "#1e2139",
    textPrimary: "#",
    textDark: "#",
    textLight: "#",
    textTertiary: "hsl(219, 85%, 26%)",
    userLinkText: "#",
    hover: "#",
    borderColor: "#",
    MessageBoxHover: "#",
  },
};

export const ThemeType = typeof themes;

const Theme = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  console.log(theme);
  if (theme === null) {
    throw new Error("theme state not found");
  }
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
