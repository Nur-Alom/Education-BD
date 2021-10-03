import React from 'react';

const AllCourses = (props) => {
    console.log(props.course);
    const { cimg, ctitle, ctime, cprice } = props.course;
    return (
        <div className=" col-md-4 my-5">
            <img src={cimg} alt="" />
            <h1>{ctitle}</h1>
            <h4>{ctime}</h4>
            <p>{cprice}</p>
        </div>
    );
};

export default AllCourses;