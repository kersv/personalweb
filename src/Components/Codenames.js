import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Codename1 from './Images/Codenames.png'
import Codename2 from './Images/Codenames1.png'
import Codename3 from './Images/Codenames2.png'
import {FaGithubAlt} from 'react-icons/fa'

const Codenames = () => {
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
        <img className='ProjImg' src={Codename1} alt="CodenamesPhoto"></img>
        <img className='ProjImg' src={Codename2} alt="CodenamesPhoto"></img>
        <img className='ProjImg' src={Codename3} alt="CodenamesPhoto"></img>
      </Slider>
      <div className="tech-stack">
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt="html"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="css"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/919/919828.png' alt="javascript"></img>
        <img className="tech-stack-icon" src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="react"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png' alt="bootstrap"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' alt="python"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/919/919825.png' alt="nodejs"></img>
        <img className="tech-stack-icon" src='https://gitlab.com/uploads/-/system/project/avatar/11886674/django.png?width=64' alt="django"></img>
        <img className="tech-stack-icon" src='https://cdn-icons-png.flaticon.com/512/873/873120.png' alt="heroku"></img>
      </div>
      <div className="project-desc">
        Codenames is a capstone project that I worked on with 4 other members. This was my first experience learning React while developing reusable components for the frontend alongside other technologies such as Django for websockets, and axios for CRUD API calls.
      </div>
      <a href="https://github.com/amyghotra/codenames" target='_blank' rel="noreferrer">
        <FaGithubAlt className="project-github"/>
      </a>
    </div>
  )

}

export default Codenames