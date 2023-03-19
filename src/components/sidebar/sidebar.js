import React, {useState} from "react";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import menuicon from '../../menu-icon.svg';
import exiticon from '../../exit.svg';
import './sidebar.css';

function Sidebar () {
    const [menu_class, setMenuClass] = useState ("closed");
    const [main_class, setMainClass] = useState ("menuUnclicked");
    const [button, setButtonClass] = useState ("unclicked");
    const [isButtonClicked, setClicked] = useState (false);
    const [icon, setIcon] = useState (menuicon);

    // Toggle button/menu
    function updateMenu () {
        if (!isButtonClicked) {
            setMenuClass ("opened");
            setMainClass ("menuClicked");
            setButtonClass ("clicked");
            setIcon (exiticon);
        }
        else {
            setMenuClass ("closed");
            setMainClass ("menuUnclicked");
            setButtonClass ("unclicked");
            setIcon (menuicon);
        }
        setClicked (!isButtonClicked);
    }

    return (
        <Box className={main_class}>
            <Box className={button} onClick={updateMenu} id="menu"><img src={icon} alt="menu icon" onClick={updateMenu} /></Box>
            <Box className={menu_class} id="menu">
                <ul>
                    <li><Link to="/" onClick={updateMenu}>Home</Link></li>
                    <li id="projectsLink"><Link to="/music" onClick={updateMenu}>Music</Link></li>
                    <li><Link to="/info" onClick={updateMenu}>Contact Info/About</Link></li>
                </ul>
            </Box>
        </Box>
    );
}

export default Sidebar;