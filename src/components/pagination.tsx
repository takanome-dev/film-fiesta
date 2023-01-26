import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { cn } from '@/lib/utils/classname';

import { buttonVariants } from './ui/button';

interface Props {
  page: number;
  totalPages: number;
}

const Pagination: React.FC<Props> = ({ page, totalPages }) => {
  const PAGE_SIZE = 3;
  const pages = Math.ceil(totalPages / PAGE_SIZE);
  // TODO: render the two first pages and the two last pages
  const currentPage = page >= pages ? page - 1 : page + 1;

  const router = useRouter();
  const { page: pageQuery } = router.query;
  const pageQueryNumber = Number(pageQuery) || 1;

  return (
    <div className="mx-auto mt-8 flex w-96 items-center overflow-hidden rounded-lg">
      <Link
        href={`/movies?page=${page - 1}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('flex items-center', {
            'pointer-events-none opacity-50': page <= 1,
          }),
        })}
      >
        <MdKeyboardArrowLeft size={16} />
        <span className="ml-2">Previous</span>
      </Link>
      <Link
        href={`/movies?page=${currentPage}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn({
            'bg-slate-300 dark:bg-slate-800': pageQueryNumber === currentPage,
          }),
        })}
      >
        {currentPage}
      </Link>
      <p className={buttonVariants({ variant: 'ghost' })}>..</p>
      <Link
        href={`/movies?page=${pages}`}
        className={buttonVariants({ variant: 'ghost' })}
      >
        {pages}
      </Link>
      <Link
        href={`/movies?page=${page + 1}`}
        className={buttonVariants({
          variant: 'ghost',
          className: cn('flex items-center', {
            'pointer-events-none opacity-50': page >= pages,
          }),
        })}
      >
        <span className="mr-2">Next</span>
        <MdKeyboardArrowRight size={16} />
      </Link>
    </div>
  );
};

export default Pagination;
