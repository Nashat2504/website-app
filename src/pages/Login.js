import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './CSS/Login.css';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);

        if (!termsAccepted) {
            alert("You must agree to the terms of use and privacy policy.");
            return;
        }

        const email = event.target.email.value;
        const password = event.target.password.value;

        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (
            storedUser &&
            storedUser.email === email &&
            storedUser.password === password
        ) {
            login(storedUser);
            setSuccess(true);

            // ✅ رجع المستخدم للصفحة اللي كان فيها أو للهوم
            const redirectTo = location.state?.from || '/';
            setTimeout(() => {
                navigate(redirectTo);
            }, 1500);
        } else {
            setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
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

                {/* ✅ رسائل الخطأ والنجاح */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>تم تسجيل الدخول بنجاح ✅</p>}

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
};

export default Login;
