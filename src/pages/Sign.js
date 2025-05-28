import React, { useState } from 'react';
import './CSS/Sign.css';
import { Link } from 'react-router-dom';

const Sign = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await fetch('https://monsef74.pythonanywhere.com/api/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Registration failed');
            }
            localStorage.setItem("registeredUser", JSON.stringify(formData));
            setSuccess('Registration successful!');
            
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='Sign'>
            <div className='Sign-container'>
                <h1>Sign Up</h1>
                <form className='Sign-fields' onSubmit={handleSubmit}>
                    <div className='name-inputs'>
                        <div className='name-input'>
                            <input
                                type='text'
                                id='first_name'
                                placeholder='First Name'
                                required
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='name-input'>
                            <input
                                type='text'
                                id='last_name'
                                placeholder='Last Name'
                                required
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <input
                        type='email'
                        id='email'
                        placeholder='Email Address'
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type='submit'>Sign Up</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <p className='Sign-login'>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Sign;
