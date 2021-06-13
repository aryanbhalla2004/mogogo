import { useState } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import '../styles/header.css';

const Header = (props) => {
  const [accountMenu, setAccountMenu] = useState(false);
  const defaultPagesPath = ['/', "/faq", "/support", "/search-results", "/job-details"];
  const userPagesPath = ["/user/login", "/user/signup", "/user/forgot-password", "/user/create-new-password", "/user/activate-account", "/user/confirm-account-activation"];
  const [responsiveShow, setResponsiveShow] = useState({
    show: true,
    value: <i class="fas fa-bars"></i>
  });

  const responsiveMenuButton = () => {
    if(responsiveShow.show) {
      setResponsiveShow({
        show: false,
        value: <i class="fas fa-times"></i>
      });
    } else {
      setResponsiveShow({
        show: true,
        value: <i class="fas fa-bars"></i>
      }); 
    }
  }

  let headerButton = [<Link className="login-button-header" to="/user/login">LOG IN</Link>,<Link className="sign-up-button-header button-hover" to="/user/signup">SIGN UP</Link>];
  if (props.userSession) {
    headerButton = [
      <li className="user-header-main-button heart"><Link><i class="far fa-bookmark"></i></Link></li>,
      <li className="user-header-main-button bell"><Link><i className="far fa-bell"></i></Link></li>,
      <li className="user-header-main-button mail"><Link><i className="far fa-envelope"></i></Link></li>,
      <Link class="sign-up-button-header button-hover account-button" onMouseEnter={(e) => setAccountMenu(true)} onMouseLeave={(e) => setAccountMenu(false)}>MY ACCOUNT&nbsp;<i className="fas fa-chevron-down"></i>
        <div className="header-list-button" onMouseEnter={(e) => setAccountMenu(true)} onMouseLeave={(e) => setAccountMenu(false)}>
          <ul className={accountMenu ? "show-account-menu" : ''}>
            <li><Link to="/dashboard"><i class="fas fa-th-large"></i>&nbsp;&nbsp;Dashboard</Link></li>
            <li><Link><i className="fas fa-plus"></i>&nbsp;&nbsp;Post Listing</Link></li>
            <li><Link><i className="fas fa-cog"></i>&nbsp;&nbsp;Settings</Link></li>
            <li><Link onClick={(e) => props.logout()} className="logout-color"><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout</Link></li>
          </ul>
        </div>
      </Link>
    ];
  }

  return (
    <Switch>
      <Route exact path={[...defaultPagesPath, ...userPagesPath]}>
        <div className="menu">
          <div className="content-sizing header">
            <ul className="logo-holder">
              <Link to="/"><h1 className="logo-main"><span className="logo main-logo">M</span>Mogogo</h1></Link>
            </ul>
            <Switch>
              <Route exact path={[...defaultPagesPath]}>
                <ul className="menu-buttons">
                  <ul className="menu-links">
                    <li className="home-link"><Link to="/">HOME</Link></li>
                    <li className="faq-link"><Link to="/faq">FAQ</Link></li>
                    <li className="supp-link"><Link to="/support">SUPPORT</Link></li>
                  </ul>
                  <div className="line"></div>
                  <div className="responsive-nav" onClick={responsiveMenuButton}>{responsiveShow.value}</div>
                  <ul className={responsiveShow.show ? 'other-buttons show-block' : "other-buttons"}>
                    {headerButton}
                  </ul>
                </ul>
              </Route>
              <Route path={[...userPagesPath]}>
                <ul className="menu-buttons">
                  <ul className="menu-links user-pages-padding-fix">
                    <li><Link to="/support">SUPPORT 24/7</Link></li>
                  </ul>
                </ul>
              </Route>
            </Switch>
          </div>
        </div>
      </Route>
    </Switch>
  )
}

export default Header