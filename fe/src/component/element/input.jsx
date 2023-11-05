import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    inputType,
    inputClass,
    inputValue,
    inputPlaceholder,
    inputName,
    inputId,
    inputChange,
  } = props;
  return (
    <input
    value={inputValue}
      ref={ref}
      onChange={inputChange}
      type={inputType}
      className={inputClass}
      placeholder={inputPlaceholder}
      name={inputName}
      id={inputId}
    />
  );
});

export default Input;
