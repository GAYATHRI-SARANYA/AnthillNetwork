import React, { useState } from "react";
import "./FeatureListing.css";

const FeatureListing = () => {
  const [activeTab, setActiveTab] = useState("all");

  const featuredCars = [
    {
      id: 1,
      name: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "₹ 27,000",
      fuelType: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      image: "/images/car1.jpeg",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "₹ 27,000",
      fuelType: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      image: "/images/Chevrolet Suburban.jpeg",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "₹ 27,000",
      fuelType: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      image: "/images/Chevrolet.jpeg",
      isFeatured: true,
    },
    {
      id: 4,
      name: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "₹ 27,000",
      fuelType: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      image: "/images/Chevr.jpeg",
      isFeatured: true,
    },
    {
      id: 5,
      name: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "₹ 27,000",
      fuelType: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      image: "/images/Maruti.jpeg",
      isFeatured: true,
    },
    {
      id: 6,
      name: "Chevrolet Suburban 2021",
      model: "Mini Cooper 3",
      price: "₹ 27,000",
      fuelType: "Petrol",
      mileage: "90 km",
      transmission: "Auto",
      image: "/images/best.jpeg",
      isFeatured: true,
    },
  ];

  return (
    <section className="feature-listing">
      <h2>
        <span className="highlight">|</span> Feature listing
      </h2>

      <div className="tabs">
        <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>
          All
        </button>
        <button className={activeTab === "new" ? "active" : ""} onClick={() => setActiveTab("new")}>
          New cars
        </button>
        <button className={activeTab === "used" ? "active" : ""} onClick={() => setActiveTab("used")}>
          Used cars
        </button>
      </div>

     
      <div className="feature-grid">
        {featuredCars.map((car) => (
          <div key={car.id} className="feature-card">
            <div className="image-container">
              <img src={car.image} alt={car.name} />
              {car.isFeatured && <span className="featured-badge">Featured</span>}
            </div>
            <div className="card-content">
              <p className="model">{car.model}</p>
              <h3>{car.name}</h3>
              <p className="price">{car.price}</p>
              <div className="car-details">
                <span>⛽ {car.fuelType}</span>
                <span>🚗 {car.mileage}</span>
                <span>⚙️ {car.transmission}</span>
              </div>
              <div className="card-actions">
                <button className="view-details">View details →</button>
                <button className="wishlist">♡</button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <button className="load-more">Load more</button>
    </section>
  );
};

export default FeatureListing;
