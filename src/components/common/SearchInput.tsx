import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/SearchInput.styled';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim())
      navigate({
        pathname: '/search',
        search: `q=${searchQuery}&page=${1}`,
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border rounded-lg overflow-hidden focus:ring focus:ring-blue-500"
    >
      <input
        type="search"
        id="search"
        placeholder="Search..."
        className="px-4 h-10 border-none outline-none text-slate-800 text-lg"
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
