// Project3.js
import '../../style.css';
import Box from '@mui/material/Box';
import Header from '../header/header';

function Project3() {
  return (
    <Box className="Project1">
      <Header />
      <Box as="main">
        <Box as="section" id="home">
          <Box as="h1">Project 3</Box>
          <Box as="p">This is my third project.</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Project3;