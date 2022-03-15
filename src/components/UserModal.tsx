import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Overlay from "./common/Overlay";
import { profileLinks } from "./links";
import Container from "./styles/UserModal.styled";

type Props = {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserModal: React.FC<Props> = ({ setOpenModal, openModal }) => {
	const { user } = useContext(Context);

	return (
		<>
			<Container>
				{openModal && (
					<Overlay
						zIndex={window.innerWidth > 650 ? 2 : 4}
						bgColor="transparent"
						handleClose={() => setOpenModal(false)}
					/>
				)}
				<div className="wrapper">
					{user.isAdmin && (
						<Link to="/feedbacks" className="feedback">
							My Feedbacks
						</Link>
					)}
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
