import React, { useState } from "react";
import "./CommunityFeedback.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!",
    name: "Arjan S. Patil",
    image: "/images/user1.jpg", 
    rating: 5,
  },
  {
    text: "A seamless car-buying experience! The team guided me through the best options within my budget. Highly recommend their service.",
    name: "Sonia M.",
    image: "/images/user2.jpg", 
    rating: 4,
  },
  {
    text: "Great selection of cars and friendly staff. Found my dream car at an affordable price!",
    name: "Rahul V.",
    image: "/images/user3.jpg", 
    rating: 5,
  },
];

const CommunityFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="community-feedback">
      <div className="feedback-content">
        <div className="feedback-header">
          <h2>
            <span className="highlight">|</span> Hear From Our <span>Community</span>
          </h2>
          <p>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
        </div>

        <div className="navigation-buttons">
          <button className="arrow-btn" onClick={prevTestimonial}>
            <FaArrowLeft />
          </button>
          <button className="arrow-btn" onClick={nextTestimonial}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-quote">
          <span className="quote-icon">❝</span>
          {testimonials[currentIndex].text}
        </p>
        <div className="testimonial-user">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <div>
            <h4>{testimonials[currentIndex].name}</h4>
            <div className="stars">{"⭐".repeat(testimonials[currentIndex].rating)}</div>
          </div>
        </div>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CommunityFeedback;
