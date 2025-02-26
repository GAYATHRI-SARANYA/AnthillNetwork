import React from "react";
import "./BlogSection.css";

const articles = [
  {
    image: "/images/usedcars.jpeg", 
    title: "How the Maruti Invicto is a lesson in brand building……",
    name: "Name",
    date: "Date",
  },
  {
    image: "/images/keyy.jpeg", 
    title: "How the Maruti Invicto is a lesson in brand building……",
    name: "Name",
    date: "Date",
  },
  {
    image: "/images/threecars.jpeg", 
    title: "How the Maruti Invicto is a lesson in brand building……",
    name: "Name",
    date: "Date",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2>Latest News & Articles from the Blog</h2>
      <p>
        Frequently asked questions ordered by popularity. Remember that if the<br></br>
        visitor has not committed
        to the call to action, they may still have <br></br>questions (doubts) that can be answered.
      </p>
      <div className="blog-container">
        {articles.map((article, index) => (
          <div key={index} className="blog-card">
            <img src={article.image} alt="Blog Post" />
            <div className="blog-content">
              <div className="blog-meta">
                <span>{article.name}</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <h3>Read more</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
