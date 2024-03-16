// FieldSelectorComponent.jsx
import React from 'react';

const FieldSelectorComponent = ({ fields, onSelectField }:any) => {
  return (
    <div className='flex justify-center items-center w-full'>
    <select onChange={(e) => onSelectField(e.target.value)}>
      {fields.map((field:any) => (
        <option key={field.id} value={field.id}>
          {field.label}
        </option>
      ))}
    </select>
    </div>
  );
};

export default FieldSelectorComponent;
