import React from 'react';
import './CSS/Sign.css';
import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <div className='Sign'>
            <div className='Sign-container'>
                <h1>Sign Up</h1>
                <form className='Sign-fields'>
                    <div className='name-inputs'>
                        <div className='name-input'>
            
                            <input type='text' id='first-name' placeholder='First Name' required />
                        </div>
                        <div className='name-input'>
                        
                            <input type='text' id='last-name' placeholder='Last Name' required />
                        </div>
                    </div>
                    <input type='email' id='email' placeholder='Email Address' required />
                    <input type='password' id='password' placeholder='Password' required />
                    <button type='submit'>Sign Up</button>
                </form>
                <p className='Sign-login'>
                
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}
export default Sign;
