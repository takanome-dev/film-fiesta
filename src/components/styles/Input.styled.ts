import styled from "styled-components";
import { appear } from "./Global.styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.2rem;
	width: 100%;
	position: relative;

	.label {
		font-size: 1.1rem;
		/* font-weight: 500; */
		margin-bottom: 0.5rem;
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

	/* .error {
		font-size: 1rem;
		color: var(--color-primary);
		position: absolute;
		background-color: #fff;
		box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.1);
		padding: 0.3rem 0.8rem;
		border-radius: 0.5rem;
		bottom: -65%;
		z-index: 2;
		animation: ${appear} 700ms;

		&::before {
			content: "⚠️";
			color: var(--color-primary);
			margin-right: 0.2rem;
			font-size: 1.2rem;
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
	} */
`;

export default Container;
