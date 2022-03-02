import { useContext } from "react";
import styled from "styled-components";
import { Card } from "../components";
import Container from "../components/styles/CardList.styled";
import { Container as Empty } from "../components/styles/Empty.styled";
import { EmptyBookmark, MoreHorizontalIcon } from "../components/svg";
import { Context } from "../context/GlobalContext";

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

const Bookmark = () => {
	const { bookmarks } = useContext(Context);

	return (
		<>
			{bookmarks.length > 0 ? (
				<>
					<Title>
						<h2>Bookmarks</h2>
						<MoreHorizontalIcon />
					</Title>
					<Container>
						{bookmarks.map((b) => (
							<Card movie={b.movie} key={b._id} />
						))}
					</Container>
				</>
			) : (
				<Empty className="flex">
					<EmptyBookmark />
					<div>
						<p>You haven't bookmarked anything yet.</p>
						<p>This is where you will see movies you have bookmarked.</p>
					</div>
				</Empty>
			)}
		</>
	);
};

export default Bookmark;
