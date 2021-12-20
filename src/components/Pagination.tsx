import _ from "lodash";
import { PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  onPageChange,
  itemsCount,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            onClick={() => onPageChange(page)}
            className="page-item"
          >
            <a href="!#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
