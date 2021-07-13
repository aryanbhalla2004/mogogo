import { useState, useEffect } from "react";
import { Redirect, useHistory, Link, Switch, Route } from "react-router-dom";
import moment from "moment";
const Listings = (props) => {
  const [results, setResults] = useState();
  const [activePage, setActivePage] = useState({active: true});
  const [search, setSearch] = useState("");

  useEffect(() => {
    setResults(props.allListing);
  }, [props.allListing]);

  useEffect(() => {
    let info = props.allListing.filter(list => list.title.toLowerCase().includes(search.toLocaleLowerCase()));
    setResults(info);
  }, [search]);

  return (
    <>
      <div className="listing-header">
        <h1>Posted Jobs</h1>
        <div className="icon-row search-bar-all-listing">
          <span className="material-icons back">search</span>
          <input placeholder="Search...." name="title" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </div>
        <div className="button-active-inactive">
          <Link className={activePage.active ? "button-listing-active" : ""} onClick={(e) =>  setActivePage({active: true})}>Active <span>{props.allListing.length}</span></Link>
          <Link className={activePage.inactive ? "button-listing-active" : ""} onClick={(e) =>  setActivePage({inactive: true})}>Inactive <span>{props.inactive ? props.inactive.length : 0}</span></Link>
        </div>
      </div>
      <div className="ad-listing-listing-page">
          <table>
            <tr className="header-table">
              <th className="image-holder"></th>
              <th className="title-holder">Title</th>
              <th className="expire-holder">Expiration</th>
              <th className="type-holder">Type</th>
              <th className="replies-holder">Reviews</th>
              <th className="view-holder">Views</th>
              <th className="modify-holder">Modify</th>
            </tr>
            {results ? 
            results.map(list => (
              <tr className="single-data">
                <td className="image-holder">
                  <img src="/12.jpeg" width="100%"/>
                </td>
                <td className="title-holder">
                  {list.title}
                  <Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                  &nbsp;Edit Listing</Link>
                </td>
                <td className="expire-holder">
                    <p>{moment(list.posted_date).add(3, 'months').format("MMM D")}</p>
                    <p>Posted {moment(list.posted_date).format("MMM D")}</p>
                </td>
                <td className="type-holder">{list.type}</td>
                <td className="replies-holder">{list.review.length}</td>
                <td className="view-holder">0</td>
                <th className="modify-holder">
                  <div className="modify-button">
                    <Link className="button-hover" onClick={(e) => props.setConfirmDelete(true) || props.setDeleteId(list.id)}><i class="far fa-trash-alt"></i>&nbsp;&nbsp;Delete</Link>
                  </div>
                </th>
              </tr>
            )) : 
            <div className="empty-no-result">
              <i class="far fa-folder-open"></i>
              <h1>Post Listings is empty</h1>
              <p>It seems like you haven posted any listing yet. By clicking on the <b>POST A NEW JOB</b> button to post you jobs</p>
              <Link className="button-hover" to="/dashboard/post-job">POST A JOB</Link>
            </div>
            }
          </table>
      </div>
    </>
  )
}

export default Listings;