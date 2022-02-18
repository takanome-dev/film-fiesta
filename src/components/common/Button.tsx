import styled from "styled-components";

type Props = {
	children: React.ReactNode;
	isDisabled: boolean;
	classes: string;
};

const StyledButton = styled.button`
	background-color: ${({ disabled }) =>
		disabled ? "var(--color-secondary-20)" : "var(--color-secondary-60)"};
	color: ${({ disabled }) =>
		disabled ? "var(--color-dark-40)" : "var(--color-dark)"};
	width: 30%;
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

const Button: React.FC<Props> = ({ children, isDisabled, classes }) => {
	return (
		<StyledButton className={classes} disabled={isDisabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
