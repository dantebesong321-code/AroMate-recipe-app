import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-bar container">
      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
