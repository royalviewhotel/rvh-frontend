import React from "react";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

// React Router
import { Route, Routes } from "react-router-dom/dist";
import OurRooms from "./pages/OurRooms";
import Gallery from "./pages/Gallery";
import SubFooter from "./components/SubFooter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/our-rooms" element={<OurRooms />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default App;
