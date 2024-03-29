const MainSearch = () => {
  return (
    <div class="search-container">
      <div class="content-sizing search-content">
        <div class="slider-header-search">
          <h1>Find the right person for your job.</h1>
          <form>
            <div class="form-input-main">
              <div class="search-input">
                <span class="material-icons">search</span>
                <input placeholder="Job Title" />
              </div>
              <div class="line-from"></div>
              <div class="location-select">
                <span class="material-icons local-fix">location_on</span>
                <select>
                  <option value="">Alberta</option>
                  <option value="">British Columbia</option>
                  <option value="">Newfoundland and Labrador</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <ul class="selection">
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
            <button class="search-button-main button-hover">SEARCH</button>
          </form>
          <p>Search keywords e.g. <b>Carpenter</b></p>
        </div>
      </div>
    </div>
  )
}

export default MainSearch;