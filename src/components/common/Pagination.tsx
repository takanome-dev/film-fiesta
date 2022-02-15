import _ from "lodash";
import { useContext } from "react";
import { Context } from "../../context/GlobalContext";
import Nav from "../styles/Pagination.styled";

const Pagination = () => {
	const { totalMovies, pageSize, currentPage, onPageChange } =
		useContext(Context);

	const pagesCount = Math.ceil(totalMovies! / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);

	return (
		<Nav className="flex">
			<ul className="pagination flex">
				{pages.map((p) => (
					<li
						key={p}
						className={currentPage === p ? "active" : ""}
						onClick={() => onPageChange?.(p)}
					>
						{p}
					</li>
				))}
			</ul>
		</Nav>
	);
};

export default Pagination;

{
	/* <Nav className="flex">
<ul className="pagination flex">
  {pages.map((p) => (
    <li
      key={p}
      className={currentPage === p ? "active" : ""}
    >
      <span
        onClick={() => onPageChange!(p)}
      >
        {p}
      </span>
    </li>
  ))}
</ul>
</Nav> */
}
