/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FaStar } from "react-icons/fa";
import Container from "../components/styles/WatchMovie.styled";
import urls from "../utils/movieUrls";

type Props = {
	data: Movies | null;
};

const WatchMovie: React.FC<Props> = ({ data }) => {
	return (
		<Container>
			<div className="video">
				<iframe
					src={urls.embedMovieUrl(data!.id)}
					frameBorder="0"
					width="100%"
					height="100%"
					title="Movie Video"
					allowFullScreen
				></iframe>
			</div>
			<div className="description">
				<h1>{data?.title}</h1>
				<div className="genres">
					{data?.genres?.map((g) => (
						<span key={g.id}>{g.name}</span>
					))}
				</div>
				<div className="rating">
					<p>{data?.release_date}</p>
					<span>&bull;</span>
					<div>
						<FaStar size={20} color="var(--secondary)" />
						<h3>{data?.vote_average}</h3>
					</div>
				</div>
				<h3 className="overview-title">Overview</h3>
				<p className="overview">{data?.overview}</p>
			</div>
		</Container>
	);
};

export default WatchMovie;
