import { useContext } from "react";
import styled from "styled-components";

import ThemeContext, { ThemeContextType } from "../../contexts/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggleStyled = styled.button`
  margin: 0.5rem 0 1.3rem auto;
  border-radius: 0.4rem;
  padding: 0.4rem 0.3rem;
  outline: 0;
  border: 0;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.tertiary};

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${({ theme }) => theme.tertiary};
  }

  span {
    font-size: clamp(0.87rem, 2vw, 0.95rem);
    padding: 0 0.5rem;
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
      role="switch"
      aria-checked={theme === "dark" ? true : false}
      onClick={() => switchTheme(theme)}
    >
      {theme === "light" ? (
        <MdLightMode aria-hidden="true" size="20" color="#def3fa" />
      ) : (
        <MdDarkMode aria-hidden="true" size="20" color="#def3fa" />
      )}
      <span>{theme === "dark" ? "on" : "off"}</span>
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
