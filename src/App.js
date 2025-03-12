import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactUsSection";
import { Link, Element } from "react-scroll";
import logo from "./logo.png"

function App() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50 flex justify-between items-center px-8">
        
        {/* Business Logo & Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Business Logo" className="h-10 w-auto" /> 
          <span className="text-lg font-semibold text-gray-800">JM Technologies</span>
        </div>

        {/* Navigation Links */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50 flex items-center justify-between px-8">
  
  {/* Business Logo & Name */}
  <div className="flex items-center space-x-3">
    <img src={logo} alt="Business Logo" className="h-10 w-auto" /> 
    <span className="text-lg font-semibold text-gray-800">JM Technologies</span>
  </div>

  {/* Centered Navigation Links */}
  <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
    <Link to="services" smooth={true} className="cursor-pointer font-medium text-gray-700 hover:text-blue-500">Services</Link>
    <Link to="testimonials" smooth={true} className="cursor-pointer font-medium text-gray-700 hover:text-blue-500">Testimonials</Link>
    <Link to="projects" smooth={true} className="cursor-pointer font-medium text-gray-700 hover:text-blue-500">Projects</Link>
    <Link to="contact" smooth={true} className="cursor-pointer font-medium text-gray-700 hover:text-blue-500">Contact</Link>
  </div>

</nav>


      </nav>

      {/* Sections */}
      <Element name="hero"><HeroSection /></Element>
      <Element name="services"><ServicesSection /></Element>
      <Element name="testimonials"><TestimonialsSection /></Element>
      <Element name="projects"><ProjectsSection /></Element>
      <Element name="contact"><ContactSection /></Element>
    </div>
  );
}

export default App;
