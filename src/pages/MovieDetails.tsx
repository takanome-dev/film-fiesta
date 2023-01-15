import { useEffect, useState } from 'react';
import { FaPlayCircle, FaStar, FaYoutube } from 'react-icons/fa';
import Button from '../components/common/Button';
import Slider from '../components/common/Slider';
import MovieTrailer from '../components/MovieTrailer';
import { Container } from '../components/styles/MovieDetails.styled';
import urls from '../utils/movieUrls';
import WatchMovie from './WatchMovie';
import useMovieDetails from '@/hooks/useMovieDetails';
import Loader from '@/components/common/Loader';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const [watchMovie, setWatchMovie] = useState(false);
  const { movieId } = useParams();
  // TODO: remove console.log
  console.log({ movieId });

  const { movie, loading, refetchMovie } = useMovieDetails(Number(movieId));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    refetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  // TODO: move loader to the middle of the page
  if (loading || !movie?.data.backdrop_path)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Loader size={50} />
      </div>
    );

  const bgImage = movie?.data?.backdrop_path;
  const imageUrl = movie?.data?.poster_path;

  return (
    <>
      {watchMovie ? (
        <>
          <WatchMovie data={movie?.data ?? null} />
        </>
      ) : (
        <Container>
          <div
            className="movie-details"
            style={{
              backgroundImage: `url(${urls.ogImageUrl(bgImage!)})`,
            }}
          >
            <div className="details-container">
              <div className="image">
                <img src={urls.imageUrl(imageUrl!)} alt="" />
              </div>
              <div className="description">
                <h1>{movie?.data?.title}</h1>
                <div className="genres">
                  {movie?.data?.genres?.map((g) => (
                    <span key={g.id}>{g.name}</span>
                  ))}
                </div>
                <div className="rating">
                  <p>{movie?.data?.release_date}</p>
                  <span>&bull;</span>
                  <div>
                    <FaStar size={20} color="var(--secondary)" />
                    <h3>{movie?.data?.vote_average}</h3>
                  </div>
                  <span>&bull;</span>
                  <div>
                    <p>{movie?.data?.popularity}</p>
                    <p>Votes</p>
                  </div>
                </div>
                <p className="overview-title">Overview</p>
                <p className="overview">{movie?.data?.overview}</p>
                <div className="button-container">
                  <Button
                    classes="btn"
                    isDisabled={false}
                    Icon={FaPlayCircle}
                    handleClick={() => setWatchMovie(true)}
                  >
                    Watch now
                  </Button>
                  <Button
                    classes="btn"
                    isDisabled={false}
                    Icon={FaYoutube}
                    handleClick={() => setOpenTrailer(true)}
                  >
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {movie?.similar && (
            <div className="similar" data-slider>
              <p>Similar Movies</p>
              <Slider data={movie.similar} />
            </div>
          )}
          <MovieTrailer
            videos={movie?.videos}
            openTrailer={openTrailer}
            handleClose={() => setOpenTrailer(false)}
          />
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
