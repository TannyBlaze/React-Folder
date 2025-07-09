// src/components/Navbar.jsx
import './Navbar.css';

function Navbar({ username, onLogout }) {
    return (
        <nav className="navbar">
            <div className="navbar-title"> Quiz App</div>
            {username && (
                <div className="navbar-user">
                    <span>{username}</span>
                    <button onClick={onLogout}>Logout</button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
