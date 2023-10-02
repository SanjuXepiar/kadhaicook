import React from "react";
import "./Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <FaAlignJustify />
      <Link to="/">KadhaiCook</Link>
    </div>
  );
};

export default Navbar;
