import React from "react";

function Search({ searchFilter, onSearchChange }) { 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchFilter}  
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
