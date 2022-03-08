import { useContext, useEffect } from "react";
import { Context } from "../context/GlobalContext";
import Container from "./styles/FilteredGenre.styled";
import { LeftArrowIcon, RightArrowIcon } from "./svg";

const FilteredGenre = () => {
	const { genres, onGenreSelected, selectedGenre, loadingMovies } =
		useContext(Context);

	/**
	 * @see {@link https://www.youtube.com/watch?v=LFVFxDXQxxE}
	 */

	useEffect(() => {
		const scrollContainer = document.querySelector(
			".scroll-container"
		) as HTMLDivElement;
		if (!scrollContainer) return;
		const scrollButtons = document.querySelector(
			".scroll-buttons"
		) as HTMLDivElement;
		const leftArrow = document.querySelector(".left-arrow") as HTMLDivElement;
		const rightArrow = document.querySelector(".right-arrow") as HTMLDivElement;

		const maxScroll =
			scrollContainer.offsetWidth - scrollButtons.offsetWidth - 100;
		let currentPosition = 0;
		const scrollWidth = 300;

		const scroll = (val: number) => {
			currentPosition += val * scrollWidth;

			if (currentPosition > 0) {
				currentPosition = 0;
				leftArrow.style.opacity = "0";
			} else {
				leftArrow.style.opacity = "1";
			}

			if (currentPosition < maxScroll) {
				currentPosition = maxScroll;
				rightArrow.style.opacity = "0";
			} else {
				rightArrow.style.opacity = "1";
			}

			return (scrollButtons.style.left = `${currentPosition}px`);
		};

		leftArrow?.addEventListener("click", () => scroll(1));
		rightArrow?.addEventListener("click", () => scroll(-1));

		return () => {
			leftArrow?.removeEventListener("click", () => scroll(1));
			rightArrow?.removeEventListener("click", () => scroll(-1));
		};
	});

	return (
		<Container className="flex">
			{loadingMovies ? (
				<div></div>
			) : (
				<div className="scroll-container">
					<div className="left-arrow flex">
						<LeftArrowIcon />
					</div>
					<div className="scroll-buttons flex">
						{genres.map((g) => (
							<span
								key={g._id}
								onClick={() => onGenreSelected?.(g)}
								className={selectedGenre._id === g._id ? "active" : ""}
							>
								{g.name}
							</span>
						))}
					</div>
					<div className="right-arrow flex">
						<RightArrowIcon />
					</div>
				</div>
			)}
		</Container>
	);
};

export default FilteredGenre;
