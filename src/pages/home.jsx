import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Intro from "../Components/intro";

function Home() {
  const [introActive, setIntroActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIntroActive(true);
    }, 3000);
  }, []);
  return (
    <>
      {!introActive ? <Intro /> : null}
      <div className="main">
        <div className="Hi">Hi, my name is </div>
        <div className="FullName">
          <h1>Monica Codreanu</h1>
        </div>
        <div>
          <div className="developer">I am an electronic engineer and I recently study to become a Junior Frontend Developer</div>
          <div className="skills">
            My skills include: JavaScript, React, Broser APIs, Node.js, User
            Experience Design (UX), Databases/ MySQL, Responsive Webdesign, Git.
          </div>

          <div className="skills">I am now available for new challenges.</div>
          <div className="skills">
            If you are interested in learning more about me, please contact me.
          </div>

          <Link to="/projects">
            <button>Check out my work</button>
          </Link>
        </div>
        {/* <div className="mail">monica.codreanu@gmail.com</div> */}
      </div>
    </>
  );
}

export default Home;
