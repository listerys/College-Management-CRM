import React, { useState, useEffect } from "react";
import "./Header.css"; // Ensure the CSS path is correct


  return (
    <div className="headerContainer">
            <div className="dropdownSection">
        <span className="selectTermText">Select Term:</span>
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          <div className="selectedTerm">
            {selectedTerm || "Select Term"}
            <img
              src="https://img.icons8.com/sf-black/64/1A1A1A/expand-arrow.png"
              alt="expand-arrow"
              style={{ width: "23px", marginLeft: "10px" }} // Adjusted for better control
            />
          </div>
          {isOpen && (
            <div className="dropdownContent">
              {yearOptions.length > 0 ? (
                yearOptions.map((option) => (
                  <div
                    key={option}
                    className="dropdownItem"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTermSelect(option);
                    }}
                  >
                    {option}
                  </div>
                ))
              ) : (
                <div className="dropdownItem">No options available</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
