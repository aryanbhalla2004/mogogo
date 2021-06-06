import React, {userState, useEffect, useState} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import {firebase} from './util/firebase';

const Signup = (props) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const updateUserInput = (e) => {
    setError('');
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if(userInput.password !== "" && userInput.re_password !== "") {
      if(userInput.password === userInput.re_password) {
        if(!userInput.name.includes(' ')) {
          try {
            let informationUser = await props.signup(userInput.email, userInput.password);
            let userid = informationUser.user.uid;
            const user = {
              Name: userInput.name,
              Email: userInput.email
            }
            firebase.firestore().collection("users").doc(userid).set(user);
          } catch(e) {
            setError(e.message);
          }
        } else {
          setError("Username cannot contain spaces");
        }
      } else {
        setError("Password Doesn't Match");
      }
    } else {
      setError("Password field is empty!");
    }
    
  }

  return (
    <div class="login-form-page signup-form">
      <div class="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Create a free account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {error && <div class="error">{error}</div>}
          <div class="holder-input">
            <label>Name</label>
            <input type="Name" placeholder="Your Name" name="name" onChange={updateUserInput} value={userInput.name} required/>
          </div>
          <div class="holder-input">
            <label>Email</label>
            <input type="Email" placeholder="Your Email" name="email" onChange={updateUserInput} value={userInput.email} required/>
          </div>
          <div class="holder-input">
            <label>Password</label>
            <input type="Password" placeholder="Your Password" name="password" onChange={updateUserInput} value={userInput.password} required/>
          </div>
          <div class="holder-input">
            <label>Re-Password</label>
            <input type="Password" placeholder="Your Password" name="re_password" onChange={updateUserInput} value={userInput.re_password} required/>
          </div>
          <ul class="remember-forgot-password">
            <li><input type="checkbox" id="check" required/><label for="check">Accept all the <a href="#">Terms and Conditions</a></label></li>
          </ul>
          <div class="holder-input">
            <button class="button-hover">SIGN UP</button>
          </div>
          <p class="create-link-login">Already have an account? <Link to="/home/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup;