import React from 'react';
import Pic3 from './assets/images/about.webp';

const About = () => {

        return (
        <div className="container" id="about">
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading glow" style={{paddingBottom:"4rem"}}>About us<span className="text-muted"></span></h2>
                    <p className="lead">“Phase Power Products” started in the year 2016 and is a partnership firm. We perform our occupational activities proficiently as a wholesale distributor. The assortment of products we are delivering Digital Panel Meters with Automatic Changeover Cum Current Limiter, Smart ACCL and Meters, Branch Circuit Monitoring,
                     Advance Motor Protection and more. These products are recognized widely for their unmatched supremacy.</p>
                </div>
                <div className="col-md-5" >
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                        <title>Placeholder</title>
                       
                        <image href={Pic3} alt="logo-img" width="100%" height="100%" />
                        
                     </svg>
                </div>
            </div>
            <hr className="featurette-divider" id="services"/>
        </div>

        );
}

export default About;