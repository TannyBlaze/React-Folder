// src/pages/Auth.jsx
import { useState } from 'react';
import '../App.css';

function Auth({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin(username);
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <>
            <h1 className="login-title"> Quiz App {isLogin ? 'Login' : 'Sign Up'}</h1>

            <form className="login-form" onSubmit={handleAuth}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>

            <p className="auth-toggle">
                {isLogin ? (
                    <>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span></>
                ) : (
                    <>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></>
                )}
            </p>
        </>
    );
}

export default Auth;
