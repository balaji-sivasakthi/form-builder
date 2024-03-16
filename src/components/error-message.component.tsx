const ErrorMessageInputComponent = ({ errorMessage, onChangeErrorMessage }:any) => {
  return (
    <input
      type="text"
      value={errorMessage}
      onChange={(e) => onChangeErrorMessage(e.target.value)}
    />
  );
};

export default ErrorMessageInputComponent;
