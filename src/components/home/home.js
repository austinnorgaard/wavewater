// Home.js
import Box from '@mui/material/Box';
import '../../index';
import { Link } from 'react-router-dom';
import Header from '../header/header';

function Home() {
    return (
        <Box className="Home">
            <Header />
            <div className="bg-image"/>
            <Box as="main" id="main">
                <Box as="section" id="home">
                    <Box as="h1">Who We Are</Box>
                    <Box as="p">WaveWater Music! :) <br/><br/>We are dedicated to helping independent artists get their music up and going!
                    We hope to help you get into the market and provide studio and production services. </Box>
                </Box>
                <Box as="section" id="about">
                    <Box as="h1">What We Provide</Box>
                    <Box as="p">We are currently about 5 people big and work mostly on helping with producing and writing music. We do also specialize
                    in marketing and social media as well. <br/><br/>Reach out for more info!
                    </Box>
                </Box>
                <Box as="section" id="projects">
                    <Box as="h2"><Link to="/music">&#8594; See our work &#8592;</Link></Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;