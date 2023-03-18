// Project3.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery3 from '../gallery/project3Gallery';

function Project3() {
  return (
    <Box className="Project1">
      <Box as="header">
        <Box as="nav">
          <Sidebar />
            <ul id="nametag">
                <li><Link to="/">Austin Norgaard</Link></li>
            </ul>
            <ul className="desktop">
                <li><Link to="/">Home</Link></li>
                <li id="projectsLink"><Link to="/projects">Projects</Link></li>
                <li><Link to="/info">Contact Info/Links</Link></li>
            </ul>
        </Box>
      </Box>
      <Box as="main">
        <Box as="section" id="home">
          <Box as="h1">Project 3</Box>
          <Box as="p">This is my third project.</Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery3 className="image-gallery"/>
        </Box>
      </Box>
    </Box>
  );
}

export default Project3;