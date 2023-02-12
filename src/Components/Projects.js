import React, { useState } from "react"
import Codename from './Codenames'
import TvGuidance from "./TvGuidance";




const Projects = () => {

  const [project, setProject] = useState(0);
  const projectDisplay = (num) => {
    setProject(num);
  }
  
  return(
    <div className="Home">
      <div className="project-list">
        <h1 className="project-name">2022 - <span className="project-title" onClick={() => projectDisplay(0)}>Codenames</span></h1>
        <h1 className="project-name">2021 - <span className="project-title" onClick={() => projectDisplay(1)}>tvGuidance</span></h1> 
      </div>
      {(project === 0)? <Codename/> : ''}
      {(project === 1)? <TvGuidance/> : ''}
      
      
    </div>
  )
}
export default Projects