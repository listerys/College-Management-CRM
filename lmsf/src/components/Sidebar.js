import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const navOptions = []; // Empty array since we are removing all options

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png"
          alt="Company Logo"
        />
      </div>
      <ul className="nav-list">
        {navOptions.map((option) => (
          <li key={option.id} className="nav-item">
            <span className="nav-icon">{option.icon}</span>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
