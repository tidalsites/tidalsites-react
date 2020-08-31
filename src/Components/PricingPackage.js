import React from 'react';

function PricingPackage({ title, content }) {
    let { initialFee, maintenanceFee, monthlyFee } = content;
    return (
        <div id="PricingPackage">
            <h4>{title}</h4>
            <div className="package-content">
                <p>Initial Fee: </p>
                <p>${initialFee}</p>
            </div>
            <div className="package-content">
                <p>Maintenance Fee: </p>
                <p>${maintenanceFee}</p>
            </div>
            <div className="package-content">
                <p>Monthly Fee: </p>
                <p>${monthlyFee}</p>
            </div>
        </div>
    )
}

export default PricingPackage;