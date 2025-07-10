import { useState } from 'react';
import { registerUser, loginUser } from '../services/api';
import '../App.css';

function Auth({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            const res = isLogin
                ? await loginUser({ username, password })
                : await registerUser({ username, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            onLogin(res.data.username);
        } catch (err) {
            alert(err.response?.data?.message || 'Error');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleAuth} className="login-form">
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <p className="auth-toggle">
                {isLogin
                    ? <>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span></>
                    : <>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></>}
            </p>
        </div>
    );
}

export default Auth;
