import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer"; 
import "./Footer.css";
import "./Certified.css"; 

const Certified = () => {
  return (
    <div className="certified-container">
      <Header />

     
      <img src="/images/car.jpg" alt="Car Image" className="car-image" />

     
      <h2> <span className="highlight">|</span>Used cars for sale nationwide</h2>

    
      <div className="content">
        <div className="filters">
          <h3>New cars</h3>
          <h3>Used cars</h3>
          <label>Car</label>
          <select>
            <option>Make</option>
          </select>
          <label>Model</label>
          <select>
            <option>Model</option>
          </select>
          <label>Zip code</label>
          <input type="text" placeholder="Enter Zip Code" />
          <button className="search-btn">Search</button>

          <div className="filter-sections">
            <p>Price & Payment</p>
            <p>Mileage</p>
            <p>Years</p>
            <p>Online shopping options</p>
            <p>Exterior color</p>
            <p>Interior color</p>
            <p>Drive train</p>
            <p>Transmission</p>
          </div>
        </div>

       
        <div className="car-listings">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="car-card">
              <div className="featured-tag">Featured</div>
              <img src="images/Cabriolet.jpeg" alt="Car" className="car-image-small" />
              
              <h4>Mini cooper 3</h4>
              <h3>Chevrolet suburban 2021</h3>
              <p className="price">₹ 27,000</p>
              <div className="details">
                <span>⛽ Fuel type: Petrol</span>
                <span>🛣️ Mileage: 90 km</span>
                <span>⚙️ Transmission: Auto</span>
              </div>
              <button className="details-btn">View details →</button>
              <button className="wishlist">♡</button>
            </div>
            
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Certified;
