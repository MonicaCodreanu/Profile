import { Link } from "react-router-dom";
import "../styles/swedish.css";


function SwedishIntro() {
  
  return (
    <>
       <div className="main">      
        <div className="language">
        <Link to="/">  
          <button><img src="English_flag.PNG" alt="" /></button>
          </ Link>  
        </div>
       <div className="FullName">                  
        <h1>Monica  Codreanu </h1>
        <h2>Nyfiken Tänkare, Problemlösare och Teknikentusiast</h2>
        </div>
        <div className="introHome">
            <h2><strong>
             Hej! Jag är Monica, en elektronikingenjör med en passion för IT, teknik och problemlösning. 
            </strong>
            </h2>
            <p>Min karriär har tagit mig på en spännande resa – från webbdesign och säljingenjörsarbete till mjukvarureleasehantering och IT-konsultation.
            Jag älskar att ta mig an nya utmaningar, vare sig det handlar om att lära mig ett nytt programmeringsspråk, felsöka ett knepigt tekniskt 
            problem eller hjälpa kunder att hitta den bästa lösningen för deras behov.
            </p>
            <p>
            </p>
            </div>
            <div className="learner">
            <h2>En Livslång Lärande</h2>
            <p>
            Jag har alltid dragits till lärande och innovation. Att flytta till Sverige 2019 var inte bara ett personligt äventyr, 
            utan också en möjlighet att omfamna nya färdigheter och perspektiv. Jag antog utmaningen att lära mig svenska 
            (och jag börjar bli riktigt bra på det!) samtidigt som jag utökade mina kunskaper inom webbutveckling, kundrelationer och IT-support.
            </p>
            </div>
        <div className="skills">
              <h2>Min Kompetens & Expertis</h2>
              <ul>
                <li><strong>Webbutveckling:</strong> JavaScript, React, Node.js, MySQL, UX, Git</li>
                <li><strong>Programvarurelase & Testning:</strong> Lokalisering av release och testning, UI-testning, releaseplanering</li>
                <li><strong>Kundservice & Försäljning:</strong> Stark bakgrund inom teknisk försäljning och kundsupport</li>
                <li><strong>Språk:</strong> Rumänska (modersmål), Engelska (flytande), Svenska (B2/C1), Finska & Franska (B1/B2)</li>
              </ul>
        </div>
        <div className="career">
              <h2>Karriärhöjdpunkter</h2>
              <ul>
                <li>Examen från JavaScript Accelerated Learning-programmet på Brights</li>
                <li>Arbetade som Release Engineer på Nokia och säkerställde smidiga mjukvarureleaser</li>
                <li>Designade och hanterade webbmaterial för 65 Degrees North</li>
                <li>Vann två utmärkelser för "Bästa säljagent" från MobiFon</li>
              </ul>
        </div>
        <div className="contactMe">
            <h2>Kontakta mig!</h2>
            <p>
            Om du letar efter någon som är anpassningsbar, teknikkunnig och alltid ivrig att lära sig, tveka inte att höra av dig!
            </p>
          <div>
              📧 <strong>Email:</strong> <a href="mailto:monica.codreanu@gmail.com"><img src="mail.PNG" alt=""  height={18}/></a><br />
              {/*📞 <strong>Phone:</strong> +46 76 308 3009<br />*/}
              🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/monicacodreanu">linkedin.com/in/monicacodreanu</a>
            </div>
          </div>

      </div>
      
    </>
  );
}

export default SwedishIntro;
