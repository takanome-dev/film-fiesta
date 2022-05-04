import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.2rem;
	position: relative;
	width: 100%;

	label {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	textarea {
		background-color: var(--background);
		border: none;
		border-radius: 0.6rem;
		color: var(--dark-80);
		font-size: 1.1rem;
		padding: 0.8rem 1rem;
		resize: none;
		transition: outline 100ms ease;
		&:focus {
			outline: 0.35rem solid var(--secondary-20);
		}
		&::placeholder {
			color: var(--gray-60);
		}
	}
`;

export default Container;
