import React from 'react';
import './Dropdown.css';

const Dropdown = ({ options, onOptionChange, showDropdown, toggleDropdown }) => {
  const handleOptionClick = (option) => {
    onOptionChange(option);
  };

  return (
    <div className={`dropdown-container ${showDropdown ? 'show' : ''}`} onClick={toggleDropdown}>
      <button className="dropdown-trigger">Select Status</button>
      <ul className="dropdown-content">
        {options.map((option) => (
          <li key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;