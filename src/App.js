import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  
  const contentDisplay = () => {
    console.log('DISPLAY CONTENT')
  };

  return (
    <div className="App">
      <div className='borderbox'>

        {/* BACKGROUND ANIMATION */}
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* HEADER / NAVLINKS */}
        <header className="App-header">
          <h1 className='name'>Kevin Xie</h1>
          <p className='job-title'>Web Developer</p>
          <nav className='nav-panel'>
            <ol>
              <li className='nav-links' onClick={contentDisplay}>
                <a>Home</a>
              </li>
              <li className='nav-links' onClick={contentDisplay}>
                <a>About</a>
              </li>
              <li className='nav-links' onClick={contentDisplay}>
                <a>Projects</a>
              </li>
              <li className='nav-links' onClick={contentDisplay}>
                <a>Contact</a>
              </li>
            </ol>
          </nav>

          {/* COPYRIGHT */}
          <footer>
            <p className='copyright'>
              Copyright &copy; 2023 Kevin Xie. All rights are resevered.
            </p>
          </footer>
        </header>

        {/* DISPLAY CONTENT */}
        <div className='content'>
            <Home/>
            <Projects/>
            <About/>
            <Contact/>

        </div>
      </div>
      
        
    </div>
  );
}

export default App;
