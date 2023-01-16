import useMovies from '@/hooks/useMovies';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardList, Skeleton } from '../components';
import Pagination from '@/components/common/Pagination';
import Container from '@/components/styles/Movies.styled';

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, loadingMovies, totalPages, errMovies } =
    useMovies(currentPage);

  const navigate = useNavigate();

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate({ pathname: '/movies', search: `page=${pageNumber}` });
  };

  if (loadingMovies) return <Skeleton />;

  if (errMovies) {
    console.log(errMovies);
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="flex flex-col">
      {/* <FilteredGenre /> */}
      <CardList movies={movies} />
      <Pagination
        onPageChange={handlePageChange}
        page={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Movies;
