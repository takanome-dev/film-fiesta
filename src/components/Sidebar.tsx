import { useContext } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { Context } from "../context/GlobalContext";
import { bottomLinks, topLinks } from "./links";
import Navigation from "./styles/Sidebar.styled";

type Props = {
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ open, setIsOpen }) => {
	const { currentRoute, onRouteChange, onCategorySelected, selectedCategory } =
		useContext(Context);
	console.log({ selectedCategory });
	const condition = open && window.innerWidth <= 650;

	return (
		<Navigation>
			<div
				className={condition ? "overlay open" : "overlay"}
				onClick={() => setIsOpen(false)}
			></div>
			<div className={condition ? "menu open" : "menu"}>
				<div className="sidebar flex">
					<Link to="/" className={condition ? "logo open" : "logo"}>
						<img src={logo} alt="Vidly logo" />
					</Link>
					<div className="top-links">
						{topLinks.map((l, i) => (
							<Link
								key={i}
								className={
									currentRoute === l.path ? "flex link active" : "flex link"
								}
								to={l.path}
								onClick={() => onRouteChange?.(l.path)}
							>
								{l.icon(
									currentRoute === l.path
										? "var(--color-primary)"
										: "var(--color-dark-80)"
								)}
								<p onClick={() => onCategorySelected?.(l.category)}>{l.name}</p>
							</Link>
						))}
					</div>
					<div className="bottom-links">
						{bottomLinks.map((l, i) => (
							<Link
								key={i}
								className={
									currentRoute === l.path ? "flex link active" : "flex link"
								}
								to={l.path}
								onClick={() => onRouteChange?.(l.path)}
							>
								{l.icon(
									currentRoute === l.path
										? "var(--color-primary)"
										: "var(--color-dark-80)"
								)}
								<p>{l.name}</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</Navigation>
	);
};

export default Sidebar;
