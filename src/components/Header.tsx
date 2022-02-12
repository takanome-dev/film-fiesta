import { useContext } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { Context } from "../context/GlobalContext";
import { Container } from "./styles/Header.styled";
import { SearchIcon, UserIcon } from "./svg";

const Header = () => {
	const { searchQuery, onSearch } = useContext(Context);
	return (
		<Container>
			<div className="container">
				<Link to="/" className="logo">
					{/* <img src={logo3} alt="Vidly logo" /> */}
					{/* <img src={logo2} alt="Vidly logo" /> */}
					{/* <img src={logo1} alt="Vidly logo" /> */}
					<img src={logo} alt="Vidly logo" />
				</Link>
				<input
					type="search"
					placeholder="Search..."
					aria-label="Search"
					value={searchQuery}
					onChange={(e) => onSearch?.(e.currentTarget.value)}
				/>
				<div className="search">
					<SearchIcon />
				</div>
				<Link to="/login" className="btn">
					<UserIcon /> &nbsp; Sign in
				</Link>
			</div>
		</Container>
	);
};

export default Header;
