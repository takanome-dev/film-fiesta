/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect } from "react";
import { Context } from "../context/GlobalContext";
import Container from "./styles/FilteredGenre.styled";
import LeftArrow from "./svg/LeftArrow";
import RightArrow from "./svg/RightArrow";

const FilteredGenre = () => {
	const { genres, onGenreSelected, selectedGenre } = useContext(Context);

	useEffect(() => {
		/**
		 * @ref https://www.youtube.com/watch?v=LFVFxDXQxxE
		 */

		const scrollContainer: HTMLDivElement =
			document.querySelector(".scroll-container")!;
		const scrollButtons: HTMLDivElement =
			document.querySelector(".scroll-buttons")!;
		const leftArrow: HTMLDivElement = document.querySelector(".left-arrow")!;
		const rightArrow: HTMLDivElement = document.querySelector(".right-arrow")!;

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
			<div className="scroll-container">
				<div className="left-arrow flex">
					<LeftArrow />
				</div>
				<div className="scroll-buttons flex">
					{genres.map((g) => (
						<span
							key={g._id}
							onClick={() => onGenreSelected!(g)}
							className={selectedGenre._id === g._id ? "active" : ""}
						>
							{g.name}
						</span>
					))}
				</div>
				<div className="right-arrow flex">
					<RightArrow />
				</div>
			</div>
		</Container>
	);
};

export default FilteredGenre;
