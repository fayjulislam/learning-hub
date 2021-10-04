import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        // About page are
        <div className="about mt-5 pt-5">
            <div className="display-3 text-center">
                <h1>Who We Are?</h1>
            </div>

            <div className="text-center gx-5">
                <h5 className="text-danger">Meet Instructors</h5>
                <hr />
                <div>
                    <h1 className="display-4"><span className="text-danger">Top & Famous</span> Instructor In <br />Your City</h1>
                </div>
            </div>


            {/* Display Instructor Informations */}

            <div className="container mb-5 mt-5">
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <div className="shadow">
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <img className="img-fluid card-img" src="https://themezhub.net/learnup-demo-2/learnup/assets/img/user-3.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-2 mt-4">
                                        <Card.Title>Adam Willsoriam</Card.Title>
                                        <Card.Text>
                                            Web Designer, Canada
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow">
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <img className="img-fluid card-img" src="https://themezhub.net/learnup-demo-2/learnup/assets/img/user-2.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-2 mt-4">
                                        <Card.Title>Adam Willsoriam</Card.Title>
                                        <Card.Text>
                                            Web Designer, Canada
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow">
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <img className="img-fluid card-img" src="https://themezhub.net/learnup-demo-2/learnup/assets/img/user-4.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-2 mt-4">
                                        <Card.Title>Adam Willsoriam</Card.Title>
                                        <Card.Text>
                                            Web Designer, Canada
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col>
                        <div className="shadow">
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <img className="img-fluid card-img" src="https://themezhub.net/learnup-demo-2/learnup/assets/img/user-1.jpg" alt="" />
                                    </div>
                                    <div className="text-center p-2 mt-4">
                                        <Card.Title>Adam Willsoriam</Card.Title>
                                        <Card.Text>
                                            Web Designer, Canada
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default About;