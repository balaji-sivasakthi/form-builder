const ValueInputComponent = ({ value, onChangeValue }:any) => {
  return <input type="text" value={value} onChange={(e) => onChangeValue(e.target.value)} />;
};

export default ValueInputComponent;
