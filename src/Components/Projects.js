import React, { useState } from "react"
import Codename from './Codenames'
import CrwnClothing from "./CrwnClothing";




const Projects = () => {

  const [project, setProject] = useState(0);
  const projectDisplay = (num) => {
    setProject(num);
  }
  
  return(
    <div className="Home">
      <div className="project-list">
        <h1 className="project-name">2023 - <span className="project-title" onClick={() => projectDisplay(0)}>Crwn-clothing</span></h1> 
        <h1 className="project-name">2022 - <span className="project-title" onClick={() => projectDisplay(1)}>Codenames</span></h1>
      </div>
      {(project === 0)? <CrwnClothing/> : ''}
      {(project === 1)? <Codename/> : ''}
      
      
    </div>
  )
}
export default Projects