import React from 'react';
import web from '../src/Images/net1.png';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <>
         <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 justify-content-center">
        <h1>Watch your real life Experience with <strong className="brand-name">Netflix</strong></h1>
        <p>Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos,
             California.
             Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.</p>
             <div className="mt-3">
                 <NavLink to="/service" className="btn btn-dark" id="get">Get Started</NavLink>
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

export default Home;