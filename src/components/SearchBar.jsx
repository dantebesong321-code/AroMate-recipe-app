import { useState } from "react";

function SearchBar({ allRecipes, setFilteredRecipes }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);

    const filteredArr = allRecipes.filter((recipe) =>
      (recipe.title || "").toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredRecipes(filteredArr);
  };

  return (
    <div className="search-bar container">
      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />

        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
