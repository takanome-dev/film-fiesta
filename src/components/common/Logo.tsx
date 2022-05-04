import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../../assets";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 0.5rem;

	.bars {
		cursor: pointer;
		margin-right: 1rem;
		border: none;
		background: none;
	}

	.logo {
		width: 100%;
		height: 2.5rem;

		img {
			width: 100%;
			height: 100%;
		}
	}
`;

type Props = {
	onClick: () => void;
};

const Logo: React.FC<Props> = ({ onClick }) => {
	return (
		<Container>
			<button className="bars" data-bars onClick={onClick}>
				<FaBars color="var(--dark-60)" size={20} />
			</button>
			<Link to="/" className="logo">
				<img src={logo} alt="Vidly logo" />
			</Link>
		</Container>
	);
};

export default Logo;
