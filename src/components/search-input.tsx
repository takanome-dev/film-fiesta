'use client';

// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Input } from '@/components/ui/input';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log({ searchQuery });
      // router.push({
      //   pathname: '/search',
      //   search: `q=${searchQuery}&page=${1}`,
      // });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700"
    >
      <Input
        type="search"
        placeholder="Search..."
        className="border-0 "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FaSearch className="mx-2 text-slate-300" size={20} />
    </form>
  );
};

export default SearchInput;
