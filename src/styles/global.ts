import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme["base-background"]};
    color: ${({ theme }) => theme["base-text"]};
    --webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["blue-500"]};
  }
`