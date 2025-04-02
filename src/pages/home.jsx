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
       <div className="FullName">                  
        <h1>Monica  Codreanu </h1>
        <h2>Curious Mind, Problem Solver & Tech Enthusiast</h2>
        </div>
        <div className="introHome">
            <h2><strong>
              Hi there! I'm Monica, an Electronics Engineer with a passion for IT, technology, and problem-solving. 
            </strong>
            </h2>
            <p>My career has taken me on an exciting journey—from web design and sales engineering to software release management and IT consulting. 
            I love diving into new challenges, whether it's mastering a new programming language, troubleshooting a tricky tech issue, or helping 
            customers find the best solution for their needs.
            </p>
            <p>
            </p>
            </div>
            <div className="learner">
            <h2>A Lifelong Learner</h2>
            <p>
              I’ve always been drawn to learning and innovation. Moving to Sweden in 2019 was not only a personal adventure but also an opportunity to embrace new skills and perspectives. I took on the challenge of learning Swedish (and I’m getting pretty good at it!) while also expanding my knowledge in web development, customer relations, and IT support.
            </p>
            </div>
        <div className="skills">
              <h2>My Skills & Expertise</h2>
              <ul>
                <li><strong>Web Development:</strong> JavaScript, React, Node.js, MySQL, UX, Git</li>
                <li><strong>Software Release & Testing:</strong> Localization releasing and testing, UI testing, release planning</li>
                <li><strong>Customer Service & Sales:</strong> Strong background in tech sales and customer support</li>
                <li><strong>Languages:</strong> Romanian (native), English (fluent), Swedish (B2/C1), Finnish & French (B1/B2)</li>
              </ul>
        </div>
        <div className="career">
              <h2>Career Highlights</h2>
              <ul>
                <li>Graduated from the JavaScript Accelerated Learning program at Brights</li>
                <li>Worked as a Release Engineer at Nokia, ensuring smooth software releases</li>
                <li>Designed and managed web content for 65 Degrees North</li>
                <li>Won two "Best Sales Agent" awards from MobiFon</li>
              </ul>
        </div>
        <div className="contact">
            <h2>Let’s Connect!</h2>
            <p>
              If you're looking for someone who is adaptable, tech-savvy, and always eager to learn, feel free to reach out!
            </p>
          <div>
              📧 <strong>Email:</strong> <a href="mailto:monica.codreanu@gmail.com"><img src="mail.png" alt=""  height={18}/></a><br />
              {/*📞 <strong>Phone:</strong> +46 76 308 3009<br />*/}
              🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/monicacodreanu">linkedin.com/in/monicacodreanu</a>
            </div>
          </div>
        
        {/*<Link to="/projects">
          <button>Check out my work</button>
        </Link>*/}
      </div>
      
    </>
  );
}

export default Home;
