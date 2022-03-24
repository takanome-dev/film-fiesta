import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/GlobalContext";
import Container from "../styles/Search.styled";

const Search = () => {
	const { searchQuery, onSearch, movies } = useContext(Context);

	let matches = movies.filter((m) => {
		const regex = new RegExp(`^${searchQuery}`, "gi");
		return m.title.match(regex);
	});

	if (searchQuery.length === 0) {
		matches = [];
	}

	return (
		<Container>
			<input
				type="search"
				id="search"
				placeholder="Search..."
				aria-label="Search movies by title"
				value={searchQuery}
				onChange={(e) => onSearch?.(e.currentTarget.value)}
			/>
			{matches.length > 0 && (
				<div className="search-list">
					{matches.map((m) => (
						<Link key={m._id} to={`/movies/${m._id}`} className="link">
							<div className="search-result">
								<h4>{m.title}</h4>
								<div className="movie-details">
									<small>genre: {m.genre.name.toLowerCase()}</small>
									{/* <small>rate: {m.voteAverage}</small> */}
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</Container>
	);
};

export default Search;
