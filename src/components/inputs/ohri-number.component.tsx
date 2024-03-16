// components/NumberInputComponent.jsx


const OHRINumber = ({ id, label, value, onChange }:any) => {
  return (
    <div className='flex space-x-2'>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} value={value} onChange={(e) => onChange(e.target.value)} className='border' />
    </div>
  );
};

export default OHRINumber;
