import { createGlobalStyle } from "styled-components";
import { themeProps } from "./data/Themes";

const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`
 
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    display: block;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.mainBg};
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`;

export default GlobalStyle;
