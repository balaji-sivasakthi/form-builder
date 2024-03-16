// components/TextAreaComponent.jsx
import React, { useState } from 'react';
import { OHRIFormField } from '../../types';

const OHRITextArea: React.FC<OHRIFormField> = ({ id, label, value, onChange}) => {
  return (
    <div className='flex space-x-2'>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} className='border'/>
    </div>
  );
};

export default OHRITextArea;
