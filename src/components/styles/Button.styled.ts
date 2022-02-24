import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${({ disabled }) =>
		disabled ? "var(--color-secondary-20)" : "var(--color-secondary-60)"};
	color: ${({ disabled }) =>
		disabled ? "var(--color-dark-40)" : "var(--color-dark)"};
	width: 50%;
	/* width: 100%; */
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 1rem;
	cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
	&:hover {
		background-color: ${({ disabled }) =>
			disabled ? "var(--color-secondary-20)" : "var(--color-secondary-80)"};
	}

	@media (max-width: 500px) {
		font-size: 1rem;
		width: 100%;
	}
`;
