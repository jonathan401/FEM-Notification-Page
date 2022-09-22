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
    tertiary: string;
    userLinkText: string;
    groupLinkText: string;
    postLinkText: string;
    hoverColor: string;
    borderColor: string;
    boxHoverBg: string;
    boxShadow: string;
  };
};

const themes: themeProps = {
  light: {
    mainBg: "hsl(210, 60%, 98%)",
    ContainerBg: "hsl(0, 0%, 100%)",
    unreadBg: "hsl(210, 60%, 98%)",
    textPrimary: "hsl(219, 12%, 42%)",
    textDark: "hsl(224, 21%, 14%)",
    textLight: "#def3fa",
    tertiary: "hsl(219, 85%, 26%)",
    userLinkText: "hsl(224, 21%, 14%)",
    groupLinkText: "hsl(219, 85%, 26%)",
    postLinkText: "hsl(219, 12%, 42%)",
    hoverColor: "hsl(219, 85%, 26%)",
    borderColor: "hsl(205, 33%, 90%)",
    boxHoverBg: "hsl(211, 68%, 94%)",
    boxShadow: "rgba(14, 15, 31, 0.3)",
  },
  dark: {
    mainBg: "#0a0b18",
    ContainerBg: "#0e0f1f",
    unreadBg: "#1e2139",
    textPrimary: "#def3fa",
    textDark: "#ced8db",
    textLight: "#def3fa",
    tertiary: "#3045e4",
    userLinkText: "#fff",
    groupLinkText: "#8997fd",
    postLinkText: "#ddd",
    hoverColor: "#3046e4",
    borderColor: "#1e2139",
    boxHoverBg: "#1e2139",
    boxShadow: "#cccaca",
  },
};

const Theme = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  if (theme === null) {
    throw new Error("theme state not found");
  }
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
