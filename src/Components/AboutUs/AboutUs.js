import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/undraw_Developer_activity_re_39tg.png';

const AboutUs = () => {
    return (
        <div className="container d-flex align-items-center about-main my-5 py-5">
            <img style={{ width: '50%' }} src={img} alt="" />
            <div>
                <h1>Welcome To The <span className="text-warning">E-BD</span> <br /> Online Educational Platform.</h1>
                <p>Enrolled Our Online or Offline Courses and Grow
                    your knowledge. This is The One of the best
                    Learning Platform in Bangladesh....</p>
                <Button>More Info <i className="fas fa-arrow-right"></i></Button>
            </div>
        </div>
    );
};

export default AboutUs;