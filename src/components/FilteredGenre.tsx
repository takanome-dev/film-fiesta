import { useContext, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Container from './styles/FilteredGenre.styled';

const FilteredGenre = () => {
  // const { genres, onGenreSelected, selectedGenre, loadingMovies } =
  // 	useContext(Context);

  useEffect(() => {
    /**
     * @see {@link https://www.youtube.com/watch?v=LFVFxDXQxxE}
     */
    const scrollContainer = document.querySelector(
      '.scroll-container'
    ) as HTMLDivElement;
    if (!scrollContainer) return;
    const scrollButtons = document.querySelector(
      '.scroll-buttons'
    ) as HTMLDivElement;
    const leftArrow = document.querySelector('.left-arrow') as HTMLDivElement;
    const rightArrow = document.querySelector('.right-arrow') as HTMLDivElement;

    const maxScroll =
      scrollContainer.offsetWidth - scrollButtons.offsetWidth - 100;
    let currentPosition = 0;
    const scrollWidth = 300;

    const scroll = (val: number) => {
      currentPosition += val * scrollWidth;

      if (currentPosition > 0) {
        currentPosition = 0;
        leftArrow.style.opacity = '0';
      } else {
        leftArrow.style.opacity = '1';
      }

      if (currentPosition < maxScroll) {
        currentPosition = maxScroll;
        rightArrow.style.opacity = '0';
      } else {
        rightArrow.style.opacity = '1';
      }

      return (scrollButtons.style.left = `${currentPosition}px`);
    };

    leftArrow?.addEventListener('click', () => scroll(1));
    rightArrow?.addEventListener('click', () => scroll(-1));

    return () => {
      leftArrow?.removeEventListener('click', () => scroll(1));
      rightArrow?.removeEventListener('click', () => scroll(-1));
    };
  });

  return (
    <Container className="flex">
      genre
      {/* {loadingMovies ? (
				<div></div>
			) : (
				<div className="scroll-container" aria-label="Filter movies by genre">
					<button
						className="left-arrow flex"
						aria-label="Click to scroll horizontally on the left"
					>
						<FaAngleLeft color="var(--gray)" size={20} />
					</button>
					<div className="scroll-buttons">
						<ul className="flex">
							{genres.map((g) => (
								<li
									key={g.id}
									onClick={() => onGenreSelected?.(g)}
									className={selectedGenre.id === g.id ? "active" : ""}
								>
									{g.name}
								</li>
							))}
						</ul>
					</div>
					<button
						className="right-arrow flex"
						aria-label="Click to scroll horizontally on the right"
					>
						<FaAngleRight color="var(--gray)" size={20} />
					</button>
				</div>
			)} */}
    </Container>
  );
};

export default FilteredGenre;
