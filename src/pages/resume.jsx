import "../styles/resume.css";
function Resume() {
  return (
    <div className="ResumeWrapper">
      <div className="btns">
        <button>
          <a href="Monica Codreanu_CV_ENG.pdf" target="_blank">
            Download CV English
          </a>
        </button>
        <button>
          <a href="Monica Codreanu_CV.pdf" target="_blank">
            Download CV Swedish
          </a>
        </button>
      </div>
      <div className="nameDiv">
        <h1>
          Monica <span className="RedText">Codreanu</span>
        </h1>
      </div>

      <div className="resumeColumns">
        <div className="column1">
          <img
            className="box1"
            src="Monica Codreanu_picture.jpg"
            alt=""
          />
          <div className="box1">
            <h3>Profil</h3>
            <hr />
            <p>
              Som utbildad elektronikingenjör brinner jag verkligen för
              IT-världen. Jag är en nyfiken person som attraheras av nya prylar
              och tekniken bakom dem, och är intresserad av hur man kopplar ihop
              olika enheter. <br />
              2019 flyttade jag och min familj till Sverige. Jag började lära
              mig svenska och det påminde mig om hur mycket jag gillar nya
              utmaningar. <br />
              Jag älskar att lära mig nya saker, jag lärde mig nya språk men
              också nya kompetenser som behövdes i mitt arbete. Jag tror att
              detta är det bästa sättet att bli bättre.
            </p>
          </div>
          <div className="box1">
            <h3>Kompetenser</h3>
            <hr />
            <ul>
              <li>Webbdesign</li>
              <li>Erfarenhet av planering, schemaläggning och tidshantering</li>
              <li>Grunderna för ledning och marknadsföring</li>
              <li>Release hantering</li>
              <li>Lokaliseringstest för användargränssnitt (UI)</li>
              <li>Försäljning och kundservice</li>
            </ul>
          </div>
          <div className="box1">
            <h3>Språk</h3>
            <hr />
            <ul>
              <li>Rumänska - modersmål</li>
              <li>Engelska - C1/C2 (flytande)</li>
              <li>Svenska - B2/C1 (goda)</li>
              <li>Finnish - B1/B2 (mellan nivå)</li>
              <li>French - B1/B2 (mellan nivå)</li>
            </ul>
          </div>
          <div className="box1">
            <h3>Prestationer</h3>
            <hr />
            <ul>
              <li>
                Lärde själv och blev Localisation key-user för Hudson-servern
              </li>
              <li>Skapade emulator för Lokalisering-team</li>
              <li>Skapade en databas för tidningen</li>
              <li>Fick 2 utmärkelser som “Bäst försäljnings ombud”</li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div className="box2">
            <h3>Erfarenhet</h3>
            <hr />
            <div className="Job">
              <div className="JobTitle">
                <h4>IT-konsult</h4>
                <h4>apr 2023 - pågående</h4>
              </div>
              <div className="Workplace">
                <h4>Academic Work</h4>
              </div>
              <div className="JobDescription">
                Jag är tillgänglig pä heltid som konsult via Academic Work och
                kan börja arbeta omgående. Efter 12 intensiva veckor, jag har
                tagit examen från Academic Work/Brights-programmet i JavaScript.
              </div>
            </div>
            <div className="Job">
              <div className="JobTitle">
                <h4>Release Engineer </h4>
                <h4>aug. 2007 - okt. 2012</h4>
              </div>
              <div className="Workplace">
                <h4>Nokia - Devices R&D/ S40 Localisation</h4>
              </div>
              <div className="JobDescription">
                <li>SW release management - (från och med oktober 2008)</li>
                <ul>
                  <li className="listLevel2">
                    Planera och schemalägg framtida utgåvor,
                  </li>
                  <li className="listLevel2">
                    Gränssnitt mellan lokalisering och SW-integration och
                    release team.
                  </li>
                </ul>
                <li>UI text releasing:</li>
                <ul>
                  <li className="listLevel2">
                    Leverera textreleaser i tid för lokalisering av S30 / S40,
                  </li>
                  <li className="listLevel2">
                    Testa funktionaliteten hos lokaliseringsverktyg, rapportera
                    fel, hjälp med verktygsutveckling,
                  </li>
                  <li className="listLevel2">
                    Uppdatera instruktioner för lokaliseringsprocesser
                  </li>
                </ul>
                <li>UI testning (August 2007 - August 2009)</li>-
                Lokaliseringstest: skapa delta testfiler, bearbeta testfiler,
                felhantering och felverifiering och importera testfiler tillbaka
                i databasen.
              </div>
            </div>
            <div className="Job">
              <div className="JobTitle">
                <h4>Web designer </h4>
                <h4>2005 - aug. 2007</h4>
              </div>
              <div className="Workplace">
                <h4>
                  65 Degrees North (tidningen ägs av staden Uleåborg, Finland)
                </h4>
              </div>
              <div className="JobDescription">
                <ul>
                  <li className="listLevel2">
                    Webbplatsdesign, utveckling och innehållshantering,
                  </li>
                  <li className="listLevel2">
                    Byggt upp en MySQL-databasapplikation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Job">
              <div className="JobTitle">
                <h4>Product Manager for IT products </h4>
                <h4>apr. 2001 - okt. 2002</h4>
              </div>
              <div className="Workplace">
                <h4>Ana Electronic (Bukarest, Rumänien)</h4>
              </div>
              <div className="JobDescription">
                - Koordinera distribution och försäljning av telekommunikation
                och datorprodukter, - Upprätthålla affärsrelationer med
                internationella leverantörer som Philips och Fujitsu - Siemens
                samt utveckla kommersiella relationer med större kunder, - Utför
                forskning om marknadstrender för elekommunikationsprodukter,
                datorer och programvara.
              </div>
            </div>
            <div className="Job">
              <div className="JobTitle">
                <h4>Sales Engineer </h4>
                <h4>jan. 1998 - apr. 2001</h4>
              </div>
              <div className="Workplace">
                <h4>Ana Electronic (Bukarest, Rumänien)</h4>
              </div>
              <div className="JobDescription">
                -Koordinera distribution och försäljningsaktiviteter för
                GSM-telefoner, - Upprätta den kommersiella och marknadsförings
                politiken för GSMavdelningen. Utmärkelser: Jag fick två
                utmärkelser av "Bästa försäljningsagent" från MobiFon 1999 och
                2000. (*) Jag har olika kurser för “Försäljningstekniker” och
                “Kundrelationer”.
              </div>
            </div>
          </div>
          <div className="box2">
            <h3>Utbildning</h3>
            <hr />
            <div className="Utbildning">
              <div className="JobTitle">
                <h4>JavaScript Accelerated Learning</h4>
                <h4>jan. 2023 - apr. 2023</h4>
              </div>
              <div className="Workplace">
                <h4>Brights</h4>
              </div>
              <div className="JobDescription">
                JavaScript, HTML, CSS, React, Node.js, Databases/ MySQL, User
                Experience Design (UX), Broser APIs, Responsive Webdesign, Agile
                Project Methodology and Git
              </div>
            </div>
            <div className="Utbildning">
              <div className="JobTitle">
                <h4>Elektronikingenjör</h4>
                <h4>sept. 1992 - jun. 1997</h4>
              </div>
              <div className="Workplace">
                <h4>“Politehnica” Universitet Bukarest</h4>
              </div>
              <div className="JobDescription">
                Fakulteten för elektronik och telekommunikation, Tillämpad
                elektronikavdelning. Medelbetyg för licensundersökning: 9,16 (på
                en 10-punkts skala).
              </div>
            </div>
          </div>
          <div className="box2">
            <h3>Senaste Aktiviteten</h3>
            <hr />
            <ul>
              <li>
                Korta Vägen vid Linköping Universitet apr. 2022 - okt. 2022 -
                Svenska språk kurs på C1 nivå
              </li>
              <li>Svenska språk kurser (SFI + SVA) feb. 2020 - maj 2021</li>
              <li>
                Frilansaktiviteter 2013 - 2019 - Engelska korrekturläsning,
                hjälp vid skapande av webbsidor och mer
              </li>
              <li>Finska språk kurser 2014 - 2015</li>
            </ul>
          </div>
          <div className="box2">
            <h3>Kunskaper</h3>
            <hr />
            <ul>
              <li>
                Färdigheter inom webutveckling: JavaScript, React, Broser APIs,
                Node.js, Databases/ MySQL, User Experience Design (UX),
                Responsive Webdesign, GIT.
              </li>
              <li>Övriga verktyg: Trello, Figma</li>
              <li>Bekant med C (personligt bruk)</li>
              <li>
                Flytande med Microsoft Office (Word, Excell, PowerPoint, Outlook
                och annat)
              </li>
              <li>Operativsystem som används: Windows, UNIX, Linux,</li>
              <li>Online mötes appar: Zoom, Google Meet, Skype, Teams</li>
              <li>Grunderna för bildbehandling (Adobe Photoshop, Canva)</li>
              <li>
                Installera, konfigurera och underhålla SW-produkter och felsöka
                datorns problem.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
