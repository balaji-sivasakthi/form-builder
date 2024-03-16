// components/MultiSelectComponent.jsx
import React, { useState } from 'react';

interface multiSelectOptionsProps{
  value:string;
  label:string;
}
const initialMultiSelectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

const OHRIMultiSelect = ({ id, label, options, selectedValues, onChange }: any) => {
  const [multiSelectOptions, setMultiSelectOptions] = useState<multiSelectOptionsProps[]>(initialMultiSelectOptions)
  const addOption = () => {
    const newOption = { value: `option${multiSelectOptions.length + 1}`, label: newOptionLabel };
    setMultiSelectOptions([...multiSelectOptions, newOption]);
    setIsAddOption(false);
    setNewOptionLabel('');
  }
  const [isAddOption, setIsAddOption] = useState<boolean>(false);
  const [newOptionLabel, setNewOptionLabel] = useState<string>('');
  return (
    <div className='flex space-x-2'>
      <label>{label}</label>
      <div className='flex flex-col'>
        {multiSelectOptions.map((option: any) => (
          <div key={option.value} className='flexitems-center space-x-1'>
            <input
              type='checkbox'
              id={`${id}-${option.value}`}
              value={option.value}
              // checked={selectedValues.includes(option.value)}
              onChange={() => {
                const updatedValues = selectedValues.includes(option.value)
                  ? selectedValues.filter((value:any) => value !== option.value)
                  : [...selectedValues, option.value];

                onChange(updatedValues);
              }}
            />
            <label htmlFor={`${id}-${option.value}`}>{option.label}</label>
            
          </div>
        ))}
        { !isAddOption && ( <div onClick={() => setIsAddOption(!isAddOption)}> <span>+ Add new option </span></div> )}
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

export default OHRIMultiSelect;
