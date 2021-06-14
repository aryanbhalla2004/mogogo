import {useState, useEffect} from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import './App.css';
import Forgotpassword from './components/ForgotPassword';
import Header from './components/Header';
import Login from './components/Login';
import SearchBox from './components/SearchBox';
import Signup from './components/Signup';
import ConfirmForgotPassword from './components/Create-new-password';
import SendActivationEmail from './components/Activate-account';
import Home from './components/home';
import {auth, firebase} from './util/firebase';
import EmailAuthReceiving from './components/emailAuthReceiving';
import ConfirmActivation from './components/ConfirmAccountActivation';
import Dashbord from './components/dashboard/Dashboard';
import SearchResults from './components/Search-results';
import JobDetails from './components/job-details';

const App = () => {
  const history = useHistory();
  const [searchJobQuery, setSearchJobQuery] = useState({
    query: '',
    location: ''
  });
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading ] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const forgotPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  const resetForgotPassword = (code, newPassword) => {
    return auth.confirmPasswordReset(code, newPassword);
  }
  
  const emailVerified = () => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then((res) => {
      return res
    }).catch((err) => {
      return err
    })
  }

  const verifyEmailUser = (code) => {
    return auth.applyActionCode(code);
  }

  const logout = () => {
    auth.signOut();
    history.push('/');
  }

  const allAuthFunction = (provider) => {
    return firebase.auth().signInWithPopup(provider)
      .then((res) => {
        return res.user;
      })
      .catch((er) => {
        return er;
      });
  }

  return (
    <>
      {!loading && 
        <Switch>
          <Route path="/">
            <Header userSession={currentUser} logout={logout}></Header>
            <Route exact path="/">
              <div className="content-below-header">
                <div className="content-sizing slider-below-data">
                  <div className="header-overlay-pattern">
                    <img src="/background-header.png" />
                  </div>
                  <div className="header-overlay-picture">
                    <img src="/background-person.png" />
                  </div>
                  <SearchBox setSearchJobQuery={setSearchJobQuery} setLocation={setLocation} setQuery={setQuery} location={location} query={query}></SearchBox>
                </div>
              </div>
              <div className="spliter-main-page">
                <div className="content-sizing spliter-main-page-content">
                  <p>Get you post on the main page</p>
                  <h2>Sign up now and start posting you listing!</h2>
                </div>
              </div> 
            </Route>
            <Route path="/user">
              <div className="content-below-header height-fix">
                <div className="content-sizing slider-below-data">
                  <div className="header-overlay-pattern">
                    <img src="/background-header.png" />
                  </div>
                  <div className="header-overlay-picture">
                    <img src="/background-person.png" />
                  </div>
                  <Route exact path="/user/login">
                    {currentUser ? <Redirect to="/"/> : <Login login={login} successMessage={successMessage} allAuthFunction={allAuthFunction}></Login>}                    
                  </Route>
                  <Route exact path="/user/signup">
                    {currentUser ? <Redirect to="/"/>: <Signup signup={signUp}></Signup>}                    
                  </Route>
                  <Route exact path="/user/forgot-password">
                    {currentUser ? <Redirect to="/"/> : <Forgotpassword forgotPassword={forgotPassword}></Forgotpassword>}
                  </Route>
                  <Route exact path="/user/create-new-password">
                    {currentUser ? <Redirect to="/"/> : <ConfirmForgotPassword resetForgotPassword={resetForgotPassword} setSuccessMessage={setSuccessMessage}></ConfirmForgotPassword>}
                  </Route>
                  <Route exact path="/user/activate-account">
                    {currentUser ? currentUser.emailVerified ? <Redirect to="/" /> : <SendActivationEmail emailVerified={emailVerified} currentUser={currentUser}></SendActivationEmail> : <Redirect to="/"/>}
                  </Route>
                  <Route path="/user/confirm-account-activation">
                    {currentUser && <ConfirmActivation verifyEmailUser={verifyEmailUser}/>}
                  </Route>
                </div>
              </div>
              <div className="spliter-main-page">
                <div className="content-sizing spliter-main-page-content">
                  <p>We Provide Support 24/7</p>
                  <h2>Mogogo can help you reach your business goals!</h2>
                </div>
              </div>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/search-results">
              <SearchResults setLocation={setLocation} setQuery={setQuery} location={location} query={query}/>
            </Route>
            <Route exact path="/job-details/:masterId/:listingId">
              <JobDetails/>
            </Route>
            {/* <div className="copyright">
              <p>&copy;&nbsp;Copyright 2021 | All Reserved By Mogogo</p>
            </div> */}
            <Route exact path="/user-auth-email-system">
              <EmailAuthReceiving />
            </Route>

            <Route path="/dashboard">              
              {currentUser ? currentUser.emailVerified ? <Dashbord logout={logout} currentUser={currentUser}/> : <Redirect to="/user/activate-account"/> : <Redirect to="/user/login"/>}
            </Route>
          </Route>
        </Switch> 
        }
    </>
  )
}

export default App;