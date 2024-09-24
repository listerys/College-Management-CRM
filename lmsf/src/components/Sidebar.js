import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({ setActiveModule }) {
  const [active, setActive] = useState("");

  const navOptions = []; // Empty array since we are removing all options

  const handleNavClick = (id) => {
    setActive(id);
    setActiveModule(id);
  };

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
          <li
            key={option.id}
            className={option.id === active ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick(option.id)}
          >
            <span className="nav-icon">{option.icon}</span>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
