// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

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
      className="flex items-center overflow-hidden rounded-lg border focus:ring focus:ring-blue-500"
    >
      <input
        type="search"
        id="search"
        placeholder="Search..."
        className="h-10 border-none px-4 text-lg text-slate-800 outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="mr-4">
        <FaSearch className="text-slate-300" size={20} />
      </button>
    </form>
  );
};

export default SearchInput;
