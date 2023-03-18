// Project2.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Header from '../header/header';


function Project2() {
  return (
    <Box className="Project1">
      <Header />
      <Box as="main">
        <Box as="section" id="home">
          <Box as="h1">Project 2 - 3D Engine/Renderer</Box>
          <Box as="p" id="project2"> A 3D Engine using matrices and data points to render objects in a 3D space on a 2D screen.
          </Box>
          <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/Engine3D.git" target="_blank">Link to Github Repo</Link></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Project2;