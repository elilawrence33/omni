import React from "react";
import "../App.css";

function Menu() {
  return (
    <div className="menu">
      <div className="hamburger-container">
        <button className="hamburger">
          <span className="hamburger-icon"></span>
        </button>
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Meet the Team</a></li>
        <li><a href="#">Appointments</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">My Account</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Menu;
