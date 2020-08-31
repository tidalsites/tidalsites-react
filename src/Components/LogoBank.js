import React from 'react';
import '../styles/LogoBank.css';
import Logo1 from '../LogoBank1.png';
import Logo2 from '../LogoBank2.png';
import Logo3 from '../LogoBank3.png';
import Logo4 from '../LogoBank4.png';

function LogoBank() {
    return (
        <div id="LogoBank">
            <div className="section-header">
                <h2>Logo Bank</h2>
            </div>
            <div className="logo-content">
                <img src={Logo1} alt="Logo1" />
                <img src={Logo2} alt="Logo2" />
                <img src={Logo3} alt="Logo3" />
                <img src={Logo4} alt="Logo4" />
            </div>

        </div>
    )
}

export default LogoBank;