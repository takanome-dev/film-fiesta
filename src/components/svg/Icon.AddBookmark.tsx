import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/GlobalContext";
import { deleteBookmark, saveBookmark } from "../../services/bookmark";

type Props = {
	color: string;
	isBookmarked: any;
	movie: any;
	refetch?: any;
};

const AddBookmark: React.FC<Props> = ({
	color,
	isBookmarked,
	movie,
	refetch,
}) => {
	const { user, onRefetchMovies, onRefetchBookmarks } = useContext(Context);
	const location = useLocation();
	const match = location.pathname.match(/\/movies\/([0-9a-fA-F]){24}$/);

	const handleBookmark = async () => {
		if (!user._id)
			return toast.info("You need to login before performing any action");

		try {
			if (isBookmarked) {
				const data = await deleteBookmark(movie._id, user._id);
				onRefetchMovies?.();
				onRefetchBookmarks?.();
				if (match?.[0]) refetch();
				return toast.success(data);
			}

			const data = await saveBookmark({
				userId: user._id,
				movieId: movie._id,
			});
			onRefetchMovies?.();
			onRefetchBookmarks?.();
			if (match?.[0]) refetch();
			return toast.success(data);
		} catch (err: any) {
			return toast.error(err.data);
		}
	};

	return (
		<button
			className="icon flex"
			onClick={handleBookmark}
			aria-label="Add to bookmark button"
		>
			<svg
				width="17"
				height="22"
				viewBox="0 0 17 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.5714 0C15.2155 0 15.8332 0.257539 16.2887 0.715961C16.7441 1.17438 17 1.79614 17 2.44444V22L8.5 18.3333L0 22V2.44444C0 1.08778 1.09286 0 2.42857 0H14.5714ZM7.28571 4.88889V7.33333H4.85714V9.77778H7.28571V12.2222H9.71429V9.77778H12.1429V7.33333H9.71429V4.88889H7.28571Z"
					fill={color}
				/>
			</svg>
		</button>
	);
};

export default AddBookmark;
