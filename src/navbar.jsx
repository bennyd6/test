import { Link } from 'react-scroll';

import React, { useEffect, useState } from 'react';


function Navbar() {
    return (
    <nav id="navbar">
      <Link to="home" className="sections" smooth={true} duration={500}>Home</Link>
      <Link to="about" className="sections" smooth={true} duration={500}>About</Link>
      <Link to="skills" className="sections" smooth={true} duration={500}>Skills</Link>
      <Link to="projects" className="sections" smooth={true} duration={500}>Projects</Link>
      <Link to="contact" className="sections" smooth={true} duration={500}>Contact</Link>
    </nav>
  );
}

export default Navbar;
