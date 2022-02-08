import propTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>Enter a valid search term</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((result, index) => {
          return (
            <img
              src={result}
              alt="space"
              className="search-results__image"
              key={index}
            />
          );
        })}
      </div>
    );
  }
};

SearchResults.propTypes = {
  results: propTypes.arrayOf(propTypes.string),
};

export default SearchResults;
