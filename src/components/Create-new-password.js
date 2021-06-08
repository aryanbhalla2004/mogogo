import {useState, useEffect, Children} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom'; 

const ConfirmForgotPassword = (props) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  const history  = useHistory();
  const [error, setError] = useState({
    password: '',
    re_password: '',
    all: ''
  });
  const [message, setMessage] = useState("Password reset has been confirmed. Please enter the new password for you account and proceed.");
  const [userInput, setUserInput] = useState({
    password: "",
    re_password: ""
  });

  // useEffect(() => {
  //   if(code === null || code.length < 0 || code === "") {
  //     history.push('/user/login');
  //   }
  // })

  const updateUserInput = (e) => {
    setError('');
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if(userInput.password !== "") {
      if(userInput.re_password !== "") {
        if(userInput.password === userInput.re_password) {
          try {
            await props.resetForgotPassword(code, userInput.password);
            props.setSuccessMessage('Password was successfully reset, Login in your account and enjoy!');
            console.log(props.setSuccessMessage);
            history.push('/user/login');
          } catch(e) {
            setMessage('')
            setError({all: e.message});
          }
        } else {
          setError({all: "Passwords don't match"})
        }
      } else {
        setError({re_password: "Confirm Password field is empty"})
      }
    } else {
      setError({password: 'Password field is empty'})
    }
  }

  return (
    <div className="login-form-page forgot-password-fix">
      <div className="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Confirm Password Reset</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          {message && <div className="success">{message}</div>}
          {error.all && <div className="error">{error.all}</div>}
          <div className="holder-input">
            <label>New Password</label>
            <input placeholder="New Password" type="password" name="password" value={userInput.password}  onChange={updateUserInput}/>
          </div>
          {error.password && <div className="error">{error.password}</div>}
          <div className="holder-input">
            <label>Confirm Password</label>
            <input placeholder="Confirm Password" type="password" name="re_password" value={userInput.re_password}  onChange={updateUserInput}/>
          </div>
          {error.re_password && <div className="error">{error.re_password}</div>}
          <div className="holder-input">
            <button className="button-hover">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmForgotPassword;