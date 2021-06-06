import {useState, useEffect, Children} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom'; 

const ConfirmForgotPassword = (props) => {
  const history  = useHistory();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("Password reset has been confirmed. Please enter the new password for you account and proceed.");
  const [userInput, setUserInput] = useState({
    password: "",
    confirmPassword: ""
  });

  const updateUserInput = (e) => {
    setError('');
    setMessage('');
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('oobCode');

    try {
      await props.confirmPasswordReset(code, userInput.password);
      props.setSuccessMessage('Password was successfully reset, Login in your account and enjoy!');
      console.log(props.setSuccessMessage);
      history.push('/home/login');
    } catch(e) {
      setError(e.message);
    }
    
  }

  return (
    <div class="login-form-page">
      <div class="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Confirm Password Reset</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {message && <div class="message">{message}</div>}
          {error && <div class="error">{error}</div>}
          <div class="holder-input">
            <label>New Password</label>
            <input placeholder="Your Email" type="password" name="password" value={userInput.password}  onChange={updateUserInput} required/>
          </div>
          <div class="holder-input">
            <label>Confirm Password</label>
            <input placeholder="Your Email" name="password" value={userInput.password}  onChange={updateUserInput} required/>
          </div>
          <div class="holder-input">
            <button class="button-hover">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmForgotPassword;