import React from "react";
import "./AboutUs.css";
import Header from "../pages/Header";
import { FaCheckCircle, FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-container">
      <Header />
      <img src="/images/car.jpg" alt="Car Image" className="car-image" />

     
      <section className="journey">
  
  <div className="journey-container">
  <h2>🚗 Our Journey</h2>
    <div className="journey-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Duis vel
        mattis turpis. Morbi commodo at orci et maximus.<br></br> Sed pulvinar
        tincidunt augue, nec<br></br> dapibus lorem luctus vel.
      </p>
      <div className="journey-info">
        <div className="info-box">
          <h3>200+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="info-box">
          <h3>10k+</h3>
          <p>Vehicles Sold</p>
        </div>
        <div className="info-box">
          <h3>16+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
    </div>
  <div className="speedometer">
      <img src="/images/screen.png" alt="Speedometer" className="journey-image" />
  </div>
</section>


     
    



    <section className="values">
      <div className="values-container">
        
        <div>
          <h2>⭐ Our Values</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Duis vel
            mattis turpis.<br></br> Morbi commodo at orci et maximus.
          </p>
        </div>

        
        <div className="values-boxes">
          <div className="value-box">
            <FaCheckCircle /> 
            <div>
              <h4>Trust</h4>
              <p>We believe in transparency and customer satisfaction.</p>
            </div>
          </div>
          <div className="value-box">
            <FaCheckCircle /> 
            <div>
              <h4>Excellence</h4>
              <p>Providing high-quality cars with excellent service.</p>
            </div>
          </div>
          <div className="value-box">
            <FaCheckCircle /> 
            <div>
              <h4>Client-Centric</h4>
              <p>Customer needs are our top priority.</p>
            </div>
          </div>
          <div className="value-box">
            <FaCheckCircle /> 
            <div>
              <h4>Our Commitment</h4>
              <p>Dedicated to providing the best vehicles and support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>





    
      <section class="team">
    <h2>👨‍💼 Meet Our Team</h2>
    <p>At Homyfyd, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
    <div class="team-members">
        <div class="team-box">
            <div class="team-card">
                <img src="/images/Micel.png" alt="Micel" />
                <h4>Max Mitchell</h4>
                <p>Founder</p>
            </div>
        </div>
        <div class="team-box">
            <div class="team-card">
                <img src="/images/david.png" alt="david" />
                <h4>Sarah Johnson</h4>
                <p>Chief Real Estate Officer</p>
            </div>
        </div>
        <div class="team-box">
            <div class="team-card">
                <img src="/images/micheal.png" alt="micheal" />
                <h4>David Brown</h4>
                <p>Head of Property Management</p>
            </div>
        </div>
        <div class="team-box">
            <div class="team-card">
                <img src="/images/shee.png" alt="Michael Turner" />
                <h4>Michael Turner</h4>
                <p>Legal Counsel</p>
            </div>
        </div>
    </div>
</section>


      <footer className="footer">
        <h2>Do you have Something to Sell through Us?</h2>
        <button className="sell-btn">Sell your car today</button>
        <div className="footer-content">
          <div className="footer-links">
            <div>
              <h3>Overview</h3>
              <ul>
                <li>About Us</li>
                <li>Features</li>
                <li>Cars</li>
                <li>Testimonials</li>
                <li>FAQ's</li>
              </ul>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                <li>Blogs</li>
                <li>Press mentions</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="contact-box">
            <p><FaMapMarkerAlt /> 7th b main Btm 1st stage Bangalore Karnataka 560029</p>
            <p><FaEnvelope /> hello@email.com</p>
            <p><FaPhone /> +91 8310955920</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
