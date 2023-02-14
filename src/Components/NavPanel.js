import React from "react";


const NavPanel = (props) => {
  return(
    <div>
      <nav className='nav-panel'>
        <ol>
          <li className='nav-links' onClick={()=> props.Display(0)}>
            Home
          </li>
          <li className='nav-links' onClick={()=> props.Display(1)}>
            About
          </li>
          <li className='nav-links' onClick={()=> props.Display(2)}>
            Projects
          </li>
          <li className='nav-links' onClick={()=> props.Display(3)}>
            Contact
          </li>
          <li className='nav-links'>
            <a className='resume' download href={props.Resume}>Resume</a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default NavPanel