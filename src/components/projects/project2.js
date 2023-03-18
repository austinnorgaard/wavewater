// Project2.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery2 from '../gallery/project2Gallery';


function Project2() {
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
          <Box as="h1">Project 2 - 3D Engine/Renderer</Box>
          <Box as="p" id="project2"> A 3D Engine using matrices and data points to render objects in a 3D space on a 2D screen.
          </Box>
          <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/Engine3D.git" target="_blank">Link to Github Repo</Link></Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery2 className="image-gallery"/>
        </Box>
      </Box>
    </Box>
  );
}

export default Project2;