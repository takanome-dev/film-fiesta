import { Link } from "react-router-dom";
import styled from "styled-components";
import { profileLinks } from "./links";

const Container = styled.div`
	background-color: #fff;
	max-width: 12rem;
	width: 100%;
	position: absolute;
	right: 5%;
	top: 70%;
	z-index: 2;
	/* padding: 1rem; */
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);
	transition: all 300ms ease-in-out;

	.links {
		/* display: flex;
		flex-direction: column;
		align-items: flex-start; */
		/* align-items: center; */
		/* padding: 1rem; */
		a {
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			margin-top: 0.5rem;
			padding: 0.8rem 1rem;
			color: var(--color-dark-80);
			&:hover {
				background-color: var(--color-gray-20);
				color: var(--color-dark);
			}
			p {
				margin-left: 1rem;
			}
		}
	}
`;

type Props = {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserModal: React.FC<Props> = ({ setOpenModal, openModal }) => {
	return (
		<>
			{openModal && (
				<div className="modalOverlay" onClick={() => setOpenModal(false)} />
			)}
			{/* {openModal && <Overlay handleClose={() => setOpenModal(false)} />} */}
			<Container>
				<div className="links">
					{profileLinks.map((l, i) => (
						<Link
							to={l.path}
							className="flex"
							onClick={() => setOpenModal(false)}
							key={i}
						>
							{l.icon}
							<p>{l.name}</p>
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};

export default UserModal;
