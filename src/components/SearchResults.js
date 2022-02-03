const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        <p>Search results</p>
      </>
    );
  }
};

export default SearchResults;
