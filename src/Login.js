import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom'; //to get another link on clicking the image
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();   // Prevents the page from refreshing

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

         auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // it successfully created a new user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to = '/'>
                <img className="login_logo" src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204' />
            </Link>

            <div className= "login_container">
                <h1>Sign in </h1>
                <form>
                    <h5>Email</h5>
                    <input type = "text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type = "password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className= "login_signInButton"> Sign In </button>
                </form>

                <p>
                    By signing in you agree to Amazon clone Conditions of Use and Sale. PLease see our privacy notice and our Interest-based add notice.
                </p>
                <button onClick={register} className="login_registerButton"> Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
