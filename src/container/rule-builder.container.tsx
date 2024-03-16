// RuleBuilderComponent.jsx

import { inbuiltControls } from '../constants/inbuiltControl';
import { useSelectComponents } from '../hooks/useSelectComponent';
import ConditionComponent from '../components/conditional-logic';
import { useState } from 'react';
import { OHRIFormField } from '../types';


const RuleBuilderComponent = () => {

  const {components, setComponents } = useSelectComponents();
  const [schema, setSchema] = useState({"question":"1", condition: ""})
  const [fields, setFields] = useState<OHRIFormField>({})
  const handleComponentChange = (event: any) => {
    const selectedComponent = inbuiltControls.find((components: any) => components.name === event.target.value);
    if (selectedComponent) {
      const updatedComponents = [...components, selectedComponent];
      setComponents(updatedComponents);
    }
  };
  console.log(schema);
  const onFieldChange = (fieldValue?:string) => {
    console.log(fieldValue);
  }
  
  return (
    <div>
      <h2>Rule Builder</h2>
      <div>
        <label htmlFor="" className='text-black'> + Add New Component </label>
        <select name="" id="" onChange={(event: any) => handleComponentChange(event)} defaultValue={""}> 
          <option value="" disabled hidden>Choose one</option>
          {inbuiltControls.map((control: any) => {
            return(
            <option value={control.name} key={control.name} >
                {control.name}
            </option>
            )
          })}
        </select>
      </div>
      <div className='flex flex-col space-y-4'>
        {
          components && (
            components.map((control, index) => {
              const { name, component: DynamicComponent, type } = control;
              if(name.length !== 0){
                return (
                  <DynamicComponent
                      fields={fields}
                      setFields={setFields}
                      id={index.toString()}
                      isHidden={false}
                      schema={schema}
                      setSchema={setSchema}
                      key={index}
                      onChange={onFieldChange}
                      label={name}
                      type={type}
                      ConditionComponent={ConditionComponent}
                      selectedComponents={components}
                    /> 
                  )
              }
              }
            ))}
      </div>
    </div>
  );
};

export default RuleBuilderComponent;


// <DynamicComponent
                //   key={index}
                //   id={index}
                //   label={name}
                //   type={type}
                //   onChange={(value: any, event: any) => handleComponentChange(index, value, event)}
                // />


                // updatedComponents[index].value = value;
    // Update visibility based on the value of the current component
    // if (value === '') {
    //   if (updatedComponents[index + 1]) {
    //     updatedComponents[index + 1].isVisible = false;
    //   }
    // } else {
    //   if (updatedComponents[index + 1]) {
    //     updatedComponents[index + 1].isVisible = true;
    //   }
    // }