import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import { bottomLinks, topLinks } from "./links";
import Navigation from "./styles/Sidebar.styled";
import { LogoIcon } from "./svg";

type Props = {
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ open, setIsOpen }) => {
	const { currentRoute, onRouteChange } = useContext(Context);
	const condition = open && window.innerWidth <= 650;

	return (
		<Navigation>
			<div
				className={condition ? "overlay open" : "overlay"}
				onClick={() => setIsOpen(false)}
			></div>
			<div className={condition ? "menu open" : "menu"}>
				<Link to="/" className={condition ? "logo open" : "logo"}>
					<LogoIcon />
					<h1>Vidly</h1>
				</Link>
				<div className="sidebar flex">
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
								<p>{l.name}</p>
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
