import React from 'react';
import './Courses.css'
import { Button, Card } from 'react-bootstrap';

const Courses = (props) => {
    const { cimg, ctime, ctitle, cprice } = props.course
    return (
        <div className="col-md-4">
            <Card className="course" style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ height: '150px' }} src={cimg} />
                <Card.Body>
                    <Card.Title><span className="fw-normal">Name:</span> {ctitle}</Card.Title>
                    <Card.Text><span className="text-primary">Duration:</span> {ctime}</Card.Text>
                    <Card.Text>Price: {cprice}</Card.Text>
                    <Button variant="success text-white fw-bold rounded-pill">Enroll Now</Button>
                    <Button variant="secondary text-white fw-bold rounded-pill ms-3">More..</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;