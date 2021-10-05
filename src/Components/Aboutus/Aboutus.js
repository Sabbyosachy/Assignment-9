import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Aboutus.css';


const Aboutus = () => {
    return (
        <div className="p-3">
            <div>
            <Row>
            <Col>
               <img src="https://i.pinimg.com/originals/6a/07/45/6a07451631ad1dd24cce8b73ea5fc62b.jpg" alt/>
                </Col>
                <Col className="pt-5 mt-5 text-start me-5">
                <h4 className="about-hader-text">Here You Can Learn Different Type Of Proggramming Language!!!</h4>

           
                </Col>
            </Row>
            </div>
          <div className="pt-5 mt-5">
            <h3 className="aboutmore">About More</h3>
            <div className="aboutmore-text">
            <Row>
                <Col className="pt-5 mt-5 text-start me-5">
                <h3 className="pt-5 mt-5 pb-3 text">The 5 types of Programming Language that are classified are</h3>
                <ul>
                    <li>Procedural Programming Language.</li>
                    <li>Functional Programming Language.</li>
                    <li>Scripting Programming Language.</li>
                    <li>Logic Programming Language.</li>
                    <li>Object-Oriented Programming Language.</li>
                </ul>
                </Col>
                <Col className="py-5">
               <img src="https://i.pinimg.com/originals/4e/27/44/4e2744fcb5f235e6f8883bcc398f2427.png" alt/>
                </Col>
            </Row>
            </div>
          </div>
        </div>
    );
};

export default Aboutus;