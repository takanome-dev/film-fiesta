import { useContext } from "react";
import styled from "styled-components";
import { FilteredGenre } from ".";
import { Context } from "../context/GlobalContext";
import Card from "./Card";
import Pagination from "./common/Pagination";
import Container from "./styles/CardList.styled";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Popular = () => {
	const { filteredMoviesByCategory, totalMoviesFilteredByCategory } =
		useContext(Context);

	return (
		<Wrapper>
			<FilteredGenre />
			<Container>
				{filteredMoviesByCategory?.map((m) => (
					<Card key={m._id} movie={m} />
				))}
			</Container>
			<Pagination totalMovies={totalMoviesFilteredByCategory!} />
		</Wrapper>
	);
};

export default Popular;
