import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
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
    background-color: hsl(210, 60%, 98%);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
`;

export default GlobalStyle;
