// eslint-disable-next-line react/prop-types
const Button = ({ buttonType, buttonPlacehodler, buttonClick, children ,buttonId,buttonClass}) => {
  return (
    <button
      type={buttonType}
      placeholder={buttonPlacehodler}
      onClick={buttonClick}
      id={buttonId}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
