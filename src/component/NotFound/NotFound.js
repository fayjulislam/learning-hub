import React from 'react';
import img from '../../images/undraw_page_not_found_su7k.png';
import './NotFound.css';

const NotFound = () => {
    return (
        // Error page Area 

        <div className="not-found">
            <div className="container">
                <div className="text-center text-danger mt-5 p-5">
                    <h2>No Result Found At This Time</h2>
                </div>
                <div className="text-center">
                    <img style={{ height: '300px' }} className="img-fluid" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;