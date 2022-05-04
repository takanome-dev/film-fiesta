import _ from "lodash";
import { useState } from "react";
import Nav from "../styles/Pagination.styled";

type Props = {
	page: number;
	onPageChange: ((page: number) => void) | undefined;
	totalPages: number;
};

const Pagination: React.FC<Props> = ({ onPageChange, page, totalPages }) => {
	const limitPageNumber = 5;
	const [maxPageNumber, setMaxPageNumber] = useState(5);
	const [minPageNumber, setMinPageNumber] = useState(0);

	const pages = _.range(1, totalPages + 1);

	const handleNextPage = () => {
		onPageChange?.(page + 1);
		if (page + 1 > maxPageNumber) {
			setMaxPageNumber(maxPageNumber + limitPageNumber);
			setMinPageNumber(minPageNumber + limitPageNumber);
		}
	};

	const handlePrevPage = () => {
		onPageChange?.(page - 1);
		if ((page - 1) % limitPageNumber == 0) {
			setMaxPageNumber(maxPageNumber - limitPageNumber);
			setMinPageNumber(minPageNumber - limitPageNumber);
		}
	};

	return (
		<Nav className="flex" aria-label="Pagination">
			<ul className="pagination flex">
				<li
					onClick={handlePrevPage}
					style={page === 1 ? { display: "none" } : { display: "initial" }}
				>
					Prev
				</li>
				{pages.length > maxPageNumber && (
					<li
						className="hellip"
						onClick={handlePrevPage}
						style={page === 1 ? { display: "none" } : { display: "initial" }}
					>
						&hellip;
					</li>
				)}
				{pages.map(
					(p) =>
						p < maxPageNumber + 1 &&
						p > minPageNumber && (
							<li
								key={p}
								className={page === p ? "active" : ""}
								onClick={() => onPageChange?.(p)}
								tabIndex={0}
								aria-label={`Page number ${p}`}
							>
								{p}
							</li>
						)
				)}
				{pages.length > maxPageNumber && (
					<li
						className="hellip"
						onClick={handleNextPage}
						style={
							page === totalPages ? { display: "none" } : { display: "initial" }
						}
					>
						&hellip;
					</li>
				)}
				<li
					onClick={handleNextPage}
					style={
						page === totalPages ? { display: "none" } : { display: "initial" }
					}
				>
					Next
				</li>
			</ul>
		</Nav>
	);
};

export default Pagination;
