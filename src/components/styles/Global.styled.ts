import { createGlobalStyle, keyframes } from "styled-components";

export const slideIn = keyframes`
	from {
    transform: translateY(-10rem);
  }
  to {
    transform: translateY(0);
  }
`;

export const appear = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

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
  * @reference: https://www.joshwcomeau.com/css/custom-css-reset/ 
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
    margin: 1rem 1rem 2rem 16rem;
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

  .btn {
    /* width: 100%; */
    padding: 0.6rem;
    border-radius: 0.3rem;
    border: none;
  }

  .error {
		/* margin-top: 1rem; */
		font-size: 1rem;
		color: var(--color-primary);
		position: absolute;
		background-color: #fff;
		box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.2);
		padding: 0.3rem 0.8rem;
		border-radius: 0.5rem;
		bottom: -50%;
		z-index: 2;
		animation: ${appear} 700ms;

		&::before {
			content: "❌";
			color: var(--color-primary);
			margin-right: 0.2rem;
		}

		&::after {
			content: " ";
			position: absolute;
			bottom: 100%;
			left: 50%;
			border-width: 0.5rem;
			margin-left: -0.5rem;
			border-style: solid;
			border-color: transparent transparent #fff transparent;
		}
	}

  .form {
    h1 {
      margin-bottom: 2rem;
      text-align: center;
    }

    @media (max-width: 400px) {
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
