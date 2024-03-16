// ConditionSelectorComponent.jsx
import React from 'react';

const ConditionSelectorComponent = ({ conditions, onSelectCondition }:any) => {
  return (
    <div className='flex justify-center items-center'>
    <select onChange={(e) => onSelectCondition(e.target.value)}>
      {conditions.map((condition:any) => (
        <option key={condition} value={condition}>
          {condition}
        </option>
      ))}
    </select>
    </div>
  );
};

export default ConditionSelectorComponent;
