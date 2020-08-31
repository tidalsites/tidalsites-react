import React from 'react';
import '../styles/Navbar.css';
import Logo from '../whiteLogo.png';
import Burger from '../whiteBurger.png';

function Navbar() {
    return (
        <nav>
            <div id="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div id="navTitle">
                <p>Tidal Sites</p>
            </div>
            <div id="burger">
                <img src={Burger} alt="hamburger dropdown menu" />
            </div>
        </nav>
    )
}

export default Navbar;