import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <div className="main" id="Portfolio">
            <div className="section-header">
                <h2>Portfolio</h2>
            </div>
            <div className="section-content">
                <iframe src="http://www.dwbuilders.net" frameBorder="0"></iframe>
            </div>
        </div>
    )
}

export default Portfolio;