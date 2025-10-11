import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TravelStory from "./components/TravelStory";
import Destination from "./components/Destination";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch"; // ✅ Capitalized name for consistency
import NotFound from "./components/Pagenotfound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Routes handle your page navigation */}
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <TravelStory />
              <Destination />
              <Testimonial />
            </>
          }
        />

        {/* Get In Touch Page */}
        <Route path="/get-in-touch" element={<GetInTouch />} />

        <Route path="*" element={<NotFound/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
