import React from 'react';

const Login = () => {
    const handleLogin = () => {
        const authUrl = "http://localhost:4000/auth/login"; // Replace with actual User Service URL
        window.location.href = authUrl;
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login with OAuth</button>
        </div>
    );
};

export default Login;
