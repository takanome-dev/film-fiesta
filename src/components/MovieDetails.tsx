import { useEffect } from "react";
import { useQuery } from "react-query";
import { getMovie } from "../services/movie";
import { MovieType } from "../types/MovieType";
import { Container } from "./styles/MovieDetails.styled";
import { AddBookmarkIcon, HeartIcon, ShoppingIcon, StarIcon } from "./svg";
import { MovieDetailsProps } from "./types";

const movieDetails: React.FC<MovieDetailsProps> = ({ match }) => {
	const { data, refetch } = useQuery<MovieType, Error>(
		"getMovie",
		async () => await getMovie(match.params.id),
		{ enabled: false }
	);

	useEffect(() => {
		refetch();
	}, [match.params.id]);

	return (
		<Container>
			<div className="image">
				<img src={data?.url} alt={data?.title} />
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
					<div className="icon btn">
						<AddBookmarkIcon color="var(--color-dark-60)" />
					</div>
					<div className="icon btn">
						<HeartIcon color="var(--color-dark-60)" />
					</div>
				</div>
				<p className="overview">Overview</p>
				<p className="description">{data?.overview}</p>
				<button className="rent-btn btn flex">
					<ShoppingIcon color="var(--color-dark)" />
					<span>Rent now</span>
				</button>
			</div>
		</Container>
	);
};

export default movieDetails;