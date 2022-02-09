import AddBookmark from "./svg/AddBookmark";
import Heart from "./svg/Heart";
import Star from "./svg/Star";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ movie }) => {
	return (
		<div className="card">
			<div className="rate flex">
				<Star /> <p>{movie.voteAverage}</p>
			</div>
			<img src={movie.url} alt={movie.title} />
			<div className="card-hover">
				<h3>{movie.title}</h3>
				<div className="icons flex">
					<button className="icon-container flex">
						<AddBookmark />
					</button>
					<button className="icon-container flex">
						<Heart />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
