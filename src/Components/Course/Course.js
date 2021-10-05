import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Course = (props) => {
  const{coursetitle,subtitle,image,duration,fee,description}=props.course;
    return (
        <div>
           <div>
           <CardGroup className="card-group">
                <Card className="card">
                    <Card.Img className="img-size" variant="top" src={image} />
                    <Card.Body className="body-color">
                        <h3>{coursetitle}</h3>
                        <h6>{subtitle}</h6>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <h4>Fee:{fee}</h4>
                        <h6 className="mt-3">Duration:{duration}</h6>
                
                    </Card.Footer>
                </Card>
            </CardGroup>
           </div>
    
        </div>
    );
};

export default Course;