import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Avatar from "./common/Avatar";
import Overlay from "./common/Overlay";
import FeedBack from "./FeedBack";
import { topLinks } from "./links";
import Navigation from "./styles/Sidebar.styled";
import { FeedBackIcon, LogoIcon, SignInIcon, SignOutIcon } from "./svg";
import UserModal from "./UserModal";

type Props = {
	open: boolean;
	openModal: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({
	open,
	setIsOpen,
	openModal,
	setOpenModal,
}) => {
	const [openFeedback, setOpenFeedback] = useState(false);
	const { currentRoute, onRouteChange, user } = useContext(Context);
	const condition = open && window.innerWidth <= 650;

	const handleClick = (path: string) => {
		onRouteChange?.(path);
		setIsOpen(false);
	};

	return (
		<>
			{openFeedback && (
				<FeedBack
					openFeedback={openFeedback}
					setOpenFeedback={setOpenFeedback}
				/>
			)}
			<Navigation>
				{open && (
					<Overlay
						bgColor="rgba(0, 0, 0, 0.2)"
						zIndex={3}
						handleClose={() => setIsOpen(false)}
					/>
				)}
				{openModal && (
					<UserModal openModal={openModal} setOpenModal={setOpenModal} />
				)}
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
											: "var(--color-dark-60)"
									)}
									<p>{l.name}</p>
								</Link>
							))}
						</div>
						<div className="bottom-links">
							<span className="flex link" onClick={() => setOpenFeedback(true)}>
								<FeedBackIcon color="var(--color-dark-60)" />
								<p>Feedback</p>
							</span>
							{user && user._id && !condition && (
								<Link className="flex link" to="/logout">
									<SignOutIcon color="var(--color-dark-60)" />
									<p>Sign out</p>
								</Link>
							)}
							{!user._id && (
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
							{condition && user && user._id && (
								<div className="user" onClick={() => setOpenModal(true)}>
									<Avatar handleOpenModal={() => setOpenModal(true)} />
									<p>{user.name}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</Navigation>
		</>
	);
};

export default Sidebar;
