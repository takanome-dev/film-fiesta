import { useQuery } from '@tanstack/react-query';
import {getMovieDetails} from '@/services/movie';

// TODO: update this 
export default function useMovieDetails(id: number) {

  const { data: movie, refetch: refetchMovie, isLoading, error } = useQuery<
		MovieDetails,
		Error
	>({queryKey: ["getMovieDetails"], queryFn: async () => await getMovieDetails(id)})

  // data: Movies;
	// similar: Movies[];
	// videos: VideoTrailer[];
  return { movie: movie, refetchMovie, loading: isLoading || !movie, error };
}