import { useContext, useEffect, useState } from "react";
import { FaRegComment, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Avatar from "./common/Avatar";
import Logo from "./common/Logo";
import Overlay from "./common/Overlay";
import FeedBack from "./FeedBack";
import links from "./links";
import Navigation from "./styles/Sidebar.styled";
import UserModal from "./UserModal";

type Props = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
	const [openFeedback, setOpenFeedback] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const { currentRoute, onRouteChange, user } = useContext(Context);
	const condition = isOpen && window.innerWidth <= 650;

	const handleClick = (path: string) => {
		onRouteChange?.(path);
		setIsOpen(false);
	};

	const handleClose = () => {
		const sidebar = document.querySelector("[data-sidebar]");
		if (isOpen && window.innerWidth <= 650) {
			sidebar?.classList.toggle("open");
			setIsOpen(!isOpen);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 650) {
				setOpenModal(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<>
			{openFeedback && (
				<FeedBack
					openFeedback={openFeedback}
					setOpenFeedback={setOpenFeedback}
				/>
			)}
			<Navigation>
				{condition && (
					<Overlay
						bgColor="rgba(0, 0, 0, 0.2)"
						zIndex={3}
						handleClose={() => {
							document
								.querySelector("[data-sidebar]")
								?.classList.remove("open");
							setIsOpen(false);
						}}
					/>
				)}
				{openModal && (
					<UserModal openModal={openModal} setOpenModal={setOpenModal} />
				)}
				<div className="container" data-sidebar>
					<div className="logo-container">
						<Logo onClick={handleClose} />
					</div>
					<div className="sidebar">
						<div className="top-links">
							{links.map((l, i) => (
								<Link
									key={i}
									className={currentRoute === l.path ? "link active" : "link"}
									to={l.path}
									onClick={() => handleClick(l.path)}
								>
									{l.icon(
										currentRoute === l.path
											? "var(--primary)"
											: "var(--dark-60)"
									)}
									<p className="link-name">{l.name}</p>
								</Link>
							))}
						</div>
						<div className="bottom-links">
							<span
								className="link"
								onClick={() => setOpenFeedback(true)}
								tabIndex={0}
							>
								<FaRegComment color="var(--dark-60)" size={22} />
								<p className="link-name">Feedback</p>
							</span>
							{user && user._id && !condition && (
								<Link className="link" to="/logout">
									<FaSignOutAlt color="var(--dark-60)" size={22} />
									<p className="link-name">Sign out</p>
								</Link>
							)}
							{!user._id && (
								<Link
									className={currentRoute === "/login" ? "link active" : "link"}
									to="/login"
									onClick={() => onRouteChange?.("/login")}
								>
									<FaSignInAlt
										color={
											currentRoute === "/login"
												? "var(--primary)"
												: "var(--dark-60)"
										}
										size={22}
									/>
									<p className="link-name">Sign in</p>
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
					<p className="copy">&copy; takanome_dev</p>
				</div>
			</Navigation>
		</>
	);
};

export default Sidebar;
