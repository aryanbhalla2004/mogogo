import { useEffect, useState } from "react"
import { Redirect, useHistory, Link, Switch, Route } from "react-router-dom";
import {firebase} from '../../util/firebase';
import Header from './Dashboard-Header';
//import Home from './dashboardHome';
import Post from './PostListing';
import '../../styles/dashboard.css'
import Home from "./home";


const Dashboard = (props) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLocation, setPageLocation] = useState({dashboard: true});
  const ref = firebase.firestore().collection('users');

  // const getUser = () => {
  //   let user = ref.doc(props.user.uid);
  //   user.onSnapshot((querySnapShot) => {
  //     setUserInfo(querySnapShot.data());
  //     setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getUser();
  // }, [])

  return (
    <>
      {!loading &&
      <>
        <Header user={userInfo} logout={props.logout}></Header>
        <div className="main-content">
          <div className="sidebar">
            <div className="post-button-holder">
              <Link to="/dashboard/post-job" className="post-listing-button"><i class="fas fa-plus"></i>&nbsp;&nbsp;&nbsp;Post A New Job</Link>
            </div>
            <div className="sidebar-menu">
              <Link to="/dashboard" className={pageLocation.dashboard ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({dashboard: true})}><i class="fas fa-th-large"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Dashboard</span></Link>
              <Link to="/dashboard/inquires" className={pageLocation.all_posting ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({all_posting: true})}><i class="fas fa-briefcase"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Posted Jobs</span></Link>
              <Link to="/dashboard/inquires" className={pageLocation.inquires ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({inquires: true})}><i class="fas fa-envelope"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Inquires</span></Link>
              <Link to="/dashboard/settings"className={pageLocation.settings ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({settings: true})}><i class="fas fa-cog"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Settings</span></Link>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/dashboard">
                <Home></Home>
              </Route>
              <Route exact path="/dashboard/all-listing">
                <h1>All Listing</h1>
              </Route>
              <Route exact path="/dashboard/inquires">
                <h1>Messages</h1>
              </Route>
              <Route exact path="/dashboard/settings">
                <h1>Settings</h1>
              </Route>
              <Route exact path="/dashboard/post-job">
                <Post></Post>
              </Route>
            </Switch>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default Dashboard