import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import {auth, firebase} from '../util/firebase';
import '../styles/Loginform.css'


const Login = (props) => {
  const databaseUsers = firebase.firestore().collection('users');
  const history = useHistory();
  const [error, setError] = useState({
    email: "",
    password: "",
    all: ""
  });
  
  const [message, setMessage] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const updateUserInput = (e) => {
    setError('');
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if(userInput.email === "") {
      setError({email: "Email field is empty"});
    } else if ( userInput.password === "") {
      setError({password: "Password field is empty"});
    } else {
      try {
        let userDetails = await props.login(userInput.email, userInput.password);
        if(userDetails.user.emailVerified) {
          history.push('/');
        } else {
          history.push('/user/activate-account');
        }
      } catch(e) {
        setError({all: e.message});
      }
    }
  }

  const socialMediaLogin = async (provider) => {
    let signedInUser = await props.allAuthFunction(provider);
    //console.log(signedInUser);
    databaseUsers.onSnapshot((querySnapShot) => {
      const items = [];
      querySnapShot.forEach((doc) => {
        items.push(doc.data());
      });

      let result = items.find(user => user.userId === signedInUser.uid);
      if(result === undefined) {
        const user = {
          Name: signedInUser.displayName,
          Email: signedInUser.email
        }
        firebase.firestore().collection("users").doc(signedInUser.uid).set(user);
      }
    });
  }

  return (
    <div className="login-form-page">
      <div className="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Welcome Back</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="header-social-icon-split">
            <ul className="social Media">
              <li className="google" onClick={(e) => socialMediaLogin(new firebase.auth.GoogleAuthProvider())}><i className="fab fa-google"></i></li>
              <li className="twitter"><i className="fab fa-twitter"></i></li>
              <li className="facebook" onClick={{/*((e) => socialMediaLogin(new firebase.auth.FacebookAuthProvider())*/}}><i className="fab fa-facebook-f"></i></li>
            </ul>
            <div className="line-holder">
              <div className="line-login"></div>
              <p>OR</p>
              <div className="line-login"></div>
            </div>
          </div>
          {error.all && <div className="error mt-10">{error.all}</div>}
          {props.successMessage && <div className="success mt-10">{props.successMessage}</div>}
          <div className="holder-input">
            <label>Email</label>
            <input type="Email" placeholder="Your Email" name="email" onChange={updateUserInput} value={userInput.email}/>
          </div>
          {error.email && <div className="error mt-10">{error.email}</div>}
          <div className="holder-input">
            <label>Password</label>
            <input type="Password" placeholder="Your Password" name="password" onChange={updateUserInput} value={userInput.password} />
          </div>
          {error.password && <div className="error mt-10">{error.password}</div>}
          <ul className="remember-forgot-password">
            <li><input type="checkbox" id="check"/><label for="check">Remember password</label></li>
            <li><Link to="/user/forgot-password">Forget Password</Link></li>
          </ul>
          <div className="holder-input">
            <button className="button-hover">LOG IN</button>
          </div>
          <p className="create-link-login">New to Mogogo? <Link to="/user/signup">Create a free account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login