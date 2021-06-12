import '../styles/search-result.css';

const SearchResults = () => {
  return (
    <div className="results-page-holder">
      <div className="content-sizing results-page-holder-content">
        <div className="filter-holders">

        </div>
        <div className="search-and-results">
          <div className="search-input-holder">
            <div className="search-input">
              <span className="material-icons">search</span>
              <input placeholder="Job Title"/>
            </div>
            <div className="line-from"></div>
          </div>
          <div className="results">

          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;