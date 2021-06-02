import {Switch, Route, Link} from 'react-router-dom';

const Login = () => {
  return (
    <div class="login-form-page">
      <div class="content-sizing login-form-page-content">
        <form>
          <h1>Welcome Back</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="header-social-icon-split">
            <ul class="social Media">
              <li class="google"><i class="fab fa-google"></i></li>
              <li class="twitter"><i class="fab fa-twitter"></i></li>
              <li class="facebook"><i class="fab fa-facebook-f"></i></li>
            </ul>
            <div class="line-holder">
              <div class="line-login"></div>
              <p>OR</p>
              <div class="line-login"></div>
            </div>
          </div>
          <div class="holder-input">
            <label>Email</label>
            <input type="Email" placeholder="Your Email" />
          </div>
          <div class="holder-input">
            <label>Password</label>
            <input type="Password" placeholder="Your Password" />
          </div>
          <ul class="remember-forgot-password">
            <li><input type="checkbox" id="check"/><label for="check">Remember password</label></li>
            <li><Link to="/forgotpassword">Forget Password</Link></li>
          </ul>
          <div class="holder-input">
            <button class="button-hover">LOG IN</button>
          </div>
          <p class="create-link-login">New to Mogogo? <Link to="/signup">Create a free account</Link></p>
        </form>
      </div>
    </div>
  )

}

export default Login;