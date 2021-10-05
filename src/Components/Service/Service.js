import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Service.css';


//fetch data set state and show data from json dynmically
const Service = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./Fakedata.json')
        .then(res=>res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div>
        <div>
            <h1 className="ourcourses pt-5">Our Courses</h1>
            <h6 className="subtitle">Learn With Easy Way</h6>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 p-5 container mx-auto">
                    {
                        courses.map(course =><Course id={courses.id} course={course}></Course>)
                    }
                </div>
            
        </div>
    );
};

export default Service;