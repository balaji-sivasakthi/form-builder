// components/TimeInputComponent.jsx


const OHRITime = ({ id, label, value, onChange }:any) => {
  return (
    <div className='flex space-x-2'>
      <label htmlFor={id}>{label}</label>
      <input type="time" id={id} value={value} onChange={(e) => onChange(e.target.value)} className='border' />
    </div>
  );
};

export default OHRITime;
