import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Overlay from "./common/Overlay";
import { bottomLinks, topLinks } from "./links";
import Navigation from "./styles/Sidebar.styled";
import { LogoIcon, SignInIcon, SignOutIcon } from "./svg";

type Props = {
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ open, setIsOpen }) => {
	const { currentRoute, onRouteChange, user } = useContext(Context);
	const condition = open && window.innerWidth <= 650;

	const handleClick = (path: string) => {
		onRouteChange?.(path);
		setIsOpen(false);
	};

	// const handleClose = () => setIsOpen(false)

	return (
		<Navigation>
			{/* <div
				className={condition ? "overlay open" : "overlay"}
				onClick={() => setIsOpen(false)}
			></div> */}
			{open && <Overlay handleClose={() => setIsOpen(false)} />}
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
								onClick={() => handleClick(l.path)}
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
								onClick={() => handleClick(l.path)}
							>
								{l.icon(
									currentRoute === l.path
										? "var(--color-primary)"
										: "var(--color-dark-80)"
								)}
								<p>{l.name}</p>
							</Link>
						))}
						{user && user._id ? (
							<Link
								className={
									currentRoute === "/register"
										? "flex link active"
										: "flex link"
								}
								to="/login"
								onClick={() => onRouteChange?.("/register")}
							>
								<SignOutIcon
									color={
										currentRoute === "/register"
											? "var(--color-primary)"
											: "var(--color-dark-80)"
									}
								/>
								<p>Sign out</p>
							</Link>
						) : (
							<Link
								className={
									currentRoute === "/login" ? "flex link active" : "flex link"
								}
								to="/login"
								onClick={() => onRouteChange?.("/login")}
							>
								<SignInIcon
									color={
										currentRoute === "/login"
											? "var(--color-primary)"
											: "var(--color-dark-80)"
									}
								/>
								<p>Sign in</p>
							</Link>
						)}
					</div>
				</div>
			</div>
		</Navigation>
	);
};

export default Sidebar;
