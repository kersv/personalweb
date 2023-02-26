import React from "react"


const About = () => {
  return(
    <div className="about-me-container">
      <div className="Home">
        Hello!
      </div>
      <p className="about-me">
        My name is <span className="about-me-highlight">Kevin Xie</span>, I'm a <span className="about-me-highlight">senior student</span> at Hunter College and expecting to graduate in the <span className="about-me-highlight">Spring of 2024</span>. I enjoy learning about new technologies and a passion for web developement.
      </p>
      <div className="skills-container">
        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt="icon"></img>
        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="icon"></img>
        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/919/919828.png' alt="icon"></img>
        <img className="skill-icon" src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="icon"></img>
        <img className="skill-icon" src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' alt="icon"></img>
        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png' alt="icon"></img>
        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' alt="icon"></img>
        <img className="skill-icon" src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt="icon"></img>
      </div>
    </div>
    
  )
}
export default About