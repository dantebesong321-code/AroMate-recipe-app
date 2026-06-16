import { Search } from "lucide-react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative rounded-3xl">
      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full
          pl-11
          pr-4
          py-3
          rounded-xl
          border
          border-slate-200
          focus:outline-none
          focus:ring-4
          focus:ring-green-100
          focus:border-green-500
        "
      />
    </div>
  );
}

export default SearchBar;
