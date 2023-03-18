import React from "react";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Sidebar from "../sidebar/sidebar";

function Header () {
    return (
        <Box as="header">
            <Box as="nav">
                <Sidebar />
                <ul id="nametag">
                    <li><Link to="/">WaveWater Music</Link></li>
                </ul>
                <ul className="desktop">
                    <li><Link to="/">Home</Link></li>
                    <li id="projectsLink"><Link to="/music">Music</Link></li>
                    <li><Link to="/info">Contact Info/About</Link></li>
                </ul>
            </Box>
        </Box>
    );
}

export default Header;