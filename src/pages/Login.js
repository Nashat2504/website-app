import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
    const [termsAccepted, setTermsAccepted] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!termsAccepted) {
            alert("You must agree to the terms of use and privacy policy.");
            return;
        }
    };

    return (
        <div className='login-signup'>
            <div className='login-signup-container'>
                <h1>Log In</h1>
                <form className='login-signup-fields' onSubmit={handleSubmit}>
                    <input type='email' id='email' placeholder='Email Address' required />
                    <input type='password' id='password' placeholder='Password' required />
                    <button type='submit'>Login</button>
                </form>
                <p className='login-signup-register'>
                    Don't have an account? <Link to="/sign">Sign up here</Link>
                </p>
                <div className='login-signup-agree'>
                    <input 
                        type='checkbox' 
                        id='terms'  
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)} 
                    />
                    <label htmlFor='terms'>By continuing, I agree to the terms of use & privacy policy.</label>
                </div>
            </div>
        </div>
    );
}
export default Login;