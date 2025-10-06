import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error when user types
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            // Optionally: save token, redirect, etc.
        } else {
            setError(data.message || 'Invalid credentials.');
        }
    } catch (err) {
        setError('Server error. Please try again later.');
    }
};

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Welcome Back</h2>
                <p className="login-subtitle">Please enter your credentials to login</p>
                
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="email"
                        id="username"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <p className="error-message">{error}</p>}
                
                <button type="submit" className="login-button">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;