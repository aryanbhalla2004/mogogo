import {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MainSearch from './Main-Search';

const App = () => {

  return (
    <>
      <Header></Header>
      <header>
        <div class="header-overlay-pattern">
          <img src="background-header.png" />
        </div>
        <div class="header-overlay-picture">
          <img src="background-person.png" />
        </div>
        <Switch>
          <Route exact path="/">
            <MainSearch></MainSearch>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </header>
    </>
  )

}

export default App
