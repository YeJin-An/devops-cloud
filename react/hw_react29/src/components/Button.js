import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <button
      onCLick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button: propTypes = {
  text: PropTypes.string,
  color: ProTypes.string,
  onClick: PropTypes.func,
};

export default Button;
