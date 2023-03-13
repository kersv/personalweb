import React from "react";
import {FaGithubAlt} from 'react-icons/fa'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aria1 from './Images/Aria.png'
import Aria2 from './Images/Aria1.png'
import Aria3 from './Images/Aria2.png'


const Aria = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll:1,  
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: true,
    fade: true,
  };

  return(
    <div className="individual-project">
      <Slider {...settings} className="slider">
        <img className='ProjImg' src={Aria1} alt="CrwnClothing"></img>
        <img className='ProjImg' src={Aria2} alt="CrwnClothing"></img>
        <img className='ProjImg' src={Aria3} alt="CrwnClothing"></img>

      </Slider>
      <div className="tech-stack">
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt="html"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="css"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/919/919828.png' alt="javascript"></img>
        <img className="tech-stack-icon" src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="react"></img>
        <img className="tech-stack-icon" src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' alt="firebase"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png' alt="sass"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/967/967558.png' alt="api"></img>
        <img className="tech-stack-icon" src='https://avatars.githubusercontent.com/u/10566080?s=200&v=4' alt="socket.io"></img>
        
      </div>
      <div className="project-desc">
      Aria is a React project that I collaborated on with a friend. I applied Firebase utilities for authentication, React's useContext for content management, and Youtube Data API v3 to fetch information to display. I learned to use WebSockets with socket.io to send messages and youtube links to showcase to all users joined in the same room.
      </div>
      <a href="https://github.com/kersv/musicApp" target='_blank' rel="noreferrer">
        <FaGithubAlt className="project-github"/>
      </a>
    </div>
  )
}

export default Aria