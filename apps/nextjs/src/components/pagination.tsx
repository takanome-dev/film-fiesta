import { useRouter } from 'next/router';
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

import { buttonVariants } from './ui/button';

interface Props {
  totalPages: number;
  page?: number;
  pathname: string;
}

interface Event {
  selected: number;
}

const Pagination: React.FC<Props> = ({ pathname, totalPages, page }) => {
  console.log({ page });
  const PAGE_SIZE = 9;
  const pageCount = Math.ceil(totalPages / PAGE_SIZE);

  const router = useRouter();

  if (pageCount <= 1) return null;

  const handlePageClick = (event: Event) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`/${pathname}?page=${event.selected + 1}`);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <>
          <span className="ml-1.5">Next</span>
          <MdKeyboardArrowRight size={16} />
        </>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      // forcePage={page}
      previousLabel={
        <>
          <MdKeyboardArrowLeft size={16} />
          <span className="mr-1.5">Previous</span>
        </>
      }
      renderOnZeroPageCount={() => null}
      className="mx-auto mt-8 flex w-full items-center gap-1 overflow-hidden rounded-lg border border-slate-100 dark:border-0 xs:w-max"
      pageClassName="rounded-md overflow-hidden"
      pageLinkClassName={buttonVariants({
        variant: 'ghost',
        className:
          'focus:ring-0 border border-slate-500 xs:border-0 w-4 xs:w-full',
      })}
      activeClassName="bg-slate-300 dark:bg-slate-800"
      previousClassName={buttonVariants({
        variant: 'ghost',
        className: 'focus:ring-0',
      })}
      previousLinkClassName="flex items-center"
      nextClassName={buttonVariants({
        variant: 'ghost',
        className: 'focus:ring-0',
      })}
      nextLinkClassName="flex items-center"
      disabledClassName="pointer-events-none opacity-50"
    />
  );
};

export default Pagination;
