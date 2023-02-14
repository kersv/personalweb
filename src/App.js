import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import React,{useState} from 'react';
import Resume from './Components/Images/Resume.pdf'
import NavPanel from './Components/NavPanel';

const App = () => {

  const [page, setPage] = useState(0);
  
  const contentDisplay = (num) => {
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
          <NavPanel Resume={Resume} Display={contentDisplay}/>

        </header>

        {/* DISPLAY CONTENT */}
        <div className='content'  >
          {(page === 0)?<Home/>: ''}
          {(page === 1)?<About/>: ''}
          {(page === 2)?<Projects/>: ''}
          {(page === 3)?<Contact/>: ''}

        </div>
      </div>
        {/* COPYRIGHT */}
        <footer>
          <div className='copyright'>
            Copyright &copy; 2023 Kevin Xie. All rights are resevered.
          </div>
        </footer>

    </div>
  );
}

export default App;
