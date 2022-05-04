import { createGlobalStyle, keyframes } from "styled-components";

/**
 * @see {@link https://www.joshwcomeau.com/css/custom-css-reset/ }
 * for some css reset property
 */

export const slideIn = keyframes`
	from {
    transform: translateY(-10rem);
  }
  to {
    transform: translateY(0);
  }
`;

export const navLoad = keyframes`
	from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const sidebarLoad = keyframes`
	from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
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

export const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200,20%,70%);
  }
  50% {
    background-color: hsl(200,20%,80%);
  }
  100% {
    background-color: hsl(200,20%,90%);
  }
`;

const GlobalStyles = createGlobalStyle`

  :root {
    /* primary: #EF233C; */
    --primary: hsla(353, 86%, 54%, 1);
    --primary-90: hsla(353, 86%, 54%, 0.9);
    --primary-80: hsla(353, 86%, 54%, 0.8);
    --primary-70: hsla(353, 86%, 54%, 0.7);
    --primary-60: hsla(353, 86%, 54%, 0.6);
    --primary-50: hsla(353, 86%, 54%, 0.5);
    --primary-40: hsla(353, 86%, 54%, 0.4);
    --primary-30: hsla(353, 86%, 54%, 0.3);
    --primary-20: hsla(353, 86%, 54%, 0.2);
    --primary-10: hsla(353, 86%, 54%, 0.1);
    /* secondary: #269EE1; */
    --secondary: hsla(202, 76%, 52%, 1);
    --secondary-90: hsla(202, 76%, 52%, 0.9);
    --secondary-80: hsla(202, 76%, 52%, 0.8);
    --secondary-70: hsla(202, 76%, 52%, 0.7);
    --secondary-60: hsla(202, 76%, 52%, 0.6);
    --secondary-50: hsla(202, 76%, 52%, 0.5);
    --secondary-40: hsla(202, 76%, 52%, 0.4);
    --secondary-30: hsla(202, 76%, 52%, 0.3);
    --secondary-20: hsla(202, 76%, 52%, 0.2);
    --secondary-10: hsla(202, 76%, 52%, 0.1);
    /* --dark: #2B2D42; */
    --dark: hsla(235, 21%, 21%, 1);
    --dark-90: hsla(235, 21%, 21%, 0.9);
    --dark-80: hsla(235, 21%, 21%, 0.8);
    --dark-70: hsla(235, 21%, 21%, 0.7);
    --dark-60: hsla(235, 21%, 21%, 0.6);
    --dark-50: hsla(235, 21%, 21%, 0.5);
    --dark-40: hsla(235, 21%, 21%, 0.4);
    --dark-30: hsla(235, 21%, 21%, 0.3);
    --dark-20: hsla(235, 21%, 21%, 0.2);
    --dark-10: hsla(235, 21%, 21%, 0.1);
    /* --gray: #8D99AE; */
    --gray:  hsla(218, 17%, 62%, 1);
    --gray-90: hsla(218, 17%, 62%, 0.9);
    --gray-80: hsla(218, 17%, 62%, 0.8);
    --gray-70: hsla(218, 17%, 62%, 0.7);
    --gray-60: hsla(218, 17%, 62%, 0.6);
    --gray-50: hsla(218, 17%, 62%, 0.5);
    --gray-40: hsla(218, 17%, 62%, 0.4);
    --gray-30: hsla(218, 17%, 62%, 0.3);
    --gray-20: hsla(218, 17%, 62%, 0.2);
    --gray-10: hsla(218, 17%, 62%, 0.1);
    /* --background: #EDF2F4; */
    --background: hsla(197, 24%, 94%, 1);
    --background-90: hsla(197, 24%, 94%, 0.9);
    --background-80: hsla(197, 24%, 94%, 0.8);
    --background-70: hsla(197, 24%, 94%, 0.7);
    --background-60: hsla(197, 24%, 94%, 0.6);
    --background-50: hsla(197, 24%, 94%, 0.5);
    --background-40: hsla(197, 24%, 94%, 0.4);
    --background-30: hsla(197, 24%, 94%, 0.3);
    --background-20: hsla(197, 24%, 94%, 0.2);
    --background-10: hsla(197, 24%, 94%, 0.1);
    --yellow: #ffcb21;
  }

  :root {
    font-size: 16px;
    --header-height: 3.5rem;
    --animation-duration: 300ms;
    --animation-timing-curve: ease-in-out;
  }

  ::-webkit-scrollbar {
    width: .9rem;
  }

  /* ::-webkit-scrollbar-track {
    border-radius: 0.7rem;
    box-shadow: inset 0 0 5px var(--color-gray); 
  } */

  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-60);
    border-radius: 0.7rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray-80);
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
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--background);
    color: var(--dark-80);
    font-family: 'Montserrat', sans-serif;
  }

  body.open {
    overflow: hidden;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    padding: 0.6rem;
    border-radius: 0.3rem;
    border: none;
  }

  .error {
    --animation-duration: 700ms;
		animation: ${appear} var(--animation-duration);
		background-color: #fff;
		box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.2);
		border-radius: 0.5rem;
		color: var(--primary);
		font-size: 1rem;
		position: absolute;
		padding: 0.3rem 0.8rem;
		top: 100%;
		z-index: 2;

		&::before {
			content: "❌";
			color: var(--primary);
			margin-right: 0.2rem;
		}

		&::after {
			border-style: solid;
			border-color: transparent transparent #fff transparent;
			border-width: 0.5rem;
			bottom: 100%;
			content: " ";
			left: 50%;
			margin-left: -0.5rem;
			position: absolute;
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
    font-size: 1.15rem;
    margin-top: 1.5rem;

    a {
      color: var(--secondary);
      font-weight: 500;
      margin-left: .5rem;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 430px) {
      font-size: 1rem;
      flex-wrap: wrap;
    }
  }

  .loading {
    left: 50%;
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
  }
`;

export default GlobalStyles;
