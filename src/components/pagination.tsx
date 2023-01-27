import Link from 'next/link';
// import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { cn } from '@/lib/utils/classname';

import { buttonVariants } from './ui/button';

interface Props {
  page: number;
  totalPages: number;
}

const Pagination: React.FC<Props> = ({ page, totalPages }) => {
  console.log({ page });
  const PAGE_SIZE = 3;
  const MAX_PAGINATION_BUTTONS = 4;

  const pages = Math.ceil(totalPages / PAGE_SIZE);
  const prevNextPage = page >= pages ? page - 1 : page + 1;

  if (pages <= 1) return null;

  return (
    <div className="mx-auto mt-8 flex w-max items-center gap-1 overflow-hidden rounded-lg">
      <Link
        href={`/movies?page=${page - 1}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('flex items-center focus:ring-0', {
            'pointer-events-none opacity-50': page <= 1,
          }),
        })}
      >
        <MdKeyboardArrowLeft size={16} />
        <span className="ml-1.5">Previous</span>
      </Link>
      <Link
        href={`/movies?page=${1}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('focus:ring-0', {
            'bg-slate-300 dark:bg-slate-800': page === 1,
          }),
        })}
      >
        1
      </Link>
      <Link
        href={`/movies?page=${
          prevNextPage === pages ? prevNextPage - 1 : prevNextPage
        }`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('focus:ring-0', {
            'bg-slate-300 dark:bg-slate-800': page === prevNextPage,
          }),
        })}
      >
        {prevNextPage === pages ? prevNextPage - 1 : prevNextPage}
      </Link>
      <p
        className={buttonVariants({
          variant: 'ghost',
          className: cn('focus:ring-0', {
            hidden: pages <= MAX_PAGINATION_BUTTONS,
          }),
        })}
      >
        ..
      </p>
      <Link
        href={`/movies?page=${pages - 1}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('focus:ring-0', {
            hidden: pages < MAX_PAGINATION_BUTTONS,
          }),
        })}
      >
        {pages - 1}
      </Link>
      <Link
        href={`/movies?page=${pages}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('focus:ring-0', {
            'bg-slate-300 dark:bg-slate-800': page === pages,
          }),
        })}
      >
        {pages}
      </Link>
      <Link
        href={`/movies?page=${page + 1}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('flex items-center focus:ring-0', {
            'pointer-events-none opacity-50': page >= pages,
          }),
        })}
      >
        <span className="mr-1.5">Next</span>
        <MdKeyboardArrowRight size={16} />
      </Link>
    </div>
  );
};

export default Pagination;
