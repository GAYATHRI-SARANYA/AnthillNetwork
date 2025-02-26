import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    name: "",
    model: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/cars", car);
    alert("Car added successfully!");
    navigate("/");
  };

  return (
    <div>
      <h2>Add a Car</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input type="text" name="name" placeholder="Car Name" onChange={handleChange} required />
        <input type="text" name="model" placeholder="Model" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
