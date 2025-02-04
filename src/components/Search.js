import React from "react";

function Search({ searchFilter, onSearchChange }) { // props passed down from PlantPage for search filter and search change event
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchFilter}  // props
        onChange={onSearchChange} // props
      />
    </div>
  );
}

export default Search;
