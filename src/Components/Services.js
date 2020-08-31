import React from 'react';
import ServiceItem from './ServiceItem';
import '../styles/Services.css';

function Services() {
    let blurbs = {
        branding: "Let us help you personalize your brand. We can design and build your logo to properly represent your organization. Or we can bring your design to life! And if all of that is too much, just choose from one of our pre-designed logos",
        webDesign: "Before we begin building, we must design! Let us work together to build an inspirational design that shows off your individuality. Tidal Sites believes in mobile-first design and will show off both the mobile version and web version of your vision."
    }
    return (
        <div className="main" id="Services">
            <h2 className="section-header">What can we do for you?</h2>
            <div className="service-container">
                <ServiceItem header="Branding" blurb={blurbs.branding} btnText="Check out our LogoBank" btnAction={() => console.log("Show the LogoBank!")} />
                <ServiceItem header="Web Design" blurb={blurbs.webDesign} btnText="Click here for our design profile" btnAction={() => console.log("Show Design Profile")} />
            </div>
        </div>
    )
}

export default Services;