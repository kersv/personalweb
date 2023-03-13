import React, { useState } from "react"
import Aria from "./Aria";
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
        <h1 className="project-name">2023 - <span className="project-title" onClick={() => projectDisplay(0)}>Aria</span></h1> 
        <h1 className="project-name">2023 - <span className="project-title" onClick={() => projectDisplay(1)}>Crwn-clothing</span></h1> 
        <h1 className="project-name">2022 - <span className="project-title" onClick={() => projectDisplay(2)}>Codenames</span></h1>
      </div>
      {(project === 0)? <Aria/> : ''}
      {(project === 1)? <CrwnClothing/> : ''}
      {(project === 2)? <Codename/> : ''}
      
      
    </div>
  )
}
export default Projects