import React, { useEffect, useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="row">
            {
                courses.map(course => <AllCourses
                    key={course.id}
                    course={course}
                ></AllCourses>)
            }
        </div>
    );
};

export default Course;