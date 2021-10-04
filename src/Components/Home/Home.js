import React, { useEffect, useState } from 'react';
import './Home.css'
import Courses from '../Courses/Courses';
import img from '../../images/undraw_reading_time_gvg0.png';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container main">
            <div className="head">
                <img src={img} alt="" />
                <div>
                    <h1><span className="t1">Read More..</span> <br /> <span className="t2">Grow More..</span></h1>
                    <p className="title">Enrolled Our Online or Offline Courses and Grow <br /> your knowledge. This is The One of the best <br /> Learning Platform in Bangladesh.</p>
                </div>
            </div>
            <hr />
            <div className="row my-5 ms-2 g-5">
                {
                    courses.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default Home;