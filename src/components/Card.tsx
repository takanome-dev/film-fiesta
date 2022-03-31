import { useContext } from "react";
import { Link } from "react-router-dom";
import { DefaultImage } from "../assets";
import { Context } from "../context/GlobalContext";
import { HeartIcon, RemoveBookmarkIcon, StarIcon } from "./svg";
import AddBookmark from "./svg/Icon.AddBookmark";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ movie }) => {
	const { favorites, bookmarks } = useContext(Context);
	const isLiked = favorites.find((f: { _id: string }) => movie._id === f._id);
	const isBookmarked = bookmarks.find(
		(b: { _id: string }) => movie._id === b._id
	);

	return (
		<div className="card" aria-label="Movie Card" tabIndex={0}>
			<Link to={`/movies/${movie._id}`}>
				<div className="rate flex">
					<StarIcon /> <p>{movie.voteAverage}</p>
				</div>
				<img
					src={movie.url || DefaultImage}
					alt={movie.title}
					width="500"
					height="500"
				/>
			</Link>
			<div className="card-hover">
				<p>{movie.title}</p>
				<div className="icons flex">
					{isBookmarked ? (
						<RemoveBookmarkIcon isBookmarked={isBookmarked} movie={movie} />
					) : (
						<AddBookmark
							color="var(--color-dark-60)"
							isBookmarked={isBookmarked}
							movie={movie}
						/>
					)}
					<HeartIcon
						color={isLiked ? "var(--color-primary)" : "var(--color-dark)"}
						fillColor={isLiked ? "var(--color-primary)" : "none"}
						isLiked={isLiked}
						movie={movie}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
