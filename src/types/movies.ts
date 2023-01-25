export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genres {
  id: string;
  name: string;
}

export interface VideoTrailer {
  name: string;
  key: string;
}

export interface MoviesResponse {
  dates: { maximum: string; minimum: string };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  data: Movie;
  similar: Movie[];
  videos: VideoTrailer[];
}
