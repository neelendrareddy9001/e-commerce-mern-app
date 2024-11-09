import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-3 footer">
      <h4 className="text-center">All Rights Reserved &copy; Technical Info</h4>
      <p className="text-center mt-3">
        <Link to="/about" className="link">
          About{" "}
        </Link>
        <Link to="/contact" className="link">
          | Contact
        </Link>
        <Link to="/policy" className="link">
          | Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
