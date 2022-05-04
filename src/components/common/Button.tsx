import { IconType } from "react-icons/lib";
import { StyledButton } from "../styles/Button.styled";

type Props = {
	children: React.ReactNode;
	isDisabled: boolean;
	classes: string;
	Icon?: IconType;
	handleClick?: () => void;
};

const Button: React.FC<Props> = ({
	children,
	isDisabled,
	classes,
	Icon,
	handleClick,
}) => {
	return (
		<StyledButton
			className={classes}
			disabled={isDisabled}
			onClick={handleClick}
		>
			{Icon && <Icon size={22} />}
			<p>{children}</p>
		</StyledButton>
	);
};

export default Button;
