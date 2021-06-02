import {Switch, Route, Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div class="login-form-page">
      <div class="content-sizing login-form-page-content">
        <form>
          <h1>Create a free account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="holder-input">
            <label>Name</label>
            <input type="Email" placeholder="Your Name" />
          </div>
          <div class="holder-input">
            <label>Email</label>
            <input type="Email" placeholder="Your Email" />
          </div>
          <div class="holder-input">
            <label>Password</label>
            <input type="Password" placeholder="Your Password" />
          </div>
          <div class="holder-input">
            <label>Re-Password</label>
            <input type="Password" placeholder="Your Password" />
          </div>
          <ul class="remember-forgot-password">
            <li><input type="checkbox" id="check"/><label for="check">Accept all the <a href="#">Terms and Conditions</a></label></li>
          </ul>
          <div class="holder-input">
            <button class="button-hover">SIGN UP</button>
          </div>
          <p class="create-link-login">Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup;