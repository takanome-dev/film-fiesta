/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BiCameraMovie } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Overlay from "./common/Overlay";
import Container from "./styles/MovieTrailer";

type Props = {
	videos: VideoTrailer[] | undefined;
	openTrailer: boolean;
	handleClose: () => void;
};

// TODO: limit number of videos to 3s
const MovieTrailer: React.FC<Props> = ({
	videos,
	openTrailer,
	handleClose,
}) => {
	if (!openTrailer) return null;

	return (
		<Container>
			<Overlay zIndex={3} bgColor="rgba(0,0,0,0.2)" handleClose={handleClose} />
			<div className="wrapper">
				<div className="header">
					<div>
						<BiCameraMovie size={30} color="var(--dark-80)" />
						<p>Trailer</p>
					</div>
					<button onClick={handleClose}>
						<FaTimes size={20} color="var(--dark-80)" />
					</button>
				</div>
				{videos!.length > 0 &&
					videos?.map((v) => (
						<div className="content" key={v.key}>
							<h3>{v.name}</h3>
							<div className="video">
								<iframe
									src={`https://www.youtube.com/embed/${v.key}`}
									frameBorder="0"
									title="Youtube Video"
									width="100%"
									height="300"
									allowFullScreen
								></iframe>
							</div>
						</div>
					))}
			</div>
		</Container>
	);
};

export default MovieTrailer;
