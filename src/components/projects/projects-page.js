import Box from '@mui/material/Box';
import '../../style.css';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';

function Projects() {
    return (
        <Box className="Projects">
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
            <Box as="main" id="main">
                <Box as="section" id="projects">
                    <Box as="h2" id="projectHeader">My Projects</Box>
                    <br />
                    <ul>
                        <i><Link to="/projects/project1">Project 1</Link></i>
                        <i><Link to="/projects/project2">Project 2</Link></i>
                        <i><Link to="/projects/project3">Project 3</Link></i>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;