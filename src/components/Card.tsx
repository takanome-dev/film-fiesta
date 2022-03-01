import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../context/GlobalContext";
import { deleteFavorite, saveFavorite } from "../services/like_bookmark";
import { HeartIcon, RemoveBookmarkIcon, StarIcon } from "./svg";
import AddBookmark from "./svg/Icon.AddBookmark";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ movie }) => {
	const { bookmark, onBookmark, user, onRefetchMovie } = useContext(Context);
	const isLike = movie.likes?.find((l) => user._id === l.userId);

	const handleLike = async () => {
		try {
			if (isLike) {
				const data = await deleteFavorite(movie._id, user._id);
				onRefetchMovie?.();
				return toast.success(data);
			}

			const data = await saveFavorite({
				userId: user._id,
				movieId: movie._id,
			});
			onRefetchMovie?.();
			return toast.success(data);
		} catch (err: any) {
			return toast.error(err.data);
		}
	};

	const handleBookmark = () => {
		onBookmark?.(!bookmark);
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
						{bookmark ? (
							<RemoveBookmarkIcon />
						) : (
							<AddBookmark color="var(--color-dark)" />
						)}
					</button>
					<button
						className={
							isLike ? "icon-container liked flex" : "icon-container flex"
						}
						onClick={handleLike}
					>
						<HeartIcon
							color={isLike ? "var(--color-primary)" : "var(--color-dark)"}
							fillColor={isLike ? "var(--color-primary)" : "none"}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
