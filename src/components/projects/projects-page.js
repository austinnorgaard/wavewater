import Box from '@mui/material/Box';
import '../../style.css';
import { Link } from 'react-router-dom';
import Header from '../header/header';

function Projects() {
    return (
        <Box className="Projects">
            <Header />
            <Box as="main" id="main">
                <Box as="section" id="projects">
                    <Box as="h2" id="projectHeader">My Music</Box>
                    <br />
                    <ul id="musicList">
                        <i><Link to="/projects/project1">Heart Smile</Link></i>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;