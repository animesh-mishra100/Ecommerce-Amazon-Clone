import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import './Login.css';
import {auth } from "./firebase";
import 'firebase/compat/auth';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then(auth => {
      navigate('/')
    })
    .catch(function(error) {
      console.log(error);
    })


  }

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).catch(function(error) {
      // if (auth) {
      //   navigate('/')
      // }
      console.log(error);
    })
            
  }

  return <div className="login">
    <Link to ='/'>
    <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
    </Link>

    <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register}className='login__registerButton'>Sign Up</button>
  </div>
  </div>;

  
}

export default Login;
