// FormValidatorContainer.jsx
import React, { useState } from 'react';
import RuleBuilderComponent from './rule-builder.container';


const FormValidatorContainer = () => {
  const [fields] = useState([
    { id: 'field1', label: 'Field 1' },
    { id: 'field2', label: 'Field 2' },
    // Add more fields as needed
  ]);

  const [conditions] = useState(['equals', 'not equals', 'greater than', 'less than']);
  const [operators] = useState(['AND', 'OR']);

  const [selectedField, setSelectedField] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedErrorMessage, setSelectedErrorMessage] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');

  const handleSelectField = (fieldId:any) => {
    setSelectedField(fieldId);
  };

  const handleSelectCondition = (condition:any) => {
    setSelectedCondition(condition);
  };

  const handleChangeValue = (value:any) => {
    setSelectedValue(value);
  };

  const handleChangeErrorMessage = (errorMessage:any) => {
    setSelectedErrorMessage(errorMessage);
  };

  const handleSelectOperator = (operator:any) => {
    setSelectedOperator(operator);
  };

  return (
    <RuleBuilderComponent
      fields={fields}
      conditions={conditions}
      operators={operators}
      selectedField={selectedField}
      selectedCondition={selectedCondition}
      selectedValue={selectedValue}
      selectedErrorMessage={selectedErrorMessage}
      selectedOperator={selectedOperator}
      onSelectField={handleSelectField}
      onSelectCondition={handleSelectCondition}
      onChangeValue={handleChangeValue}
      onChangeErrorMessage={handleChangeErrorMessage}
      onSelectOperator={handleSelectOperator}
    />
  );
};

export default FormValidatorContainer;
