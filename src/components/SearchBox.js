import { useState, useEffect} from 'react';
import '../styles/search-box-home.css';
import {useHistory} from 'react-router-dom';

const SearchBox = (props) => {
  const history = useHistory();
  
  useEffect(() => {
    const locationInfo = async (pos) => {
      const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=c968fdc13c4c7ad94b64bfc708f5fa16&query=${pos.coords.latitude},${pos.coords.longitude}`);
      const JSON = await response.json();
      props.setLocation(`${JSON.data[0].locality}, ${JSON.data[0].region_code}`); 

    }
    navigator.geolocation.getCurrentPosition(locationInfo);
  }, []);

  const searchListingForm = (e) => {
    e.preventDefault();
    props.setSearchJobQuery({
      query: props.query,
      location: props.location
    });
    if(props.query !== "") {
      history.push('/search-results');
    }
  }

  return (
    <div className="search-container">
      <div className="content-sizing search-content">
        <div className="slider-header-search">
          <h1>Find the right person for your job.</h1>
            <form onSubmit={searchListingForm}>
            {props.location ?
              <>
              <div className="form-input-main">
                <div className="search-input">
                  <span className="material-icons">search</span>
                  <input placeholder="Job Title" value={props.query} onChange={(e) => props.setQuery(e.target.value)}/>
                </div>
                <div className="line-from"></div>
                <div className="location-select">
                  <span className="material-icons local-fix">location_on</span>
                  <select value={props.location} selected>
                    <option value="">Alberta</option>
                    <option value="">British Columbia</option>
                    <option value="">Newfoundland and Labrador</option>
                    <option value={props.location} selected>{props.location}</option>
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
              <button className="search-button-main button-hover" type="submit">SEARCH</button>
            </>
              : 
            <div class="loadingio-spinner-rolling-thiibpdvbmo">
              <div class="ldio-bh44xkw0e6g">
                <div></div>
              </div>
            </div>
          }
            </form>
          <p>Search keywords e.g. <b>Carpenter</b></p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox;