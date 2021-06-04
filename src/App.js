import {useState, useEffect} from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import {auth} from './util/firebase';

import './App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MainSearch from './Main-Search';
import Forgotpassword from './ForgotPassword';
import Dashboard from './Dashbord';

const App = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading ] = useState(true);
  
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

  const logout = (user) => {
    auth.signOut();
    history.push('/home');
  }

  const resetPassword = async (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  return (
    <>
      {!loading &&
        <Switch>
          <Route exact path='/'>
            <Redirect to="/home"/>
          </Route>
          <Route path='/home'>
            <Header userExist={currentUser}></Header>
            <header>
              <div class="header-overlay-pattern">
                <img src="/background-header.png" />
              </div>
              <div class="header-overlay-picture">
                <img src="/background-person.png" />
              </div>
              <Route exact path="/home">
                <MainSearch></MainSearch>
              </Route>
              <Route exact path="/home/login">
                {currentUser ? <Redirect to="/dashboard" /> : <Login login={login}></Login>}
              </Route>
              <Route exact path="/home/signup">
                {currentUser ? <Redirect to="/dashboard" /> : <Signup signup={signUp}></Signup>}
              </Route>
              <Route exact path="/home/forgot-password">
                {currentUser ? <Redirect to="/dashboard" /> : <Forgotpassword resetPassword={resetPassword}></Forgotpassword>}
              </Route>
            </header>
            <Route exact path="/home">
              <div class="spliter-main-page">
                <div class="content-sizing spliter-main-page-content">
                  <p>Get you post on the main page</p>
                  <h2>Sign up now and start posting you listing!</h2>
                </div>
              </div>
              <div class="category-main-container">
                <div class="content-sizing category-main-content">
                  <ul>
                    <h2>Most popular category</h2>
                    <a>Explore all</a>
                  </ul>
                  <ul class="category-list-holder">
                    <li>
                      <div>
                        <i class="fas fa-briefcase"></i>
                      </div>
                      <h3>Business Development</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div>
                        <i class="fas fa-headset"></i>
                      </div>
                      <h3>Customer Service</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div>
                        <i class="fas fa-layer-group"></i>
                      </div>
                      <h3>Development</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div>
                        <i class="fas fa-pen-nib"></i>
                      </div>
                      <h3>Design</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div>
                        <i class="fas fa-rocket"></i>
                      </div>
                      <h3>Marketing & Management</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div>
                        <i class="fas fa-location-arrow"></i>
                      </div>
                      <h3>Sale & Communication</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div><i class="fas fa-tasks"></i></div>
                      <h3>Project Management</h3>
                      <p>234 Vacancy</p>
                    </li>
                    <li>
                      <div><i class="fas fa-user"></i></div>
                      <h3>Human Resource</h3>
                      <p>234 Vacancy</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Route>
          </Route>
          <Route exact path="/dashboard">
            {currentUser === "True" ? <Redirect to="/home/login" /> : <Dashboard user={currentUser} logout={logout}></Dashboard>}
          </Route>
        </Switch>
      }
    </>
  )

}

export default App
