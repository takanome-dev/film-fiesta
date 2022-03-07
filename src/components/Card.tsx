import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../context/GlobalContext";
import { deleteBookmark, saveBookmark } from "../services/bookmark";
import { deleteFavorite, saveFavorite } from "../services/favorite";
import { HeartIcon, RemoveBookmarkIcon, StarIcon } from "./svg";
import AddBookmark from "./svg/Icon.AddBookmark";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ movie }) => {
	const { user, onRefetchMovie, onRefetchFavorites, onRefetchBookmarks } =
		useContext(Context);

	const isLiked = movie.likes?.find((l: { _id: string }) => user._id === l._id);

	const isBookmarked = movie.bookmarks?.find(
		(l: { _id: string }) => user._id === l._id
	);

	const handleLike = async () => {
		if (!user._id)
			return toast.info("You need to login before performing any action");

		try {
			if (isLiked) {
				const data = await deleteFavorite(movie._id, user._id);
				onRefetchMovie?.();
				onRefetchFavorites?.();
				return toast.success(data);
			}

			const data = await saveFavorite({
				userId: user._id,
				movieId: movie._id,
			});
			onRefetchMovie?.();
			onRefetchFavorites?.();
			return toast.success(data);
		} catch (err: any) {
			return toast.error(err.data);
		}
	};

	const handleBookmark = async () => {
		if (!user._id)
			return toast.info("You need to login before performing any action");

		try {
			if (isBookmarked) {
				const data = await deleteBookmark(movie._id, user._id);
				onRefetchMovie?.();
				onRefetchBookmarks?.();
				return toast.success(data);
			}

			const data = await saveBookmark({
				userId: user._id,
				movieId: movie._id,
			});
			onRefetchMovie?.();
			onRefetchBookmarks?.();
			return toast.success(data);
		} catch (err: any) {
			return toast.error(err.data);
		}
	};

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
					<button className="icon-container flex" onClick={handleBookmark}>
						{isBookmarked ? (
							<RemoveBookmarkIcon />
						) : (
							<AddBookmark color="var(--color-dark)" />
						)}
					</button>
					<button
						className={
							isLiked ? "icon-container liked flex" : "icon-container flex"
						}
						onClick={handleLike}
					>
						<HeartIcon
							color={isLiked ? "var(--color-primary)" : "var(--color-dark)"}
							fillColor={isLiked ? "var(--color-primary)" : "none"}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
