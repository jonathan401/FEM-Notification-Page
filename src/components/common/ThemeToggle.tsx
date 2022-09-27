import { useContext } from "react";
import styled from "styled-components";

import ThemeContext, { ThemeContextType } from "../../contexts/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggleStyled = styled.button`
  margin: 0.5rem 0 1.3rem auto;
  border-radius: 0.4rem;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.tertiary};
  box-shadow: 0 4px ${({ theme }) => theme.boxShadow};

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${({ theme }) => theme.tertiary};
  }

  span {
    font-size: clamp(0.9rem, 2vw, 1rem);
    padding-left: 0.7rem;
    color: ${({ theme }) => theme.textLight};
    display: inline-block;
  }
`;

const ThemeToggle = () => {
  const { theme, switchTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <ThemeToggleStyled
      type="button"
      aria-label="theme switch"
      aria-pressed={theme === "dark" ? true : false}
      onClick={() => switchTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MdDarkMode aria-hidden="true" size="20" color="#def3fa" />
      ) : (
        <MdLightMode aria-hidden="true" size="20" color="#def3fa" />
      )}
      <span>{theme === "dark" ? "light" : "dark"}</span>
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
