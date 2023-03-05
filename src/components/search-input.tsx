import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';

const suggestions = [
  'Avatar',
  'Avengers',
  'Batman',
  'Black Widow',
  'Captain America',
];

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSearchDialog, setOpenSearchDialog] = useState(false);
  const router = useRouter();

  const sendQuery = async (query?: string) => {
    await router
      .push(`/search?q=${query ?? searchQuery}&page=${1}`)
      .catch(console.error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      sendQuery();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative hidden items-center overflow-hidden rounded-lg border border-slate-200 dark:border-slate-500 sm:flex"
      >
        <span className="sr-only">Search</span>
        <Input
          type="search"
          placeholder="Search..."
          className="pr-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch
          className="absolute inset-y-0 right-0 mr-4 h-full bg-transparent text-slate-300"
          onClick={handleSubmit}
        />
      </form>
      <Button
        variant="ghost"
        size="sm"
        className="sm:hidden"
        onClick={() => setOpenSearchDialog(true)}
      >
        <FaSearch className="h-4 w-4 bg-transparent text-slate-300" />
      </Button>
      <CommandDialog open={openSearchDialog} onOpenChange={setOpenSearchDialog}>
        <CommandInput
          placeholder="Search a movie..."
          value={searchQuery}
          onValueChange={(query) => setSearchQuery(query)}
          onSubmit={handleSubmit}
        />
        <CommandList>
          <CommandGroup heading="Suggestions">
            {suggestions.map((suggestion) => (
              <CommandItem
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => sendQuery(suggestion)}
                key={suggestion}
              >
                {suggestion}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchInput;
