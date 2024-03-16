import { IoIosOptions } from "react-icons/io";
const DynamicComponent = ({ id, label, value, onChange, isVisible }: any) => {
  return (
    <div style={{ display: isVisible ? 'flex block' : 'none' }} className='flex flex-row space-x-4 space-y-4'>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)} className='border ' />
      <IoIosOptions />
    </div>
  );
};

export default DynamicComponent;
