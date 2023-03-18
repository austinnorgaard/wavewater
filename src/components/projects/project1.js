// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery1 from '../gallery/project1Gallery';

function Project1() {
  return (
    <Box className="Project1">
      <Box as="header">
        <Box as="nav">
          <Sidebar />
            <ul id="nametag">
                <li><Link to="/" id="name">Austin Norgaard</Link></li>
            </ul>
            <ul className="desktop">
                <li><Link to="/">Home</Link></li>
                <li id="projectsLink"><Link to="/projects">Projects</Link></li>
                <li><Link to="/info">Contact Info/Links</Link></li>
            </ul>
        </Box>
      </Box>
      <Box as="main">
        <Box as="section" id="project">
          <Box>
            <Box as="h1">Project 1 - Portfolio Website</Box>
            <Box as="p" id="project1">This is my first project (of my showcase). No literally, this entire website was built by me! 
              <br/><br/>I have experience in Angular and React, and I figured even if I don't necessarily want to work with it
              all the time, why not showcase it anyways :)
            </Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/portfolio.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery1 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project1;