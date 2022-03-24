import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/GlobalContext";

const Container = styled.div`
	width: 30rem;
	input {
		width: 100%;
		/* max-width: 40rem; */
		/* width: 100%;: */
		padding: 0.5rem 1rem;
		color: var(--color-dark-80);
		background-color: var(--color-background);
		border: none;
		border-radius: 0.6rem;
		transition: outline 100ms ease;
		&:focus {
			outline: 0.35rem solid var(--color-secondary-20);
		}
	}

	@media (max-width: 768px) {
		width: 20rem;
	}
`;

const Search = () => {
	const { searchQuery, onSearch } = useContext(Context);

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
		</Container>
	);
};

export default Search;
