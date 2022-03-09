import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/GlobalContext";
import { deleteBookmark, saveBookmark } from "../../services/bookmark";

type Props = {
	isBookmarked: any;
	movie: any;
	refetch?: any;
};

const RemoveBookmark: React.FC<Props> = ({ movie, isBookmarked, refetch }) => {
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
			aria-label="Remove from bookmark button"
		>
			<svg
				width="17"
				height="22"
				viewBox="0 0 17 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.5714 0C15.2155 0 15.8332 0.257539 16.2887 0.715961C16.7441 1.17438 17 1.79614 17 2.44444V22L8.5 18.3333L0 22V2.44444C0 1.08778 1.09286 0 2.42857 0H14.5714ZM3.84929 6.82L6.78786 9.77778L3.84929 12.7233L5.57357 14.4589L8.5 11.5011L11.4264 14.4589L13.1507 12.7233L10.2121 9.77778L13.1507 6.82L11.4264 5.09667L8.5 8.04222L5.57357 5.09667L3.84929 6.82Z"
					fill="rgba(43, 45, 66, 0.6)"
				/>
			</svg>
		</button>
	);
};

export default RemoveBookmark;
