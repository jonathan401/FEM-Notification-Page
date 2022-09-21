import { useContext } from "react";
import styled from "styled-components";

import ThemeContext, { ThemeContextType } from "../../contexts/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggleStyled = styled.button`
  margin: 0.6rem 0.6rem 0.6rem auto;
  border-radius: 0.4rem;
  border: 0;
  padding: 0.4rem 0.5rem;
  outline: 0;
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
`;

const ThemeToggle = () => {
  const { theme, switchTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <ThemeToggleStyled onClick={() => switchTheme(theme)}>
      {theme === "dark" ? (
        <MdLightMode size="20" color="#def3fa" />
      ) : (
        <MdDarkMode size="20" color="#def3fa" />
      )}
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
