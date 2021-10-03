import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container">
            <div className="row my-5 ms-2 g-5" xs={2} md={3}>
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