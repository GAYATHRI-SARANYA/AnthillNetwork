import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/cars/${id}`)
      .then((response) => setCar(response.data))
      .catch((error) => console.error("Error fetching car details:", error));
  }, [id]);

  if (!car) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{car.name} - {car.model}</h2>
      <img src={car.image} alt={car.name} width="300px" />
      <p>Price: ₹{car.price}</p>
    </div>
  );
};

export default CarDetails;
