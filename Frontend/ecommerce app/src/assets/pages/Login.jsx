import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login Error Please try again');
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input>
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}   
                onChange={handleChange}
                required    
                </input>

                <input>
                type="password"
                name="password"
                placeholder="Password"  
                value={formData.password}
                onChange={handleChange}
                required        
                </input>

                <button type="submit">Login</button>
                {message && <p className="login-message">{message}</p>}
            </form>
        </div>
    );
}

export default Login;