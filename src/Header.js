import {useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

const Header = () => {
  return (
    <div class="menu">
      <div class="content-sizing header">
        <ul class="logo-holder">
          <Link to="/"><h1 class="logo-main"><span class="logo main-logo">M</span>Mogogo</h1></Link>
        </ul>
        <Switch>
          <Route exact path='/'>
            <ul class="menu-buttons">
              <ul class="menu-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/support">SUPPORT</Link></li>
              </ul>
              <div class="line"></div>
              <ul class="other-buttons">
                <Link class="login-button-header" to="/login">LOG IN</Link>
                <Link class="sign-up-button-header button-hover" to="/signup">SIGN UP</Link>
              </ul>
            </ul>
          </Route>
          <Route path={["/login", "/signup"]}>
            <ul class="menu-buttons">
              <ul class="menu-links">
                <li><Link to="/support">SUPPORT 24/7</Link></li>
              </ul>
            </ul>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Header;