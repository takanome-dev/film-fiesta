import { HeartIcon, StarIcon } from "./svg";
import AddBookmark from "./svg/Icon.AddBookmark";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ movie }) => {
	return (
		<div className="card">
			<div className="rate flex">
				<StarIcon /> <p>{movie.voteAverage}</p>
			</div>
			<img src={movie.url} alt={movie.title} />
			<div className="card-hover">
				<h3>{movie.title}</h3>
				<div className="icons flex">
					<button className="icon-container flex">
						<AddBookmark color="var(--color-dark)" />
					</button>
					<button className="icon-container flex">
						<HeartIcon color="var(--color-dark)" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
