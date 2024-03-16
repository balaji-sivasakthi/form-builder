// components/DropdownComponent.jsx
import React from 'react';

const OHRIDropdown = ({ id, label, options, value, onChange }:any) => {
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        // Add more options as needed
      ];
  return (
    <div className='flex space-x-2'>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {dropdownOptions.map((option:any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OHRIDropdown;
