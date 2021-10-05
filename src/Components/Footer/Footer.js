import React from 'react';
import './Footer.css';

//Footer create and sociloa icon add
const Footer = () => {
    return (
        <div className="footer">
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1 className="head">Easy Learn</h1>
                <div className="icons-container d-flex">
                  <div className="icon">
                  <i class="fab fa-facebook"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-youtube"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-twitter-square"></i>
                  </div>
                </div>
                <p className="mt-4 ">Here You can find the best techers and their information..</p>
                <p className="mt-2">Copywrite © 2021 Easy Learn</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="menu-container">
              
                  <p className="menu">Home</p>
                  <p className="menu">Service</p>
                  <p className="menu"> About Us</p>
                  <p className="menu">Contact</p>
                  
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-start ms-5 ps-5 iteams">
              <p><i class="fas fa-map-marker-alt"></i>  New York, NY 10012, US</p>
             <p> <i class="fas fa-envelope"></i>  info@example.com</p>
              <p><i class="fas fa-phone-square-alt"></i>  +01 344 568 56</p>
              <p><i class="fas fa-phone-square-alt"></i>  + 01 234 567 89</p>
                         
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    );
};

export default Footer;