import { Children, useEffect, useState } from "react"
import { Redirect, useHistory, Link, Switch, Route } from "react-router-dom";
import {auth, firebase} from '../../util/firebase';
import Header from './Dashboard-Header';
import Post from './PostListing';
import '../../styles/dashboard.css'
import Home from "./home";
import Setting from './setting'
import Listings from "./all-listing";


const Dashboard = (props) => {
  const uid = auth.currentUser.uid;
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [pageLocation, setPageLocation] = useState({dashboard: true});
  const [allListing, setListing] = useState([]);
  const ref = firebase.firestore().collection('users');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const getUser = () => {
    let user = ref.doc(props.currentUser.uid);
    user.onSnapshot((querySnapShot) => {
      setUserInfo(querySnapShot.data());
      setLoading(false);
    });
  }

  const deleteListing = async () => {
    try {
      await firebase.firestore().collection('listings').doc(uid).collection('post').doc(deleteId).delete();
    } catch (e) {
      console.log(e);
    }


    setConfirmDelete(false);
  }

  useEffect(() => {
    getUser();
    const FetchInfo = async () => {
      const cityRef = firebase.firestore().collection('listings').doc(uid).collection('post');
      cityRef.onSnapshot((querySnapShot) => {
        const items = [];
        querySnapShot.forEach((doc) => {
          let info = doc.data();
          let id = doc.id;
          items.push({...info, id});  
        });
        setListing(items);
      });
    }
    FetchInfo();
  }, [])

  return (
    <>
      {!loading &&
      <>
        <Header user={userInfo} logout={props.logout}></Header>
        <div className="main-content">
          <div className="sidebar">
            <div className="post-button-holder">
              <Link to="/dashboard/post-job" className="post-listing-button button-hover" onClick={(e) => setPageLocation({post_button: true})}><i class="fas fa-plus"></i>&nbsp;&nbsp;&nbsp;Post A New Job</Link>
            </div>
            <div className="sidebar-menu">
              <Link to="/dashboard" className={pageLocation.dashboard === true ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({dashboard: true})}><i class="fas fa-th-large"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Dashboard</span></Link>
              <Link to="/dashboard/all-listing" className={pageLocation.all_posting ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({all_posting: true})}><i class="fas fa-briefcase"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Posted Jobs</span></Link>
              <Link to="/dashboard/inquires" className={pageLocation.inquires ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({inquires: true})}><i class="fas fa-envelope"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Inquires</span></Link>
              <Link to="/dashboard/settings"className={pageLocation.settings ? 'active-side-bar' : ''} onClick={(e) => setPageLocation({settings: true})}><i class="fas fa-cog"></i>&nbsp;&nbsp;<span className="name-list-sidebar">Settings</span></Link>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/dashboard">
                <Home totalListing={allListing.length}></Home>
              </Route>
              <Route exact path="/dashboard/all-listing">
                <Listings allListing={allListing} setConfirmDelete={setConfirmDelete} setDeleteId={setDeleteId}/>
              </Route>
              <Route exact path="/dashboard/inquires">
                <h1>Messages</h1>
              </Route>
              <Route exact path="/dashboard/settings">
                <Setting user={userInfo}></Setting>
              </Route>
              <Route exact path="/dashboard/post-job">
                <Post user={userInfo}></Post>
              </Route>
            </Switch>
          </div>
        </div>
      </>
      }
      {
      confirmDelete === true ?
      <div class="confirmDelete-listing">
        <div className="confirm-Delete-box loading-In-Animation">
          <div className="trash-icon-holder">
            <i class="far fa-trash-alt"></i>
          </div>
          <h2>Want to Delete</h2>
          <p className="delete-text">Are you sure you want to delete this listing? You will <span className="primary-color">not be able to recover</span> them.</p>
          <div className="button-clean">
            <Link className="urgent-red" onClick={(e) => deleteListing()}>Delete</Link>
            <Link className="button-hover" onClick={(e) => setConfirmDelete(false) || setDeleteId('')}>Cancle</Link>
          </div>
        </div>
      </div> : false
    }
    </>
  )
}

export default Dashboard