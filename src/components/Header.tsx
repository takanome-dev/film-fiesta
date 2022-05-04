import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Avatar from "./common/Avatar";
import Logo from "./common/Logo";
import SearchInput from "./common/SearchInput";
import { Container } from "./styles/Header.styled";
import UserModal from "./UserModal";

type Props = {
	onClick: () => void;
};

const Header: React.FC<Props> = ({ onClick }) => {
	const { user } = useContext(Context);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const handleResize = () => window.innerWidth < 650 && setOpenModal(false);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<Container>
			{openModal && (
				<UserModal openModal={openModal} setOpenModal={setOpenModal} />
			)}
			<div className="container">
				<Logo onClick={onClick} />
				<div>
					<div className="search-input">
						<SearchInput />
					</div>
					<Link to="/search" className="search-icon">
						<FaSearch color="var(--color-dark-60)" size={20} />
					</Link>
					{user && user._id && (
						<div className="avatar">
							<Avatar handleOpenModal={() => setOpenModal(true)} />
						</div>
					)}
				</div>
			</div>
		</Container>
	);
};

export default Header;
