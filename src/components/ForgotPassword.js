import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';

const Forgotpassword = (props) => {
  const [error, setError] = useState({
    email: '',
    all: ''
  });

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
    if(userInput.email !== "") {
      try {
        await props.forgotPassword(userInput.email);
        setMessage(`Check the inbox of ${userInput.email} for further instruction`);
      } catch(e) {
        setError({all: e.message});
      }
    } else {
      setError({email: 'Email field is empty'})
    }
  }

  return (
    <div className="login-form-page forgot-password-fix">
      <div className="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Reset Password</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsun amet compents</p>
          {message && <div className="success">{message}</div>}
          {error.all && <div className="error">{error.all}</div>}
          <div className="holder-input">
            <label>Email</label>
            <input placeholder="Your Email" name="email" value={userInput.email}  onChange={updateUserInput}/>
          </div>
          {error.email && <div className="error">{error.email}</div>}
          <div className="holder-input">
            <button className="button-hover">Continue</button>
          </div>
          <p className="create-link-login">Done resetting your password? <Link to="/user/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;