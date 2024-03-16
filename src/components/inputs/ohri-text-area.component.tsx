// components/TextAreaComponent.jsx
import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { OHRIFormField } from '../../types';

const OHRITextArea: React.FC<OHRIFormField> = ({ id, label, value, onChange, schema, setSchema, ConditionComponent, selectedComponents, hide }) => {
  const [showCondition, setshowCondition] = useState(false);
  
  const handleCondition = () => {
    setshowCondition((p) => !p)
  }

  return (
    <div className='flex space-x-2'>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} className='border'/>
      <div className='flex cursor-pointer'>
        <label htmlFor="" onClick={handleCondition}><IoAdd /></label>
        {showCondition && (
          <ConditionComponent
            schema={schema}
            setSchema={setSchema}
            id={id}
            components={selectedComponents} 
          />
        )}
      </div>
    </div>
  );
};

export default OHRITextArea;
