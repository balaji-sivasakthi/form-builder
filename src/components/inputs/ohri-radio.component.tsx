// components/RadioGroupComponent.jsx
import React, { useState } from 'react';

const OHRIRadio = ({ id, label, options, selectedValue, onChange }: any) => {
  const initalValues = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]
  const [radioOptions, setradioOptions] = useState(initalValues)
  const [isAddOption, setIsAddOption] = useState<boolean>(false);
  const [newOptionLabel, setNewOptionLabel] = useState<string>('');

  const addOption = () => {
    const newOption = { value: `option${radioOptions.length + 1}`, label: newOptionLabel };
    setradioOptions([...radioOptions, newOption]);
    setIsAddOption(false);
    setNewOptionLabel('');
  }

  return (
    <div className='flex space-x-2'>
      <label>{label}</label>
      <div>
        {radioOptions.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={`${id}-${option.value}`}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={`${id}-${option.value}`}>{option.label}</label>
          </div>
        ))}
        { !isAddOption && ( <div onClick={() => setIsAddOption(prev => !prev)}> <span>+ Add new option </span></div> )}
        {isAddOption && (
          <div>
            <input 
              type="text" 
              placeholder='Type Option name' 
              className='border' 
              value={newOptionLabel} 
              onChange={(e) => setNewOptionLabel(e.target.value)}
            />
            <button onClick={addOption}>Add Option</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OHRIRadio;
