import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    /* --color-primary: #EF233C; */
    --color-primary: hsla(353, 86%, 54%, 1);
    --color-primary-80: hsla(353, 86%, 54%, 0.8);
    --color-primary-60: hsla(353, 86%, 54%, 0.6);
    --color-primary-40: hsla(353, 86%, 54%, 0.4);
    --color-primary-20: hsla(353, 86%, 54%, 0.2);
    /* --color-secondary: #269EE1; */
    --color-secondary: hsla(202, 76%, 52%, 1);
    --color-secondary-80: hsla(202, 76%, 52%, 0.8);
    --color-secondary-60: hsla(202, 76%, 52%, 0.6);
    --color-secondary-40: hsla(202, 76%, 52%, 0.4);
    --color-secondary-20: hsla(202, 76%, 52%, 0.2);
    /* --color-text-dark: #2B2D42; */
    --color-text-dark: hsla(235, 21%, 21%, 1);
    --color-text-dark-80: hsla(235, 21%, 21%, 0.8);
    --color-text-dark-60: hsla(235, 21%, 21%, 0.6);
    --color-text-dark-40: hsla(235, 21%, 21%, 0.4);
    --color-text-dark-20: hsla(235, 21%, 21%, 0.2);
    /* --color-text-gray: #8D99AE; */
    --color-text-gray:  hsla(218, 17%, 62%, 1);
    --color-text-gray-80: hsla(218, 17%, 62%, 0.8);
    --color-text-gray-60: hsla(218, 17%, 62%, 0.6);
    --color-text-gray-40:  hsla(218, 17%, 62%, 0.4);
    --color-text-gray-20: hsla(218, 17%, 62%, 0.2);
    /* --color-background: #EDF2F4; */
    --color-background: hsla(197, 24%, 94%, 1);
    --color-background-80: hsla(197, 24%, 94%, 0.8);
    --color-background-60: hsla(197, 24%, 94%, 0.6);
    --color-background-40: hsla(197, 24%, 94%, 0.4);
    --color-background-20: hsla(197, 24%, 94%, 0.2);

    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /**
    @reference: https://www.joshwcomeau.com/css/custom-css-reset/
  */

  html,
  body {
    height: 100%;
  }

  /* img,
  svg {
    display: block;
    max-width: 100%;
  } */

  input,
  button {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }

  .btn {
    /* width: 100%; */
    padding: 0.3rem 0.6rem;
    border-radius: 0.3rem;
  }
`;

export default GlobalStyles;
