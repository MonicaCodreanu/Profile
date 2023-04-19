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
          <p>I am a Junior Frontend Developer.</p>
          <p>
            My skills include: JavaScript, React, Broser APIs, Node.js, User
            Experience Design (UX), Databases/ MySQL, Responsive Webdesign, Git.
          </p>
          <Link to="/projects">
            <button>Check out my work</button>
          </Link>

          <p>
            I am now available for new assignments in Östergötland and I look
            forward to contributing my knowledge and commitment to you.
          </p>
          <p>
            If you are interested in learning more about what I have done in the
            past or what I am interested to do in the future, please contact me
            by phone or email. Thank you for your interest!
          </p>
        </div>
        {/* <div className="mail">monica.codreanu@gmail.com</div> */}
      </div>
    </>
  );
}

export default Home;
