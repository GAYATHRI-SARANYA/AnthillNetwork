import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import CarDetails from "./pages/carDetails";
import AboutUs from "./pages/AboutUs";
import Header from "./pages/Header";
import Certified from "./pages/Certified";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/certified" element={<Certified />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
