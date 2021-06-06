import { useEffect, useState } from "react"
import { Redirect, useHistory, Link, Switch, Route } from "react-router-dom";
import {firebase} from './util/firebase';
import Header from './DashboardHeader';
import Home from './dashboardHome';
import Post from './PostListing';
import './dashboard.css'

const Dashboard = (props) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  const ref = firebase.firestore().collection('users');

  const getUser = () => {
    if(props.user.emailVerified) {
      let user = ref.doc(props.user.uid);
      user.onSnapshot((querySnapShot) => {
        setUserInfo(querySnapShot.data());
        setLoading(false);
      });
    } else {
      history.push('/home/activate');
    }
    
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <>
      {!loading &&
      <>
        <Header user={userInfo}></Header>
        <div className="main-content">
          <div className="sidebar">
            <div className="post-button-holder">
              <Link to="/dashboard/post-job" className="post-listing-button"><i class="fas fa-plus"></i>&nbsp;&nbsp;&nbsp;Post A New Job</Link>
            </div>
            <div className="sidebar-menu">
              <Link to="/dashboard" className="active-side-bar"><i class="fas fa-th-large"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Dashboard</span></Link>
              <Link to="/dashboard/all-listing"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Posted Jobs</span></Link>
              <Link to="/dashboard/inquires"><i class="fas fa-envelope"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Inquires</span></Link>
              <Link to="/dashboard/settings"><i class="fas fa-cog"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Settings</span></Link>
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