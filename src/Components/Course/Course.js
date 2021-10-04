import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container">
            <div className="row  my-5 ms-2 g-5">
                {
                    courses.map(course => <AllCourses
                        key={course.id}
                        course={course}
                    ></AllCourses>)
                }
            </div>
        </div>
    );
};

export default Course;