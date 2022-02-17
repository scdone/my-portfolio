import './App.scss';
import linkedInIcon from './githublogo.png';

function App() {



  return (
    <main className='main'>
      <section id='img-div'>
      </section>


      <section>
        <div className='box middle green'>
          <h1>Stetson Done</h1>
          <p className='bio-paragraph' id="bio">With a background in law enforcement, I have experience with finding solutions and making decisions under pressure. My passion lies in problem solving with creative software engineering solutions. Outside of programming, you can find me spending time with my family, enjoying the great outdoors, or gaming.</p>
          <h2>Data Analyst in Phoenix, Arizona</h2>
        </div>
        <div className='box middle dark-blue'>
          <h2>projects</h2>
            <div className='project-div'>
              <br/>
              <li>Full-Stack text-based adventure game - "Noble Knight"</li>
              <div className='project-buttons-noble-knight'>
              <a target='_blank' rel="noreferrer" className='project-links' href="https://playnobleknight.com">see live</a>
              <a target='_blank' rel="noreferrer" className='project-links' href="https://github.com/scdone/nobleKnight">source code</a>
              <p>Created with React, Node.js, JavaScript, HTML5, CSS, PostgreSQL database, and Sequelize</p>
              <li>Analysis of FBI gun data and U.S. Census data</li>
              <a target='_blank' rel="noreferrer" className='project-links' href="https://github.com/scdone/US-Census-and-Gun-Data-Analysis/blob/main/GunData_Notebook.ipynb">source code</a>
              <p>Gathered, cleaned, and analyzed date from the FBI and U.S. Census to identify and visualize trends in gun permits per capita across the U.S.</p>
              </div>
            </div>
        </div>
      </section>


      <section>
        <div className='box right dark-blue'>
          <h2>contact</h2>
          <div className='contact-box'>
            <img className='contact-img' alt="linkedin icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            <img className='contact-img' src={linkedInIcon} alt="github icon"></img>
              <a target="_blank" rel="noreferrer" className='contact-links' href="https://www.linkedin.com/in/stetson-done/">LinkedIn</a>
              <a target="_blank" rel="noreferrer" className='contact-links' href="https://github.com/scdone">GitHub</a>
          </div>
        </div>
        <div className='box right middle-blue'>
          <h2>experience</h2>
          <p className='bio-paragraph'>I have experience as a fullstack developer using React, Javascript, HTML, CSS, Node.js, and SQL. Previous to software development, I worked as a Deputy Sheriff in Phoenix, Arizona.
          </p>
          <a target="_blank" rel="noreferrer" className='contact-links' href="https://docs.google.com/document/d/e/2PACX-1vRPzged0CBqgGsXo-shYjmcGYl9xlnJdqbWvbWoV3xR6Ba8Ltczrhw-muzqcI9UNev2ASqpFGanSKO9/pub">resume</a>
        </div>
        <div className='box right green'>
          <h2>skills</h2>
          <div className='skill-icon-container'><img className='skill-icons'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresQL icon" />
          <img className='skill-icons' alt="react icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img className='skill-icons' alt="javascript icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <img className='skill-icons' alt="html5 icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
          <img className='skill-icons' alt="nodeJS icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
          <img className='skill-icons' alt="css3 icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></div>
        </div>
      </section>

    </main>
  );
}

export default App;
