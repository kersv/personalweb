import React from "react";
import {FaGithubAlt} from 'react-icons/fa'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CrwnClothing1 from './Images/Crwn-clothing.png'
import CrwnClothing2 from './Images/Crwn-clothing1.png'
import CrwnClothing3 from './Images/Crwn-clothing2.png'
import CrwnClothing4 from './Images/Crwn-clothing3.png'

const CrwnClothing = () => {
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
        <img className='ProjImg' src={CrwnClothing1} alt="CrwnClothing"></img>
        <img className='ProjImg' src={CrwnClothing2} alt="CrwnClothing"></img>
        <img className='ProjImg' src={CrwnClothing3} alt="CrwnClothing"></img>
        <img className='ProjImg' src={CrwnClothing4} alt="CrwnClothing"></img>
      </Slider>
      <div className="tech-stack">
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt="html"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="css"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/919/919828.png' alt="javascript"></img>
        <img className="tech-stack-icon" src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="react"></img>
        <img className="tech-stack-icon" src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' alt="firebase"></img>
        <img className="tech-stack-icon" src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt="redux"></img>
        
      </div>
      <div className="project-desc">
        Crwn-clothing is a project I worked on to further develop my React and learn new technologies. New technologies I worked with are firebase for authentication and database, Redux and useContext for context management. 
      </div>
      <a href="https://github.com/kersv/crwn-clothing-v2" target='_blank' rel="noreferrer">
        <FaGithubAlt className="project-github"/>
      </a>
    </div>
  )
}

export default CrwnClothing