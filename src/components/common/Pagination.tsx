import React from "react";
import _ from "lodash";
import { PaginationProps } from "../types";

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  onPageChange,
  itemsCount,
  currentPage,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <span
              onClick={() => onPageChange(page)}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
