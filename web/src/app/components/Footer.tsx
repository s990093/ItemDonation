import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 p-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-sm">
          <p className="mb-1">© 2024 Your Company Name</p>
          <p className="text-gray-300">All Rights Reserved</p>
        </div>
        <nav className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Contact Info
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Rental Terms
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
