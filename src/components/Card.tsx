/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import urls from "../utils/movieUrls";
import { CardInt } from "./types";

const Card: React.FC<CardInt> = ({ movie, width = "300", height = "300" }) => {
	const url = movie.poster_path ?? movie.backdrop_path;
	const location = useLocation();

	return (
		// <div className="card" aria-label="Movie Card" tabIndex={0}>
		<Link to={`/movies/${movie.id}`} className="card">
			{location.pathname === "/movies" && (
				<div className="rate">
					<FaStar color="var(--yellow)" size={20} /> <p>{movie.vote_average}</p>
				</div>
			)}
			<img
				src={urls.imageUrl(url!)}
				alt={movie.title}
				width={width}
				height={height}
			/>
		</Link>
		// {/* </div> */}
	);
};

export default Card;
