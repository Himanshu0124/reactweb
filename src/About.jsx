import React from 'react';
import web from '../src/Images/net2.png';
import {NavLink} from 'react-router-dom';

const About = () => {
    return (
        <> 
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 justify-content-center">
        <h1>  <strong className="brand-name"> 
        Watch some of our favorite shows and movies for free
        </strong></h1> 
             <div className="mt-3">
                 <NavLink to="/contact" className="btn btn-dark" id="get">Get Contact</NavLink>
             </div>
                    </div>

<div className="pt-5 mt-5 col-lg-6 order-1 order-lg-2 header-img">
    <img src={web} className="img-fluid animated" alt="home img" />
</div>
</div>
                </div>
            </div>
        </div>
         </section>
        </>
    );
};

export default About;