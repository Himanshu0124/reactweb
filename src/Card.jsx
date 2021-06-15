import React from 'react';
import web from '../src/Images/Ghoul.jpg';
import web1 from '../src/Images/Ludo.jpg';
import web2 from '../src/Images/SG.jpg';
import web3 from '../src/Images/th.jpg';
import web4 from '../src/Images/tw.jpg';
import web5 from '../src/Images/vd.jpg';

const Card = (props) => {
    return (
        <>  
                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text"></p>
                    <a to="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div> 
                        </div>
  
        </>
    );
};

export default Card;