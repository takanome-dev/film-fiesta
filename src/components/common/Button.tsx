import { StyledButton } from "../styles/Button.styled";

type Props = {
	children: React.ReactNode;
	isDisabled: boolean;
	classes: string;
};

const Button: React.FC<Props> = ({ children, isDisabled, classes }) => {
	return (
		<StyledButton className={classes} disabled={isDisabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
