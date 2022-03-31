import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { DefaultImage } from "../assets";
import { Container } from "../components/styles/MovieDetails.styled";
import {
	AddBookmarkIcon,
	HeartIcon,
	RemoveBookmarkIcon,
	ShoppingIcon,
	StarIcon,
} from "../components/svg";
import { MovieDetailsProps } from "../components/types";
import { Context } from "../context/GlobalContext";
import { getMovie } from "../services/movie";
import { MovieType } from "../types/MovieType";

const MovieDetails: React.FC<MovieDetailsProps> = ({ match, setMovieId }) => {
	const { favorites, bookmarks } = useContext(Context);

	const { data, refetch } = useQuery<MovieType, Error>(
		"getMovie",
		async () => await getMovie(match.params.id),
		{ enabled: false }
	);

	useEffect(() => {
		refetch();
		setMovieId(match.params.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [match.params.id]);

	const isLiked = favorites.find((f: { _id: string }) => data?._id === f._id);

	const isBookmarked = bookmarks.find(
		(b: { _id: string }) => data?._id === b._id
	);

	return (
		<Container>
			<div className="image">
				<img
					src={data?.url || DefaultImage}
					alt={data?.title}
					width="500"
					height="500"
				/>
			</div>
			<div className="desc">
				<h1>{data?.title}</h1>
				<div className="info">
					<p>{data?.dateRelease}</p>&nbsp; -<span>{data?.genre.name}</span>
				</div>
				<div className="buttons">
					<div className="rental-rate btn">
						<h3>${data?.dailyRentalRate} / day</h3>
					</div>
					<div className="rate btn flex">
						<StarIcon /> <h3>{data?.voteAverage}</h3>
					</div>
					{isBookmarked ? (
						<RemoveBookmarkIcon
							isBookmarked={isBookmarked}
							movie={data}
							refetch={refetch}
						/>
					) : (
						<AddBookmarkIcon
							color="var(--color-dark-60)"
							isBookmarked={isBookmarked}
							movie={data}
							refetch={refetch}
						/>
					)}
					<HeartIcon
						color={isLiked ? "var(--color-primary)" : "var(--color-dark-60)"}
						fillColor={isLiked ? "var(--color-primary)" : "none"}
						isLiked={isLiked}
						movie={data}
						refetch={refetch}
					/>
				</div>
				<p className="overview">Overview</p>
				<p className="description">{data?.overview}</p>
				<Link to="/checkout" className="rent-btn">
					<button className="btn flex">
						<ShoppingIcon color="var(--color-dark)" />
						<span>Rent now</span>
					</button>
				</Link>
			</div>
		</Container>
	);
};

export default MovieDetails;
