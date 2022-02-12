import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import { bottomLinks, topLinks } from "./links";
import Aside from "./styles/Sidebar.styled";

const Sidebar = () => {
	const { currentRoute, onRouteChange } = useContext(Context);

	return (
		<Aside>
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
									: "var(--color-dark)"
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
									: "var(--color-dark)"
							)}
							<p>{l.name}</p>
						</Link>
					))}
				</div>
			</div>
		</Aside>
	);
};

export default Sidebar;

// return (
// 	<Aside>
// 		<div className="sidebar flex">
// 			<div className="top-links">
// 				<Link className="flex link active" to="/">
// 					<Icon.Home color="var(--color-primary)" />
// 					<p>Home</p>
// 				</Link>
// 				<Link className="flex link" to="/trending">
// 					<Icon.Trending />
// 					<p>Trending</p>
// 				</Link>
// 				<Link className="flex link" to="/popular">
// 					<Icon.Fire />
// 					<p>Popular</p>
// 				</Link>
// 				<Link className="flex link" to="/bookmarks">
// 					<Icon.Bookmark />
// 					<p>Bookmarks</p>
// 				</Link>
// 				<Link className="flex link" to="/favorites">
// 					<Icon.Heart />
// 					<p>Favorites</p>
// 				</Link>
// 			</div>
// 			<div className="bottom-links">
// 				<Link className="flex link" to="/settings">
// 					<Icon.Settings />
// 					<p>Settings</p>
// 				</Link>
// 				<Link className="flex link" to="/feedback">
// 					<Icon.FeedBack />
// 					<p>Feedback</p>
// 				</Link>
// 				<Link className="flex link" to="/register">
// 					<Icon.SignIn />
// 					<p>Sign in</p>
// 				</Link>
// 			</div>
// 		</div>
// 	</Aside>
// );
