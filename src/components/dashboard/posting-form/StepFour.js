import {Link} from 'react-router-dom';

const LastStep = () => {
  return (
    <div className="finshed-page">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
      <h2>Your All Set!</h2>
      <p>The listing has been posted on Mogogo, and its visible to all the users</p>
      <p className="mt-10">We hope you enjoyed the process!!</p>
      <div className="button-four-form-bottom">
        <Link to="/dashboard/all-listing" className="button-hover">View Posts</Link>
        <Link to="/dashboard" className="">Dashboad</Link>
      </div>
    </div>
  )
}

export default LastStep;