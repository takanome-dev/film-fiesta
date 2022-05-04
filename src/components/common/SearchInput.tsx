import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Container from "../styles/SearchInput.styled";

const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const history = useHistory();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (searchQuery.trim())
			history.push({
				pathname: "/search",
				search: `q=${searchQuery}&page=${1}`,
			});
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					id="search"
					placeholder="Search..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button type="submit">
					<FaSearch color="var(--gray)" size={20} />
				</button>
			</form>
		</Container>
	);
};

export default SearchInput;
