import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import {firebase} from './util/firebase';

const Login = (props) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const updateUserInput = (e) => {
    setError('');
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if(userInput.email !== "" & userInput.password !== "") {
      try {
        await props.login(userInput.email, userInput.password);
        history.push('/home');
      } catch(e) {
        setError(e.message);
      }
      
    }
  }

  return (
    <div class="login-form-page">
      <div class="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
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
          {error && <div class="error">{error}</div>}
          <div class="holder-input">
            <label>Email</label>
            <input type="Email" placeholder="Your Email" name="email" onChange={updateUserInput} value={userInput.email} required/>
          </div>
          <div class="holder-input">
            <label>Password</label>
            <input type="Password" placeholder="Your Password" name="password" onChange={updateUserInput} value={userInput.password} required/>
          </div>
          <ul class="remember-forgot-password">
            <li><input type="checkbox" id="check"/><label for="check">Remember password</label></li>
            <li><Link to="/home/forgot-password">Forget Password</Link></li>
          </ul>
          <div class="holder-input">
            <button class="button-hover">LOG IN</button>
          </div>
          <p class="create-link-login">New to Mogogo? <Link to="/home/signup">Create a free account</Link></p>
        </form>
      </div>
    </div>
  )

}

export default Login;