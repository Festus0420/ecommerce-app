import React, { useState } from 'react';
import './Register.css';    

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '', 
    });
    const [error, setError] = useState(''); 
    const [success, setSuccess] = useState(''); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');  
        setSuccess('');
    };   

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fullName, email, password, confirmPassword } = formData;    
        if (!fullName || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }   
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
            
        }   
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }   
        setSuccess('Registration successful! You can now log in.');
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '', 
        }); 
    
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
               
                 {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <input
                    type="text"
                    name="fullName" 
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange} 
                />
                <input
                    type="email"    
                    name="email"
                    placeholder="Email"
                    value={formData.email}  
                    onChange={handleChange}
                />
                <input  
                    type="password"
                    name="password"
                    placeholder="Create Password"  
                    value={formData.password}
                    onChange={handleChange}
                />  
                <input  
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"  
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />  
                <button type="submit">Register</button> 
                <p className="login-link">Already have an account? <a href="/login">Log in</a></p>  
            </form>
                
        </div>     
    );        
};

export default Register;