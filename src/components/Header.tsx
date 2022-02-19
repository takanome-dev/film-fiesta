import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import { Container } from "./styles/Header.styled";
import { BarsIcon, LogoIcon } from "./svg";
import UserModal from "./UserModal";

type Props = {
	handleOpen: () => void;
};

const Header: React.FC<Props> = ({ handleOpen }) => {
	const { searchQuery, onSearch } = useContext(Context);
	const [openModal, setOpenModal] = useState(false);

	// useEffect((e: EventTarget) => {
	// 	if(e)
	// },[])

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
				<input
					type="search"
					id="search"
					placeholder="Search..."
					aria-label="Search"
					value={searchQuery}
					onChange={(e) => onSearch?.(e.currentTarget.value)}
				/>
				{/* <Link to="/login" className="btn">
					<UserIcon /> &nbsp; Sign in
				</Link> */}
				<div className="avatar flex" onClick={() => setOpenModal(true)}>
					<p>T</p>
				</div>
				<div className="bars" onClick={handleOpen}>
					<BarsIcon />
				</div>
			</div>
		</Container>
	);
};

export default Header;
