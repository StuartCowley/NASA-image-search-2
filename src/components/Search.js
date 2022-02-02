import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked!");
    setSearchResults(await getImages(searchValue));
  };
  return (
    <>
      <form className="search__form" onSubmit={handleSubmit}>
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
