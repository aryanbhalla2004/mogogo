import {Link} from 'react-router-dom';

const header = (props) => {
  return (
    <div className="header-dashboard">
      <ul className="logo-holder">
        <Link to="/dashboard"><h1 class="logo-main"><span className="logo main-logo">M</span>Mogogo</h1></Link>
      </ul>
      <ul className="header-rightSide-dashboard">
        <li><a><i className="far fa-bell"></i></a></li>
        <li className=""><a>{props.user.Name}&nbsp;<i class="fas fa-chevron-down"></i></a></li>
      </ul>
    </div>
  )
}

export default header