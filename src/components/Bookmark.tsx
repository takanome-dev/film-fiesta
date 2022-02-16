import { Container } from "./styles/Empty.styled";
import { EmptyBookmark } from "./svg";

const Bookmark = () => {
	return (
		<Container className="flex">
			<EmptyBookmark />
			<div>
				<p>You haven't bookmarked anything yet.</p>
				<p>This is where you will see movies you have bookmarked.</p>
			</div>
		</Container>
	);
};

export default Bookmark;
