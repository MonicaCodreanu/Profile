import { Link } from "react-router-dom";
import "../styles/menu.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  let location = useLocation();
  // console.log(location.pathname);
  const [ProjectIsActive, setProjectIsActive] = useState(false);
  const [HomeIsActive, setHomeIsActive] = useState(false);
  const [ContactIsActive, setContactIActive] = useState(false);
  const [ResumeIsActive, setResumeIsActive] = useState(false);
  useEffect(() => {
    if (location.pathname === "/projects") {
      setProjectIsActive(true);
      setHomeIsActive(false);
      setContactIActive(false);
      setResumeIsActive(false);
    }
    if (location.pathname === "/") {
      setHomeIsActive(true);
      setProjectIsActive(false);
      setContactIActive(false);
      setResumeIsActive(false);
    }
    if (location.pathname === "/contact") {
      setContactIActive(true);
      setHomeIsActive(false);
      setProjectIsActive(false);
      setResumeIsActive(false);
    }
    if (location.pathname === "/resume") {
      setResumeIsActive(true);
      setHomeIsActive(false);
      setProjectIsActive(false);
      setContactIActive(false);
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <img src="/Logo.png" alt="" />
      <ul>
        <Link className={HomeIsActive ? "active" : ""} to="/">
          Home
        </Link>
        <Link className={ProjectIsActive ? "active" : ""} to="/projects">
          My Projects
        </Link>
        <Link className={ContactIsActive ? "active" : ""} to="/contact">
          Contact
        </Link>
        <Link className={ResumeIsActive ? "active" : ""} to="/resume">
          Resume
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
