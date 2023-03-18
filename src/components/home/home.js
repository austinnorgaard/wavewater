// Home.js
import Box from '@mui/material/Box';
import '../../index';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import { lazy } from 'react';
import ProjectsGallery from '../gallery/projectsGallery';

const images = [
    {
    },
  ];

function Home() {
    return (
        <Box className="Home">
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
                <Box as="section" id="home">
                <Box as="h1">Who I Am</Box>
                <Box as="p">My name is Austin Norgaard. I am an aspiring software engineer, with a focus
                    on working towards something meaningful for the betterment of everyone, and where
                    I truly make an impact. Something interesting about me is that I am a musician,
                    so I can be creative and think outside the box in a lot of situations.</Box>
                </Box>
                <Box as="section" id="about">
                <Box as="h1">About Me</Box>
                <Box as="p">I am currently studying at Corban University for a degree in Computer Science.
                            I've worked on several projects and have experience in C++, Java, Python, HTML, CSS, JavaScript, and React.
                </Box>
                </Box>
                <Box as="section" id="projects">
                    <Box as="h2"><Link to="/projects">My Projects</Link></Box>
                </Box>
                <Box as="section" className="image-gallery-wrapper">
                    <ProjectsGallery className="image-gallery" render={images}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;