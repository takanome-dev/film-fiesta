import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getMoviesByQuery } from '@/services/movie';

// TODO: update this 
export default function useSearchQuery(page: number) {
  const [totalPages, setTotalPages] = useState(0);
  const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("q")!;

	let newPage: boolean;
	query ? (newPage = false) : (newPage = true);

  const { data, refetch, isLoading, error } = useQuery<
		MoviesResponse,
		Error
	>({queryKey: [`getSearchQuery`], queryFn: async () => await getMoviesByQuery(page, query), onSuccess(data) {
    setTotalPages(data.total_pages);
  },})

  return { movies: data?.results ?? [], refetch, loading: isLoading, error, totalPages, newPage, totalResults: data?.total_results ?? 0, query };
}