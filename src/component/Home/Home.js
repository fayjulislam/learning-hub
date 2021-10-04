import React from 'react';
import './Home.css';
import banner from '../../images/undraw_Developer_activity_re_39tg.png';
import { Button, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = (props) => {
    const { services } = props;
    return (
        <section className="header-section">
            <div className="container mt-5 home">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <div className="header-details mt-5">
                            <h5 className="primary-color">ONLINE SYSTEM</h5>
                            <h1>Your Course <br /> <span>To Success</span></h1>
                            <p>So I said codswallop car boot cheers mufty I don't want no agro are you taking the piss cheeky my lady gutted mate excuse my french, gormless have it cras.</p>
                            <Button variant="outline-primary" className="get-btn">Ready to get started?</Button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col mt-2 w-50 ms-auto">
                        <div className="header-banner">
                            <img src={banner} className="img-fluid banner-img" alt="{banner}" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div>
                    <h1 className="display-4 text-center pb-5">Our Courses</h1>
                </div>
                <Row xs={1} md={4} className="g-4">
                    {services.slice(0, 4).map(service => <Service
                        key={service.course_id}
                        service={service}
                    ></Service>)}
                </Row>
            </div>
        </section>

    );
};

export default Home;