import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${({ disabled }) =>
		disabled ? "var(--secondary-20)" : "var(--secondary-60)"};
	color: ${({ disabled }) => (disabled ? "var(--dark-40)" : "var(--dark)")};
	cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 1rem;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 0.5rem;
	}

	&:hover {
		background-color: ${({ disabled }) =>
			disabled ? "var(--secondary-20)" : "var(--secondary-80)"};
	}

	@media (max-width: 500px) {
		font-size: 1rem;
		width: 100%;
	}
`;
