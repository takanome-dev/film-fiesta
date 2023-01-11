import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getMovies } from '@/services/movie';


// TODO: update this 
export default function useMovies(page: number) {
  const [totalPages, setTotalPages] = useState(0);

  const { data: movies, refetch: refetchMovies, isLoading: loadingMovies, error: errMovies } = useQuery<
		MoviesResponse,
		Error
	>({queryKey: [`getMovies - Page ${page}`], queryFn: async () => await getMovies(page), onSuccess(data) {
    setTotalPages(data.total_pages);
  },})

  return { movies: movies?.results ?? [], refetchMovies, loadingMovies, errMovies, totalPages };
}