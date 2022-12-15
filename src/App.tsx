import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import CreateHotel from "./pages/Hotels/CreateHotel";
import Hotel from "./pages/Hotels/Hotel";
import HotelsList from "./pages/Hotels/HotelsList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotels">
          <Route index element={<HotelsList />} />
          <Route path=":hotelId" element={<Hotel />} />
          <Route path="new" element={<CreateHotel />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
