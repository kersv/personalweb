import React from "react";
import {FaGithubAlt} from 'react-icons/fa'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TvGuidance = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll:1,  
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: true,
  };

  return(
    <div className="individual-project">
      <Slider {...settings} className="slider">
        <img className='ProjImg' src="https://assets2.rockpapershotgun.com/codenames.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/codenames.jpg" alt="CodenamesPhoto"></img>
        <img className='ProjImg' src="https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/screenshots/csm-website/codenamesonline2.jpg" alt="CodenamesPhoto"></img>
        <img className='ProjImg' src="https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/screenshots/csm-website/codenamesonline3.jpg" alt="CodenamesPhoto"></img>
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
        Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player. The game is played with least four players, or any even number of players. Players are split into two teams: blue and red.
      </div>
      <a href="https://github.com/amyghotra/codenames" target='_blank' rel="noreferrer">
        <FaGithubAlt className="project-github"/>
      </a>
    </div>
  )
}

export default TvGuidance