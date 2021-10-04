import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileExcel, } from '@fortawesome/free-solid-svg-icons';
import './Service.css';

const Service = (props) => {

    const iconBriefcase = <FontAwesomeIcon icon={faBriefcase} />
    const iconFile = <FontAwesomeIcon icon={faFileExcel} />

    const { course_price, course_name, course_description, course_type, course_category, course_lesson, course_img } = props.service;
    return (

        // Display Service Data 
        <div>
            <Card className="shadow">
                <Card.Img variant="top" /> <img className="p-3 course-img" src={course_img} alt="" />
                <div className="p-2">
                    <Card.Body>
                        <div>
                            <h6 className="text-danger">- {course_category}</h6>
                        </div>
                        <div>
                            <Card.Title><h5 style={{ color: '#0071DC' }}>{course_name}</h5></Card.Title>
                        </div>
                        <div className="mt-4">
                            <h6><span className="text-danger">{iconBriefcase}</span> {course_type}</h6>
                        </div>
                        <div>
                            <h6><span className="text-danger">{iconFile}</span> Total Lesson: {course_lesson}</h6>
                        </div>
                        <div>
                            <Card.Text>
                                {course_description}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </div>
                <Card.Footer>
                    <div className="d-flex flex-column flex-md-row justify-content-between card-footer-area">
                        <h5 className="text-color-primary">Price: ${course_price}</h5>
                        <Button variant="outline-primary">Enroll Now</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;