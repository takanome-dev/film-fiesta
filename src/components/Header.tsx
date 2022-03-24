import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Avatar from "./common/Avatar";
import Search from "./common/Search";
import { Container } from "./styles/Header.styled";
import { BarsIcon, LogoIcon, UserIcon } from "./svg";
import UserModal from "./UserModal";

type Props = {
	handleOpen: () => void;
};

const Header: React.FC<Props> = ({ handleOpen }) => {
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
				<Link to="/" className="logo flex">
					<LogoIcon />
					<h1>Vidly</h1>
				</Link>
				<Search />
				{/* <input
					type="search"
					id="search"
					placeholder="Search..."
					aria-label="Search movies by title"
					value={searchQuery}
					onChange={(e) => onSearch?.(e.currentTarget.value)}
				/> */}
				{user && user._id ? (
					<div className="avatar">
						<Avatar handleOpenModal={() => setOpenModal(true)} />
					</div>
				) : (
					<Link to="/login" className="btn">
						<UserIcon /> &nbsp; Sign in
					</Link>
				)}
				<div className="bars" onClick={handleOpen}>
					<BarsIcon />
				</div>
			</div>
		</Container>
	);
};

export default Header;
