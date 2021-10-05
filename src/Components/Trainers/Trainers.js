import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import './Trainers.css';

//heading and card information of all trainer

const Contact = () => {
    return (
        <div>
            <div>
                <img src="https://www.israel21c.org/wp-content/uploads/2017/09/shutterstock_work-1168x657.jpg" alt="" srcset="" />
            </div>
            <div className="pb-5">
                <h3 className="py-5 mt-5 trainer">All Trainers</h3>
            <CardGroup>
  <Card className="mx-5">
    <Card.Img variant="top" src="https://weall.org/wp-content/uploads/2020/07/rajiv-joshi-1-300x300.jpg" />
    <Card.Body>
      <Card.Title>Andraw Rassel</Card.Title>
      <Card.Text>
        c,c++,swift expert with 15 year experience
      </Card.Text>
    </Card.Body>
 
  </Card>
  <Card className="mx-5">
    <Card.Img variant="top" src="https://eventex.co/wp-content/uploads/2020/08/matt-johnson.jpg" />
    <Card.Body>
      <Card.Title>Di adriz</Card.Title>
      <Card.Text>
       Java and javaScript expert with 10 year experience
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="mx-5">
    <Card.Img variant="" src="https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg" />
    <Card.Body>
      <Card.Title>Yong jhon</Card.Title>
      <Card.Text>
       Kotlin,java and c++ expert with 20 year experience
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

<CardGroup className="pt-5">
  <Card className="mx-5">
    <Card.Img variant="top" src="https://londonspeakerbureau.com/wp-content/uploads/2017/04/Jeremy-White-Keynote-Speaker-1-300x300.jpg" />
    <Card.Body>
      <Card.Title>Shejam haque</Card.Title>
      <Card.Text>
        React,Js expert with 15 year experience
      </Card.Text>
    </Card.Body>
 
  </Card>
  <Card className="mx-5">
    <Card.Img variant="top" src="https://cdn.vanderbilt.edu/vu-wp0/wp-content/uploads/sites/324/2019/10/17102446/RR1_6331-small-300x300.jpg" />
    <Card.Body>
      <Card.Title>Elidraz yoi</Card.Title>
      <Card.Text>
       Java and C,React expert with 10 year experience
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="mx-5">
    <Card.Img variant="" src="https://londonspeakerbureau.com/wp-content/uploads/2021/07/Rory-Coleman-Keynote-Speaker-1-300x300.jpg" />
    <Card.Body>
      <Card.Title>Belli field</Card.Title>
      <Card.Text>
       java and c++ expert with 25 year experience
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

<h4 className="about-hader-text">Become A Member</h4>
<p>Join Now Hurry !!</p>
<Button className="btn-primary">Learn More</Button>
            </div>
        </div>
    );
};

export default Contact;