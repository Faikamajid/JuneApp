import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Component for Home Page
const Home = () => <h1>Welcome to the Home Page</h1>;

// Component for About Page
const About = () => <h1>About Us</h1>;

// Component for Contact Page
const Contact = () => <h1>Contact Us</h1>;

// Main App Component
const RouterComp = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RouterComp;
