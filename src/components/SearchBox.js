import '../styles/search-box-home.css'
const SearchBox = () => {
  return (
    <div className="search-container">
      <div className="content-sizing search-content">
        <div className="slider-header-search">
          <h1>Find the right person for your job.</h1>
          <form>
            <div className="form-input-main">
              <div className="search-input">
                <span className="material-icons">search</span>
                <input placeholder="Job Title" />
              </div>
              <div className="line-from"></div>
              <div className="location-select">
                <span className="material-icons local-fix">location_on</span>
                <select>
                  <option value="">Alberta</option>
                  <option value="">British Columbia</option>
                  <option value="">Newfoundland and Labrador</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <ul className="selection">
                  <li>Alberta</li>
                  <li>British Columbia</li>
                  <li>Manitoba</li>
                  <li>New Brunswick</li>
                  <li>Newfoundland and Labrador</li>
                  <li>Northwest Territories</li>
                  <li>Nova Scotia</li>
                  <li>Nunavut</li>
                  <li>Ontario</li>
                  <li>Prince Edward Island</li>
                  <li>Quebec</li>
                  <li>Saskatchewan</li>
                  <li>Yukon</li>
                </ul>
              </div>
            </div>
            <button className="search-button-main button-hover">SEARCH</button>
          </form>
          <p>Search keywords e.g. <b>Carpenter</b></p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox;