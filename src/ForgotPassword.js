import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';

const Forgotpassword = (props) => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
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
    try {
      let info = await props.resetPassword(userInput.email);
      console.log(info);
      setMessage(`Check your inbox for further instruction`);
    } catch(e) {
      setError(e.message);
    }
    
  }

  return (
    <div class="login-form-page">
      <div class="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Reset Password</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {message && <div class="message">{message}</div>}
          {error && <div class="error">{error}</div>}
          <div class="holder-input">
            <label>Email</label>
            <input placeholder="Your Email" name="email" value={userInput.email}  onChange={updateUserInput} required/>
          </div>
          <div class="holder-input">
            <button class="button-hover">Continue</button>
          </div>
          <p class="create-link-login">Done resetting your password? <Link to="/home/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;