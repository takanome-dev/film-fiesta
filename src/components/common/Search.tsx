import React from "react";
import { SearchProps } from "../types";

const Search: React.FC<SearchProps> = ({ value, onSearch }) => {
  return (
    <div>
      <input
        className="form-control mb-3"
        placeholder="Search..."
        value={value}
        onChange={(e) => onSearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
