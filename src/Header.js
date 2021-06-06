import {Switch, Route, Link} from 'react-router-dom';

const Header = (props) => {

  let headerButton = [<Link class="login-button-header" to="/home/login">LOG IN</Link>,<Link class="sign-up-button-header button-hover" to="/home/signup">SIGN UP</Link>];
  if (props.userExist) {
    headerButton = [
      <li className="user-header-main-button"><Link><i class="far fa-heart"></i></Link></li>,
      <li className="user-header-main-button"><Link><i class="far fa-bell"></i></Link></li>,
      <li className="user-header-main-button"><Link><i class="far fa-envelope"></i></Link></li>,
      <Link class="sign-up-button-header button-hover account-button" to="/dashboard">MY ACCOUNT&nbsp;<i class="fas fa-chevron-down"></i>
        <div className="header-list-button">
          <ul>
            <li><Link><i class="fas fa-plus"></i>&nbsp;Post Listing</Link></li>
            <li><Link><i class="fas fa-cog"></i>&nbsp;Settings</Link></li>
            <li><Link onClick={(e) => props.logout()}><i class="fas fa-sign-out-alt"></i>&nbsp;Logout</Link></li>
          </ul>
        </div>
      </Link>
    ];
  }
  return (
    <div class="menu" style={{}}>
      <div class="content-sizing header">
        <ul class="logo-holder">
          <Link to="/home"><h1 class="logo-main"><span class="logo main-logo">M</span>Mogogo</h1></Link>
        </ul>
        <Switch>
          <Route exact path={['/home','/support', '/faq']}>
            <ul class="menu-buttons">
              <ul class="menu-links">
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/support">SUPPORT</Link></li>
              </ul>
              <div class="line"></div>
              <ul class="other-buttons">
                {headerButton}
              </ul>
            </ul>
          </Route>
          <Route path={["/home/login", "/home/signup", "/home/forgot-password", "/home/activate", "/home/confirm-forgot-password"]}>
            <ul class="menu-buttons">
              <ul class="menu-links">
                <li><Link to="/home/support">SUPPORT 24/7</Link></li>
              </ul>
            </ul>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Header;