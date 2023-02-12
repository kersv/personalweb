import React from "react"
import '../App.css';
import Image from './Images/images.jpg'
import Resume from './Images/Resume.pdf'

const Home = () => {
  return(
    <div className='Home'>
      WELCOME!
      <img src={Image} alt="imageWel"></img>
      <a download href={Resume}>Resume</a>
    </div>
  )
}
export default Home