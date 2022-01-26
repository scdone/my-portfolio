import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <main className='main'>
      <section id='img-div'>
      </section>


      <section>
        <div className='box middle green'>
          <h1>Stetson Done</h1>
        </div>
        <div className='box middle dark-blue'>
          <h2>projects</h2>
        </div>
      </section>


      <section>
        <div className='box right dark-blue'>
          <h2>contact</h2>
        </div>
        <div className='box right middle-blue'>
          <h2>experience</h2>
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
