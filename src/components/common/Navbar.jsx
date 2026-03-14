import { Link } from "react-router-dom";


import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Amdox<span>Task</span></div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link className="login-btn" to="/login">Login</Link>
        <Link className="register-btn" to="/register">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
