import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  // typography variables (font-size, font-weight)
  :root {
    --fs-300: 0.875rem;
    --fs-400: 1rem;
    --fs-500: 1.125rem;
    --fs-600: 1.25rem;
    --fs-700: 1.5rem;
    --fs-800: 1.75rem;

    --fw-300: 300;
    --fw-600: 600;
    --fw-800: 800;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: "Nunito Sans", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: var(--fs-400);
    background-color: ${[(props) => props.theme.background]};
  }
  
  
  // default weights

  h1,
  h2,
  h3 {
    font-weight: var(--fw-800);
  }

  p {
    font-weight: var(--fw-300);
  }

  button {
    font-weight: var(--fw-600);
    font-size: inherit;
  }

`;

export default GlobalStyle;
