import styled from "styled-components";

const Container = styled.form`
	max-width: 40rem;

	fieldset {
		border: none;
		display: flex;
		flex-direction: column;
		width: 100%;

		label {
			margin-bottom: 0.5rem;
			font-weight: 500;
			&::after {
				content: "*";
				color: var(--color-primary);
				margin-left: 0.1rem;
			}
		}

		.input {
			padding: 0.8rem 1rem;
			color: var(--color-dark-80);
			background-color: var(--color-background);
			border: none;
			border-radius: 0.6rem;
			transition: outline 100ms ease;
			&:focus {
				outline: 0.35rem solid var(--color-secondary-20);
			}
		}

		input {
			margin-bottom: 1rem;
		}

		textarea {
			max-width: 36rem;
			max-height: 10rem;
			font-size: 1.1rem;
		}
	}

	button {
		background-color: var(--color-secondary-40);
		margin-top: 1.5rem;
		padding: 1rem;
		font-weight: 500;
		cursor: pointer;
		&:hover {
			background-color: var(--color-secondary-60);
		}
		@media (max-width: 500px) {
			width: 100%;
		}
	}
`;

export default Container;
