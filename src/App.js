import './App.scss';
import { Link } from 'react-router-dom';
import linkedInIcon from './githublogo.png';

function App() {



  return (
    <main className='main'>
      <section id='img-div'>
      </section>


      <section>
        <div className='box middle green'>
          <h1>Stetson Done</h1>
          <p className='bio-paragraph'>With a background in law enforcement, I have experience with finding solutions and making decisions under pressure. My passion lies in solving problems for businesses with creative software engineering solutions. Outside of programming, you can find me spending time with my family, enjoying the great outdoors, or gaming.</p>
          <h2>Software Engineer in Phoenix, Arizona</h2>
        </div>
        <div className='box middle dark-blue'>
          <h2>projects</h2>
            <div className='project-div'>
              <br/>
              <li>Full-Stack text-based adventure game</li>
              <div className='project-buttons-noble-knight'>
              <a target='_blank' className='project-links' href="https://playnobleknight.com">see live</a>
              <a target='_blank' className='project-links' href="https://github.com/scdone/nobleKnight">source code</a>
              </div>
              <p>Created with React, Node.js, JavaScript, HTML5, CSS, PostgreSQL database, and Sequelize</p>
            </div>
        </div>
      </section>


      <section>
        <div className='box right dark-blue'>
          <h2>contact</h2>
          <div className='contact-box'>
            <img className='contact-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            <img className='contact-img' src={linkedInIcon}></img>
              <a target="_blank" className='contact-links' href="https://www.linkedin.com/in/stetson-done/">LinkedIn</a>
              <a target="_blank" className='contact-links' href="https://github.com/scdone">GitHub</a>
          </div>
        </div>
        <div className='box right middle-blue'>
          <h2>experience</h2>
          <p className='bio-paragraph'>I have experience as a fullstack developer using React, Javascript, HTML, CSS, Node.js, and SQL. Previous to software development, I worked as a Deputy Sheriff in Phoenix, Arizona.
          </p>
          <h2>see my resume here</h2> 
        </div>
        <div className='box right green'>
          <h2>skills</h2>
          <div className='skill-icon-container'><img className='skill-icons'src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
          <img className='skill-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img className='skill-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <img className='skill-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
          <img className='skill-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
          <img className='skill-icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></div>
        </div>
      </section>

    </main>
  );
}

export default App;
