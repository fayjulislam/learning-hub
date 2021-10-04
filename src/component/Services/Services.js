import React from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
    const {services} = props;
    
    return (

        // Map Services Data 
        <div className="container mt-5 pb-5 pt-5">
            <div>
                <h1 className="display-4 text-center pb-4">Our Services</h1>
            </div>
            <Row xs={1} md={4} className="g-4">
                {services.map(service => <Service
                    key={service.course_id}
                    service={service}
                ></Service>)}
            </Row>
        </div>
    );
};

export default Services;