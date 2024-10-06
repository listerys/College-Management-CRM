import React, { useState, useEffect } from "react";
import "./Header.css"; // Ensure the correct path to the CSS file

const Header = ({ onSelectTerm }) => {
  // State to track the selected term and dropdown state
  const [selectedTerm, setSelectedTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [yearOptions, setYearOptions] = useState([]); // Academic years fetched from the backend

  // Fetch academic year options from the server when the component mounts
  useEffect(() => {
    const fetchYearOptions = async () => {
      try {
        const response = await fetch("http://localhost:3001/academicyears");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Map to get the year name and set it as options
        setYearOptions(data.map((item) => item.yearname));
      } catch (error) {
        console.error("Error fetching academic years:", error);
      }
    };

    fetchYearOptions();
  }, []);

  // Close the dropdown if a click occurs outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false); // Close dropdown if click happens outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("click", handleClickOutside);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle selecting a term and trigger the parent function
  const handleTermSelect = (option) => {
    setSelectedTerm(option);
    setIsOpen(false); // Close dropdown on selection
    onSelectTerm(option); // Notify the parent component of the selected term
  };

  return (
    <div className="headerContainer">
      {/* Logo Section */}
      <div className="logoSection">
        <img src="logo_placeholder.png" alt="Company Logo" className="logo" />
      </div>

      {/* Dropdown Section for selecting the term */}
      <div className="dropdownSection">
        <span className="selectTermText">Select Term:</span>
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          {/* Display the currently selected term, or default to 'Select Term' */}
          <div className="selectedTerm">
            {selectedTerm || "Select Term"}
            {/* Dropdown arrow icon */}
            <img
              src="https://img.icons8.com/sf-black/64/1A1A1A/expand-arrow.png"
              alt="Expand dropdown"
              style={{ width: "23px", marginLeft: "10px" }} // Adjusted for better control
            />
          </div>

          {/* Dropdown content appears only if isOpen is true */}
          {isOpen && (
            <div className="dropdownContent">
              {yearOptions.length > 0 ? (
                yearOptions.map((option) => (
                  <div
                    key={option} // Ensure each option has a unique key
                    className="dropdownItem"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent dropdown from closing when clicking an item
                      handleTermSelect(option); // Call handler to set selected term
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
