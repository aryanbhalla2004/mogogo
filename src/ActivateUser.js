import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import {firebase} from './util/firebase';

const Login = (props) => {
  const [error, setError] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
  }

  const emailVerified = async (email) => {
    console.log(props.user.email);
    await props.emailVerified(props.user.email)
  }

  return (
    <div class="login-form-page">
      <div class="content-sizing login-form-page-content">
        <form onSubmit={onSubmitForm}>
          <h1>Activate Your Account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="activation-page-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem alias libero ducimus repellendus quaerat, totam aliquam sapiente doloribus nobis? Rem, nesciunt magni! Obcaecati repudiandae quam at atque, id repellat!</p>
          {error && <div class="error">{error}</div>}
          <div class="holder-input">
            <button class="button-hover" onClick={emailVerified}>Send Activation Email</button>
          </div>
          <p class="create-link-login">Back to login page<Link to="/home/login">Login</Link></p>
        </form>
      </div>
    </div>
  )

}

export default Login;