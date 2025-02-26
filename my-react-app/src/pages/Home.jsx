import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header";  
import FilterBox from "./FilterBox";
import FeatureListing from "./FeatureListing";
import CommunityFeedback from "./CommunityFeedback";
import GetInTouch from "./GetInTouch";
import FAQ from "./FAQ";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="home">
      
      <Header />  

      
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Find Quality-Assured<br></br>Cars Tailored to Your<br></br>Budget and<br></br>Preferences</h1>
            <p>Browse a Wide Range of Certified Used Cars from<br></br>Trusted Dealers and Private Sellers</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
              <span> Working with 50+ Happy Members</span>
            </div>
            <button className="cta-btn">Book My Car</button>
          </div>

         
          <div className="search-box">
            <div className="search-tabs">
              <button className="active">New Cars</button>
              <button className = "actives">Used Cars</button>
            </div>
            <input type="text" placeholder="Make" />
            <input type="text" placeholder="Model" />
            <div className="slider-container">
              <span>1,000</span>
              <input type="range" min="1000" max="5000"  />
              <span>5,000</span>
            </div>
            <input type="text" placeholder="Body Type" />
            <button className="search-btn">2334 Cars</button>
          </div>
        </div>
      </section>

      
<section className="explore">
  <h2><span className="highlight">|</span> Explore Our Cars</h2>
  <div className="car-grid">
    <div className="car-category">
    <img src="/images/Sedan.jpeg" alt="Sedan Image" className="sedan-image" />
      <p>Sedan</p>
    </div>
    <div className="car-category">
    <img src="/images/Campers.jpeg" alt="Campers Image" className="campers-image" />
      <p>Campers</p>
    </div>
    <div className="car-category">
    <img src="/images/Cabriolet.jpeg" alt="Cabriolet Image" className="Cabriolet-image" />
      <p>Cabriolet</p>
    </div>
    <div className="car-category">
      <img src="/images/Pickup.jpeg" alt="Pickup" />
      <p>Pickup</p>
    </div>
    <div className="car-category">
      <img src="/images/Supercar.jpeg" alt="Supercar" />
      <p>Supercar</p>
    </div>
    <div className="car-category">
      <img src="/images/Minivans.jpeg" alt="Minivans" />
      <p>Minivans</p>
    </div>
  </div>
  <p className="view-more">View More</p>
</section>


      
      <FeatureListing />
      <CommunityFeedback />
      <GetInTouch />
      <FAQ />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
