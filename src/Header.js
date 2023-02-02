import React from "react";
import "./Header.css";
import { FaRocket } from "react-icons/fa";

const Header = (props) => {
  const { head } = props;
  return (
    <div className="header">
      <div className="title">
        <img style={{ width: 150, height: 90 }} src="logo.png" alt="resim" />
        <h1 style={{ fontSize: "70px" }}>{head}</h1>
      </div>
      <nav className="navbar">
        <div className="icons">
          <FaRocket size="20" />
        </div>

        <div>
          <a href="https://www.nasa.gov/"> NASA RESMİ SAYFA </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
