import React from 'react';

function SearchBar() {
  return (
    <input
      type="text"
      style={{ padding: "10px", border: "2px solid blue", borderRadius: "5px", backgroundColor: "#add8e6" }}
      placeholder="Search Here..."
    />
  );
}

export default SearchBar;
