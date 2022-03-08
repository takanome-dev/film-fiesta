import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import { HeartIcon, RemoveBookmarkIcon, StarIcon } from "./svg";
import AddBookmark from "./svg/Icon.AddBookmark";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ movie }) => {
	const { user } = useContext(Context);
	const isLiked = movie.likes?.find((l: { _id: string }) => user._id === l._id);
	const isBookmarked = movie.bookmarks?.find(
		(l: { _id: string }) => user._id === l._id
	);

	return (
		<div className="card">
			<Link to={`/movies/${movie._id}`}>
				<div className="rate flex">
					<StarIcon /> <p>{movie.voteAverage}</p>
				</div>
				<img src={movie.url} alt={movie.title} />
			</Link>
			<div className="card-hover">
				<h3>{movie.title}</h3>
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
