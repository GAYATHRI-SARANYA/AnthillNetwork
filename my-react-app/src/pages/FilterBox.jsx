import React from "react";
import "./FilterBox.css";

const FilterBox = () => {
  return (
    <div className="filter-box">
      <button className="compare-button">Compare Cars</button>
      <div className="filter-content">
        <input type="text" placeholder="Make" />
        <input type="text" placeholder="Models" />
        <input type="text" placeholder="Body" />
        <input type="range" min="0" max="50000" className="price-slider" />
        <button className="find-cars">2334 Cars</button>
      </div>
    </div>
  );
};

export default FilterBox;
