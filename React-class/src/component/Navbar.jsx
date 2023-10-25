import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to={"/"} className="nav-link text-info">Home</Link></li>
                        <li className="nav-item"><Link to={"/about"} className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to={"/contact"} className="nav-link">Contact</Link></li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                Login
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item"><Link to={"/SignUp"} className="dropdown-item">Sign Up</Link></li>
                                <li className="nav-item"><Link to={"/SignIn"} className="dropdown-item">Sign In</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar