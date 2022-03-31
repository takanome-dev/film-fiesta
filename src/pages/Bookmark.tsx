import { useContext, useEffect } from "react";
import { Card } from "../components";
import Title from "../components/common/Title";
import Container from "../components/styles/CardList.styled";
import { Container as Empty } from "../components/styles/Empty.styled";
import { EmptyBookmark } from "../components/svg";
import { Context } from "../context/GlobalContext";

const Bookmark = () => {
	const { bookmarks, onRefetchBookmarks } = useContext(Context);

	useEffect(() => {
		onRefetchBookmarks?.();
	}, []);

	return (
		<>
			{bookmarks.length > 0 ? (
				<>
					<Title name="Bookmarks" />
					<Container>
						{bookmarks.map((b) => (
							<Card movie={b} key={b._id} />
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
