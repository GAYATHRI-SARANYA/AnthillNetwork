import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How flexible are Carspace’s membership plans?",
    answer: "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
  },
  {
    question: "What kind of events and networking opportunities does Carspace provide?",
    answer: "",
  },
  {
    question: "Can I tour the Carspace before committing to a membership?",
    answer: "",
  },
  {
    question: "Is Carspace suitable for remote teams and distributed workforces?",
    answer: "",
  },
  {
    question: "What measures does Carspace take for environmental sustainability?",
    answer: "",
  },
  {
    question: "Still has questions?",
    answer: "",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
       
        <div className="faq-left">
          <h2>
            <span className="highlight">|</span> Your Roadmap to <br /> Carspace Clarity
          </h2>
          <p>
            Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
          </p>
        </div>

        
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{faq.question}</h4>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
