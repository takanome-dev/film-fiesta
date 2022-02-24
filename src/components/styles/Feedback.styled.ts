import styled from "styled-components";

const Container = styled.div`
	.wrapper {
		position: absolute;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* transition: transform 1s ease-in-out; */
		/* transform: translate(-50%, -50%); */

		h1 {
			margin-bottom: 2rem;
			text-align: center;
		}

		@media (max-width: 400px) {
			h1 {
				font-size: 1.6rem;
			}
		}

		form {
			/* border: none; */
			display: flex;
			flex-direction: column;
			/* max-width: 28rem; */
			width: 100%;

			/* label {
				margin-bottom: 0.5rem;
				font-weight: 500;
				&::after {
					content: "*";
					color: var(--color-primary);
					margin-left: 0.1rem;
				}
			} */

			/* .input {
				padding: 0.8rem 1rem;
				color: var(--color-dark-80);
				background-color: var(--color-background);
				border: none;
				border-radius: 0.6rem;
				transition: outline 100ms ease;
				&:focus {
					outline: 0.35rem solid var(--color-secondary-20);
				}
			} */

			/* input {
				margin-bottom: 1rem;
			} */

			/* textarea {
				font-size: 1.1rem;
				resize: none;
			} */

			button {
				padding: 1rem;
				/* background-color: var(--color-secondary-40);
				margin-top: 1.5rem;
				font-weight: 500;
				cursor: pointer;
				&:hover {
					background-color: var(--color-secondary-60);
				} */
				width: 100%;
				/* @media (max-width: 500px) {
					width: 100%;
				} */
			}
		}
	}

	/* .wrapper.open {
		transform: translate(-50%, -50%);
		transition: transform 1s ease-in-out;
	} */
`;

export default Container;
