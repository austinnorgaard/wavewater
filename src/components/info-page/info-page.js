import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import instagram from '../../instagram.svg';
import apple from '../../apple.svg';
import spotify from '../../spotify.svg';
import Header from '../header/header';

const email = "help@wavewatermusic.com";

function Info() {
    return (
        <Box className="Info">
            <Header />
            <Box as="main" id="main">
                <Box as="h1" id="content">Contact Info:
                    <Box as="p">WaveWater Music</Box>
                    <Box as="p">email: <Link id="link" to={'mailto:' + email}>help@wavewatermusic.com</Link></Box>
                    <Box as="p">phone: 503-987-2311</Box>
                </Box>
                <Box as="h1" id="links">Links:<br/>
                    <Box>
                    <Link id="link" to="https://www.instagram.com/wavewatermusic/" target="_blank"><Box as="img" src={instagram} alt="instagram" /></Link>
                    <Link id="link" to="https://music.apple.com/us/artist/wavewater/1600723068" target="_blank"><Box as="img" src={apple} alt="apple" /></Link>
                    <Link id="link" to="https://open.spotify.com/artist/5C82QtjAalrNh6Nxm6FDxC?si=C33DQ3AMQRWY6KYPdy_k5A" target="_blank"><Box as="img" src={spotify} alt="spotify" /></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Info;