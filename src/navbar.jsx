import { Link } from 'react-scroll';

import React, { useEffect, useState } from 'react';


function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'contact'];
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element.offsetTop <= scrollPos && element.offsetTop + element.offsetHeight > scrollPos) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
