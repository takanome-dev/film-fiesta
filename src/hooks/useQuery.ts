/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as types from "../types";

export default function useQuery(
	path: string,
	apiCall: (page: string, query?: string) => Promise<types.MoviesResponse>
) {
	const [movies, setMovies] = useState<types.Movies[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [totalResults, setTotalResults] = useState(0);
	const history = useHistory();
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("q")!;
	const page = searchParams.get("page")! ?? 1;

	let newPage: boolean;
	query ? (newPage = false) : (newPage = true);

	const request = async () => {
		const data = await apiCall(page, query);
		setMovies(data.results);
		setTotalPages(data.total_pages);
		setTotalResults(data.total_results);
	};

	useEffect(() => {
		request();
		// eslint-disable react-hooks/exhaustive-deps
	}, [query, page]);

	const handlePageChange = (page: number) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		history.push({
			pathname: `/${path}`,
			search: query ? `q=${query}&page=${page}` : `page=${page}`,
		});
	};

	return {
		movies,
		totalPages,
		totalResults,
		newPage,
		page,
		query,
		handlePageChange,
	};
}
