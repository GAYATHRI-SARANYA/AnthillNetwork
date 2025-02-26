import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      {/* <h2 className="logo">Carspace</h2> */}

      {/* Navigation Links */}
      {/* <ul className="nav-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/certified">Certified Pre-Owned</Link></li>
      </ul> */}

      {/* Right Side (Compare & User Icon) */}
      <div className="nav-actions">
        {/* <button className="compare-btn">Compare Cars</button>
        <div className="user-icon">👤</div> */}
      </div>
    </nav>
  );
};

export default Navbar;

