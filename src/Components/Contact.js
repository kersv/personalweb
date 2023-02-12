import React from "react"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Contact = () => {

  return(
    <div className="contact-container">
      <a href="https://github.com/kersv" target='_blank' rel="noreferrer">
        <FaGithub className="contact github"/>
      </a>
      <a href="https://www.linkedin.com/in/kevin-xie-55b49418b/" target='_blank' rel="noreferrer">
        <FaLinkedinIn className="contact github"/>
      </a>
    </div>
  )
}
export default Contact