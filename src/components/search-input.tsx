import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Input } from '@/components/ui/input';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push({
        pathname: '/search',
        search: `q=${searchQuery}&page=${1}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center overflow-hidden rounded-lg border border-slate-200 dark:border-slate-500"
    >
      <span className="sr-only">Search</span>
      <Input
        type="search"
        placeholder="Search..."
        className="pr-10"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FaSearch className="absolute inset-y-0 right-0 mr-4 h-full border-y border-slate-200 bg-white text-slate-300 dark:border-slate-500 dark:bg-slate-900" />
    </form>
  );
};

export default SearchInput;
