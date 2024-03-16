// components/DateComponent.jsx


const OHRIDate = ({ id, label, value, onChange }:any) => {
  return (
    <div className='flex space-x-2'>
      <label htmlFor={id} className='text-black'>{label}</label>
      <input type="date" id={id} value={value} onChange={(e) => onChange(e.target.value)} className='border' />
    </div>
  );
};

export default OHRIDate;
