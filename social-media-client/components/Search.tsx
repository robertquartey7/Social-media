import React from "react";
import SearchResults from "./SearchResults";

function Search() {
  return (
    <form className="relative">
      <input
        type="search"
        placeholder="Search"
        className="border p-1 rounded outline-none"
      />
      <div className="absolute shadow-lg w-full">
        <SearchResults />
      </div>
    </form>
  );
}

export default Search;
