import React from "react";

const SearchBox = ({ placeholder, onSearchTextChange }) => {
  return (
    <div>
      <input
        className="ma3 outline pa1"
        type="search"
        placeholder={placeholder}
        onChange={onSearchTextChange}
      />
    </div>
  );
};

export default SearchBox;