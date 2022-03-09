import { useContext, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Context } from "../../context/GlobalContext";
import { clearBookmarks } from "../../services/bookmark";
import { clearFavorites } from "../../services/favorite";
import Overlay from "../common/Overlay";
import { appear } from "../styles/Global.styled";

const Modal = styled.div`
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
	height: 100%;

	.modal {
		position: absolute;
		right: 5%;
		top: 10%;
		background-color: #fff;
		z-index: 4;
		box-shadow: 0 0 3rem rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		overflow: hidden;
		animation: ${appear} 500ms;
		p {
			color: var(--color-primary);
			cursor: pointer;
			padding: 1rem;
			&:hover {
				background-color: var(--color-background-40);
			}
		}
	}
`;

const Container = styled.div`
	padding: 0.4rem;
	border-radius: 50%;
	cursor: pointer;
	&:hover {
		background-color: var(--color-gray-20);
	}
	&:focus {
		outline: 0.2rem solid var(--color-secondary-60);
	}
`;

type Props = {
	name: string;
};

const MoreHorizontal: React.FC<Props> = ({ name }) => {
	const [open, setOpen] = useState(false);
	const { user, onRefetchBookmarks, onRefetchFavorites } = useContext(Context);

	const handleDeleteAll = async () => {
		try {
			if (name === "Bookmarks") {
				const data = await clearBookmarks(user._id);
				onRefetchBookmarks?.();
				return toast.success(data);
			} else if (name === "Favorites") {
				const data = await clearFavorites(user._id);
				onRefetchFavorites?.();
				return toast.success(data);
			}
		} catch (err: any) {
			toast.error(err.data);
		}
	};
	return (
		<>
			{open && (
				<Modal>
					<Overlay
						bgColor="transparent"
						zIndex={4}
						handleClose={() => setOpen(false)}
					/>
					<div className="modal">
						<p onClick={handleDeleteAll}>Clear all {name}</p>
					</div>
				</Modal>
			)}
			<Container className="flex" tabIndex={0} onClick={() => setOpen(true)}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
						stroke="#2B2D42"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
						stroke="#2B2D42"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
						stroke="#2B2D42"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Container>
		</>
	);
};

export default MoreHorizontal;
