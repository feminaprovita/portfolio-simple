import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div id="navbar">
      <Link to="/" id="nav-name">Claire&#160;Gilligan</Link>
      <div id="navlink-container">
        <Link to="/Skills" className="navlink-one">Skills</Link>
        <Link to="/Projects" className="navlink-one">Projects</Link>
        <Link to="/Blog" className="navlink-one">Blog</Link>
        <a href="https://drive.google.com/file/d/155uSCwdNx99bCQXixeMV34wwrE5Mhql5/view?usp=sharing" className="navlink-one">Resumé</a>
      </div>
    </div>
    <hr />
  </nav>
)

export default Navbar
