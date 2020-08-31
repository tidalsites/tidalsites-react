import React from 'react';
import '../styles/ServiceItem.css';

function ServiceItem({ header, blurb, btnText, btnAction }) {
    return (
        <div className="service-item">
            <h3>{header}</h3>
            <p>{blurb}</p>
            <button onClick={btnAction}>{btnText}</button>
        </div>
    )
}

export default ServiceItem;