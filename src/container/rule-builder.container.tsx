import { inbuiltControls } from '../constants/inbuiltControl';
import { useSelectComponents } from '../hooks/useSelectComponent';
import ConditionComponent from '../components/conditional-logic';
import { useState } from 'react';
import { OHRIFormField } from '../types';


const RuleBuilderComponent = () => {
  const { components, setComponents } = useSelectComponents();
  const [schema, setSchema] = useState({ "question": "1", condition: "" })
  const [fields, setFields] = useState<OHRIFormField>()
  const handleComponentChange = (event: any) => {
    const selectedComponent = inbuiltControls.find((components: any) => components.name === event.target.value);
    if (selectedComponent) {
      const updatedComponents = [...components, selectedComponent];
      setComponents(updatedComponents);
    }
  };
  console.log(schema);
  const onFieldChange = (fieldValue?: string) => {
    console.log(fieldValue);
  }

  return (
    <div className='p-5'>
      <div className='bg-blue-400 p-5 rounded-lg flex justify-between'>
        <label htmlFor="" className='text-black'> + Add New Component </label>
        <select name="" id="" onChange={(event: any) => handleComponentChange(event)} defaultValue={""}>
          <option value="" disabled hidden>Choose one</option>
          {inbuiltControls.map((control: any) => {
            return (
              <option value={control.name} key={control.name} >
                {control.name}
              </option>
            )
          })}
        </select>
      </div>
      <div className='flex flex-col space-y-4  p-10 border-[1.4px] border-solid mt-5 rounded-lg'>
        {components?.map((control, index) => {
          const { name, component: DynamicComponent, type } = control;
          if (name.length !== 0) {
            return (
              <div className='flex justify-between space-x-5 border-solid border-[1px] p-3 rounded-lg items-center'>
              <DynamicComponent
                setFields={setFields}
                id={index.toString()}
                schema={schema}
                setSchema={setSchema}
                key={index}
                onChange={onFieldChange}
                label={name}
                type={type}
                ConditionComponent={ConditionComponent}
                selectedComponents={components}
              />
                <button  onClick={()=>setComponents(components.filter(item=>item.name != name ))} className='bg-red-400 p-2 rounded-lg text-white hover:bg-red-500'>Delete</button>
              </div>
            )
          }
        }
        )}
      </div>
    </div>
  );
};

export default RuleBuilderComponent;
