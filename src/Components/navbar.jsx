import { Link } from "react-router-dom";
import "../styles/menu.css";
function Navbar() {
  return (
    <div className="navbar">
      <img src="public/Logo.png" alt="" />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </ul>
    </div>
  );
}

export default Navbar;
