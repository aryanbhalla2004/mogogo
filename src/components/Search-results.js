import '../styles/search-result.css';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {auth, firebase} from '../util/firebase';

const SearchResults = (props) => {
  //const [lastId, setLastId] = useState({});
  const [jobList, setJobList] = useState([]);
  const [styleBlock, setStyleBlock] = useState(true);

  useEffect(() => {
    firebase.firestore().collection('listings').get().then((querySnapshot) => {
      querySnapshot.forEach((mainBox) => {
        const post = firebase.firestore().collection('listings').doc(mainBox.id).collection('post');
        post.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let singleJob = doc.data();
              if(singleJob.title.toLowerCase().includes(props.query)) {
                setJobList(currentState => {
                console.log(singleJob, currentState);
                return [...currentState, singleJob];  
              });
            }
          });
        })
      })
    });
  }, []);

  const searchResults = (e) => {
    setJobList([])
    e.preventDefault();
    firebase.firestore().collection('listings').get().then((querySnapshot) => {
      querySnapshot.forEach((mainBox) => {
        const post = firebase.firestore().collection('listings').doc(mainBox.id).collection('post');
        post.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let singleJob = doc.data();
              if(singleJob.title.toLowerCase().includes(props.query)) {
                setJobList(currentState => {
                console.log(singleJob, currentState);
                return [...currentState, singleJob];  
              });
            }
          });
        })
      })
    });
  }


  return (
    <div className="results-page-holder">
      <div className="content-sizing results-page-holder-content">
        <div className="filter-holders">
          <ul>
            <li>
              <h2>Posted Time</h2>
              <ul>
                <li>
                  <input type="checkbox"/>
                  <lable>Anytime</lable>
                </li>
                <li>
                  <input type="checkbox"/>
                  <p>Yesterday</p>
                </li>
                <li>
                  <input type="checkbox"/>
                  <p>Last 3 days</p>
                </li>
                <li>
                  <input type="checkbox"/>
                  <p>Last week</p>
                </li>
              </ul>
            </li>
            <li>
              <h2>Job Type</h2>
              <ul>
                <li>
                  <input type="checkbox"/>
                  <p>Full Time</p>
                </li>
                <li>
                  <input type="checkbox"/>
                  <p>Part Time</p>
                </li>
                <li>
                  <input type="checkbox"/>
                  <p>Business</p>
                </li>
                <li>
                  <input type="checkbox"/>
                  <p>Individual</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search-and-results">
          <div className="search-input-holder">
            <div className="search-input search-input-result-page">
              <span className="material-icons">search</span>
              <input placeholder="Job Title" value={props.query} onChange={(e) => props.setQuery(e.target.value)}/>  
            </div>
            <div className="line-from line-height-more"></div>
            <div className="location-select search-input-result-page">
              <span className="material-icons local-fix">location_on</span>
              <select value={props.location} onChange={(e) => props.setLocation(e.target.value)}>
                <option value={props.location} selected>{props.location}</option>
                <option value="">Alberta</option>
                <option value="">British Columbia</option>
                <option value="">Newfoundland and Labrador</option>
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
            <button className="search-button-main button-hover search-button-width-fix" type="submit" onClick={searchResults}>SEARCH</button>
          </div>
          <div className="results">
            <div className="top-info-about-result">
              <p><span className="total-result">120</span> result for <span className="search-name">computer repair</span></p>
              <div>
                <i className={styleBlock ? "fas fa-th-large active-style" : "fas fa-th-large"} onClick={(e) => setStyleBlock(true)}></i>
                <i className={!styleBlock ? "fas fa-list active-style": 'fas fa-list'} onClick={(e) => setStyleBlock(false)}></i>
              </div>
            </div>
            <ul>
              {
                styleBlock ? 
                <li>
                <div className="logo-holder">
                  <img src="/12.jpeg" width="100%"/>
                </div>
                <div className="title-info">
                  <p>Information Technology</p>
                  <h2>Computer Repair and Technology</h2>
                </div>
                <div className="tags">
                  <ul>
                    <li className="location"><i class="bi bi-geo-alt"></i>&nbsp;Winnipeg</li>
                    <li className="work-info"><i class="fas fa-briefcase"></i>&nbsp;Full-Time</li>
                    <li className="cost"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></li>
                  </ul>
                </div>
                <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.</p>
                <div className="button-post">
                  <Link className="button-hover">INQUIRY</Link>
                  <a><i class="bi bi-bookmark"></i>&nbsp;SAVE IT</a>
                </div>
              </li> :
              <li className="list-style">
                <div className="topbar-info">
                  <div className="left-side">
                    <img src="/12.jpeg" width="100px"/>
                    <ul>
                      <h2>Computer Repair and Technology</h2>
                      <p>Information Technology</p>
                    </ul>
                  </div>
                  <div className="button-post listing-buttons">
                    <Link className="button-hover">INQUIRY</Link>
                    <Link><i class="bi bi-bookmark"></i>&nbsp;SAVE IT</Link>
                  </div>
                </div>
                <div className="tags listing-tags">
                  <ul>
                    <li className="location"><i class="bi bi-geo-alt"></i>&nbsp;Winnipeg</li>
                    <li className="work-info"><i class="fas fa-briefcase"></i>&nbsp;Full-Time</li>
                    <li className="cost"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></li>
                  </ul>
                </div>
              </li> &&
              <li className="list-style">
              <div className="topbar-info">
                <div className="left-side">
                  <img src="/12.jpeg" width="100px"/>
                  <ul>
                    <h2>Computer Repair and Technology</h2>
                    <p>Information Technology</p>
                  </ul>
                </div>
                <div className="button-post listing-buttons">
                  <Link className="button-hover">INQUIRY</Link>
                  <Link><i class="bi bi-bookmark"></i>&nbsp;SAVE IT</Link>
                </div>
              </div>
              <div className="tags listing-tags">
                <ul>
                  <li className="location"><i class="bi bi-geo-alt"></i>&nbsp;Winnipeg</li>
                  <li className="work-info"><i class="fas fa-briefcase"></i>&nbsp;Full-Time</li>
                  <li className="cost"><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></li>
                </ul>
              </div>
            </li>
              }
              
            </ul>
            {/* {jobList && jobList.map(list => (
              <h1>{list.title}</h1>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;