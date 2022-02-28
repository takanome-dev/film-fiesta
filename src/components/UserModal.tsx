import { Link } from "react-router-dom";
import Overlay from "./common/Overlay";
import { profileLinks } from "./links";
import Container from "./styles/UserModal.styled";

type Props = {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserModal: React.FC<Props> = ({ setOpenModal, openModal }) => {
	return (
		<Container>
			{openModal && (
				<Overlay
					zIndex={window.innerWidth > 650 ? 2 : 4}
					bgColor="transparent"
					handleClose={() => setOpenModal(false)}
				/>
			)}
			<div className="wrapper">
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
	);
};

export default UserModal;
