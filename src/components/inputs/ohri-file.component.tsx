// components/FileInputComponent.jsx


const OHRIFile = ({ id, label, onChange }:any) => {
  return (
    <div className='flex space-x-2'>
      <label htmlFor={id}>{label}</label>
      <input type="file" id={id} onChange={(e) => onChange(e.target.files)} />
    </div>
  );
};

export default OHRIFile;
