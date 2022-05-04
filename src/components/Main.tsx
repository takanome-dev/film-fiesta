import styled from "styled-components";
import Routes from "../app/Routes";
import Sidebar from "./Sidebar";

const Container = styled.main`
	.content {
		display: grid;
		grid-template-columns: 5rem 1fr;
		margin-right: 1rem;
		margin-left: 0;
		gap: 1rem;
	}

	.content.open {
		.main {
			margin-left: 7rem;
			transition: margin var(--animation-duration) var(--animation-timing-curve);
		}
	}

	@media (max-width: 650px) {
		.content {
			grid-template-columns: 1fr;
			margin: 0 1rem;
		}

		.content.open {
			.main {
				margin-left: 0;
			}
		}
	}
`;

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	return (
		<Container>
			<div className="content" data-main>
				<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
				<Routes />
			</div>
		</Container>
	);
};

export default Main;
