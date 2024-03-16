// LogicalOperatorComponent.jsx
import React from 'react';

const LogicalOperatorComponent = ({ operators, onSelectOperator }:any) => {
  return (
    <div className='flex justify-center items-center'>
    <select onChange={(e) => onSelectOperator(e.target.value)}>
      {operators.map((operator:any) => (
        <option key={operator} value={operator}>
          {operator}
        </option>
      ))}
    </select>
    </div>
  );
};

export default LogicalOperatorComponent;
