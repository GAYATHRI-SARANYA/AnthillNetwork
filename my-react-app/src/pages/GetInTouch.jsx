import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="form-container">
        <h2>
          <span className="highlight">|</span> Get in Touch
        </h2>
        <p>
          We’re here to help! Whether you’re interested in booking a tour, learning more about our memberships, or have general inquiries, feel free to reach out. We’ll get back to you as soon as possible.
        </p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone number" />
          </div>
          <textarea placeholder="Description"></textarea>
          <button type="submit">Send My Inquiry</button>
        </form>
      </div>

      <div className="image-container">
        <img src="/images/image.png" alt="Customer support" />
      </div>
    </section>
  );
};

export default GetInTouch;
