import { useContext } from "react";
import { Context } from "../../context/GlobalContext";
import Container from "../styles/Avatar.styled";

type Props = {
	handleOpenModal: () => void;
};

const Avatar: React.FC<Props> = ({ handleOpenModal }) => {
	const { user } = useContext(Context);

	return (
		<Container className="flex" onClick={handleOpenModal}>
			<img src={user.imageUrl} alt="User Avatar" />
		</Container>
	);
};

export default Avatar;
