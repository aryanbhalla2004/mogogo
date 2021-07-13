import { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const [userDrop, setUserDrop] = useState(false);
  console.log(props.user);
  return (
    <div className="header-dashboard">
      <ul className="logo-holder">
        <Link to="/dashboard"><h1 class="logo-main"><span className="logo main-logo">M</span>Mogogo</h1></Link>
      </ul>
      <ul className="header-rightSide-dashboard">
        <li className="user-header-main-button"><Link className="support-link-dashboard">Support</Link></li>
        <div className="line"></div>
        <li className="user-header-main-button bell"><Link><i className="far fa-bell"></i></Link></li>
        <li className="hoverEffect-size-expand" onMouseEnter={(e) => setUserDrop(true)} onMouseLeave={(e) => setUserDrop(false)}>
          <Link><span className="name-user-logo">{props.user && props.user.Name.toString()[0]}</span>&nbsp;{props.user && props.user.Name}&nbsp;<i class="fas fa-chevron-down aero-beside-header"></i></Link>
          <div className={userDrop ? "dropdown-menu-dashboard-header" : "show-block"} >
            <ul>
              <li><Link to="/dashboard/inquires" onClick={(e) => setUserDrop(false)}>Clients Inquires</Link></li>
              <li><Link to="/dashboard/settings"  onClick={(e) => setUserDrop(false)}><i className="fas fa-cog"></i>&nbsp;&nbsp;Setting</Link></li>
              <li><Link className="logout-color" onClick={(e) => props.logout() && setUserDrop(false)}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;Logout</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Header;