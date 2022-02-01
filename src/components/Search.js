import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  return (
    <>
      <form className="search__form">
        <input
          type="text"
          placeholder="moon"
          className="search__input"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="search__button">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
