
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Col, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import Course from '../Course/Course';


//data fetch and state create
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('Homepagedata.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    
    //card create dynamically value set.
   
    return (
        <div>
        <div>
        
            <Row>
                <Col className="pt-5 mt-5 text-start ms-5">
                <h4 className="home-hader-text">Welcome To Easy Learn</h4>
                <p className="info">Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task</p>
                <Button className="btn-primary">Learn More</Button>
                </Col>
                <Col>
               <img src="https://cdn.dribbble.com/users/77598/screenshots/5919494/dribbble.png" alt/>
                </Col>
            </Row>
        </div>
             <h2 className="py-5 services-title">Our Services</h2>

             <div>
               
             <div className="row row-cols-1 row-cols-md-4 g-3 pb-3 container mx-auto">    
                    {
                        courses.map(course =><Course id={course.id} course={course}></Course>)
                    }
                    
                </div>
                
             </div>
             
        
            
        </div>
    );
};

export default Home;