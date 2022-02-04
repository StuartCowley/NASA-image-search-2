import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
import propTypes from "prop-types";

const Search = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
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

Search.propTypes = {
  setSearchResults: propTypes.func,
};

export default Search;
