import React from 'react';
import { Card } from 'react-bootstrap';

const Courses = (props) => {
    const { cimg, ctime, ctitle, cprice } = props.course
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cimg} />
                <Card.Body>
                    <Card.Title>{ctitle}</Card.Title>
                    <Card.Text>{ctime}</Card.Text>
                    <Card.Text>{cprice}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;