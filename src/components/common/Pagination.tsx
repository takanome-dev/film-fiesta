import _ from 'lodash';
import { useState } from 'react';
import clsx from 'clsx';

type Props = {
  page: number;
  onPageChange: ((page: number) => void) | undefined;
  totalPages: number;
};

// TODO: simplify this
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
    if ((page - 1) % limitPageNumber === 0) {
      setMaxPageNumber(maxPageNumber - limitPageNumber);
      setMinPageNumber(minPageNumber - limitPageNumber);
    }
  };

  const styles =
    'py-2 px-4 rounded-lg bg-white border cursor-pointer hover:bg-blue-100';

  return (
    <nav className="flex justify-center my-8" aria-label="Pagination">
      <ul className="flex list-none">
        <li
          onClick={handlePrevPage}
          className={clsx(
            styles,
            page === 1 && 'opacity-50 pointer-events-none'
          )}
        >
          Prev
        </li>
        {pages.length > maxPageNumber && (
          <li
            className={clsx(
              styles,
              page === 1 && 'opacity-50 pointer-events-none'
            )}
            onClick={handlePrevPage}
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
                className={clsx(styles, page === p ? 'bg-blue-300' : '')}
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
            className={clsx(
              styles,
              page === totalPages && 'opacity-50 pointer-events-none'
            )}
            onClick={handleNextPage}
          >
            &hellip;
          </li>
        )}
        <li
          onClick={handleNextPage}
          className={clsx(
            styles,
            page === totalPages && 'opacity-50 pointer-events-none'
          )}
        >
          Next
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
