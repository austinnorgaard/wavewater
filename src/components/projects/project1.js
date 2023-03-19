// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Header from '../header/header';

function Project1() {
  return (
    <Box className="Project1">
      <Header />
      <Box as="main">
        <Box as="section" id="project">
          <Box id="songLinksList">
            <Box as="h1">Heart Smile</Box>
            <Box as="p" id="project1">This is my first song (of many I hope). I haven't done much and this is honestly terrible, but thank you for listening anyways! :).
            </Box>
            <Box as="p" id="gitLink"><Link to="https://music.apple.com/us/album/heart-smile/1600723065?i=1600723069" target="_blank">Apple Music</Link></Box>
            <Box as="p" id="gitLink"><Link to="https://open.spotify.com/track/5fFO90pF27IhXpyuOnwnvs?si=fb511b5aeef649b8" target="_blank">Spotify</Link></Box>
            <iframe id="embed" allow="autoplay *; encrypted-media *;" frameborder="0" height="150" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/heart-smile/1600723065?i=1600723069"></iframe>
          </Box>
        </Box>
      </Box>
     </Box>
  );
}

export default Project1;