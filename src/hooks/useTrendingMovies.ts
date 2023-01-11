import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getTrendingMovies } from '@/services/movie';

// TODO: update this 
export default function useTrendingMovies(page: number) {
  const [totalPages, setTotalPages] = useState(0);

  const { data, refetch, isLoading, error } = useQuery<
		MoviesResponse,
		Error
	>({queryKey: [`getTrendingMovies - Page ${page}`], queryFn: async () => await getTrendingMovies(page), onSuccess(data) {
    setTotalPages(data.total_pages);
  },})

  return { movies: data?.results ?? [], refetch, loading: isLoading, error, totalPages };
}