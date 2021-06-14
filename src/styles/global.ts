import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }


  body {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }

  html, body, #__next {
    height: 100%;
  }

  .sb-show-main {
    padding: 0 !important;
  }
`

export default GlobalStyles
