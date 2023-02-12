import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import React,{useState} from 'react';

const App = () => {

  const [page, setPage] = useState(0);
  
  const contentDisplay = (num) => {
    console.log('DISPLAY CONTENT')
    setPage(num);
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
              <li className='nav-links' onClick={()=> contentDisplay(0)}  >
                <a>Home</a>
              </li>
              <li className='nav-links' onClick={()=> contentDisplay(1)}>
                <a>About</a>
              </li>
              <li className='nav-links' onClick={()=> contentDisplay(2)}>
                <a>Projects</a>
              </li>
              <li className='nav-links' onClick={()=> contentDisplay(3)}>
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
          {(page === 0)?<Home/>: ''}
          {(page === 1)?<About/>: ''}
          {(page === 2)?<Projects/>: ''}
          {(page === 3)?<Contact/>: ''}
            {/* <Home/>
            <About/>
            <Projects/>
            <Contact/> */}

        </div>
      </div>
      
        
    </div>
  );
}

export default App;
