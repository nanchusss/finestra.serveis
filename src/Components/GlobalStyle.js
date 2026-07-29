import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.primary};
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
