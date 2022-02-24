import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.2rem;
	width: 100%;

	label {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	textarea {
		font-size: 1.1rem;
		resize: none;
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

	.error {
		margin-top: 1rem;
		font-size: 1rem;
		color: var(--color-primary);
		&::before {
			content: "!";
			color: var(--color-primary);
			margin-right: 0.2rem;
		}
	}
`;

export default Container;
