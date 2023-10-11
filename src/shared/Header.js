import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuthContext } from "../context/authContext";
const Header = () => {
  const { authPage, slideClose, slideOpen } = useAuthContext();
  return (
    <div className="header">
      <div className="logo_Section">
        <span
          className={`menuIcon ${authPage ? "rotateClock" : ""}`}
          onClick={() => (authPage ? slideClose() : slideOpen())}
        >
          <AiOutlineMenu />
        </span>
        <Link to="/">
          <span className="headerLogo">
            <h3>K</h3>
            <p>adhai</p>
            <h3>C</h3>
            <p>ook</p> <FaPlayCircle />
          </span>
        </Link>
      </div>
      <div className="search_Section">
        <input type="text" placeholder="search" />
      </div>
    </div>
  );
};

export default Header;
