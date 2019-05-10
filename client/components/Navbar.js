import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <div className="navbar" id="navbar">
      <Link to="/home" id="nav-name">
        Claire Gilligan
      </Link>
      <nav className="nav-link-container">
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <a href="https://drive.google.com/file/d/155uSCwdNx99bCQXixeMV34wwrE5Mhql5/view?usp=sharing">Resume</a>
      </nav>
    </div>
    <hr />
  </div>
)

export default Navbar
