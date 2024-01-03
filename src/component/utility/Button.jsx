const Button = (props) => {
  const { children, onClick, classname, type = "button" } = props;
  return (
    <button className={`${classname} `} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
