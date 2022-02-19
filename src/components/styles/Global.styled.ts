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
    /* --color-dark: #2B2D42; */
    --color-dark: hsla(235, 21%, 21%, 1);
    --color-dark-80: hsla(235, 21%, 21%, 0.8);
    --color-dark-60: hsla(235, 21%, 21%, 0.6);
    --color-dark-40: hsla(235, 21%, 21%, 0.4);
    --color-dark-20: hsla(235, 21%, 21%, 0.2);
    /* --color-gray: #8D99AE; */
    --color-gray:  hsla(218, 17%, 62%, 1);
    --color-gray-80: hsla(218, 17%, 62%, 0.8);
    --color-gray-60: hsla(218, 17%, 62%, 0.6);
    --color-gray-40:  hsla(218, 17%, 62%, 0.4);
    --color-gray-20: hsla(218, 17%, 62%, 0.2);
    /* --color-background: #EDF2F4; */
    --color-background: hsla(197, 24%, 94%, 1);
    --color-background-80: hsla(197, 24%, 94%, 0.8);
    --color-background-60: hsla(197, 24%, 94%, 0.6);
    --color-background-40: hsla(197, 24%, 94%, 0.4);
    --color-background-20: hsla(197, 24%, 94%, 0.2);
    --color-yellow: #ffcb21;
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    width: .9rem;
  }

  /* ::-webkit-scrollbar-track {
    border-radius: 0.7rem;
    box-shadow: inset 0 0 5px var(--color-gray); 
  } */

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-60);
    border-radius: 0.7rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-gray-80);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /**
    @reference: https://www.joshwcomeau.com/css/custom-css-reset/
  */

  html,
  body {
    height: 100%;
  }

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

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-background);
    color: var(--color-dark);
    overflow-x: hidden;
  }

  body.open {
    overflow: hidden;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }

  .main {
    margin: 1rem 1rem 1rem 16rem;
    transition: margin 300ms ease-in-out;
    
    @media (max-width: 1110px) {
      margin: 1rem 1rem 1rem 6rem;
    }
    @media (max-width: 650px) {
      margin: 1rem;
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
		/* display: none; */
		position: fixed;
		z-index: 2;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}

  .modalOverlay {
    position: fixed;
		z-index: 2;
		top: 0;
		width: 100%;
		height: 100%;
  }

  .btn {
    /* width: 100%; */
    padding: 0.6rem;
    border-radius: 0.3rem;
    border: none;
  }

  .form {
    flex-direction: column;
    background-color: #fff;
    max-width: 25rem;
    margin: 2rem auto 0;
    padding: 2rem;
    border-radius: .8rem;
    box-shadow: 0 0 .9rem rgba(0,0,0,0.1);

    h1 {
      margin-bottom: 2rem;
      text-align: center;
    }

    @media (max-width: 400px) {
      padding: 2rem 1rem;
      h1 {
        font-size: 1.6rem;
      }
    }
  }

  .more {
    display: flex;
    margin-top: 1.5rem;
    font-size: 1.15rem;
    a {
      margin-left: .5rem;
      text-decoration: none;
      color: var(--color-secondary);
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 430px) {
      font-size: 1rem;
      /* flex-direction: column; */
      flex-wrap: wrap;
    }
  }
`;

export default GlobalStyles;
