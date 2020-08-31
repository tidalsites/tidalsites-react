import React from 'react';
import Package from './PricingPackage';
import '../styles/Pricing.css';

function Pricing() {
    let packages = {
        staticNoSupport: {
            initialFee: 500,
            maintenanceFee: 35,
            monthlyFee: 0
        },
        staticWithSupport: {
            initialFee: 500,
            maintenanceFee: 0,
            monthlyFee: 175
        },
        dynamic: {
            initialFee: 1000,
            maintenanceFee: 0,
            monthlyFee: 175
        }
    }
    return (
        <div id="Pricing">
            <h2 className="section-header">Let's talk pricing..</h2>
            <h4 className="section-subheader">Tidal sites believes in transparent pricing. Knowing the price ahead of time, saves everybody!</h4>
            <div className="packages">
                <h3>Choose one of our packages</h3>
                <Package title="Static Website - No support" content={packages.staticNoSupport} />
                <Package title="Static Website - With support" content={packages.staticWithSupport} />
                <Package title="Dynamic Website" content={packages.dynamic} />
            </div>
        </div>
    )
}

export default Pricing;