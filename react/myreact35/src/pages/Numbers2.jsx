import { useReducer } from "react";
import Circle from "Circle";
import { zip, get_random_lotto_numbers, shuffle_array } from "utils";

const INITAL_STATE = {
  numbers: [0, 0, 0, 0, 0, 0, 0],
  colors: [
    "#1B62BF",
    "#1755A6",
    "#37A647",
    "#F29F05",
    "#F23838",
    "purple",
    "pink",
  ],
};

function reducer(prevState, action) {
  const { type } = action;
  if (type === "GENERATE_NUMBERS") {
    return {
      ...prevState,
      numbers: get_random_lotto_numbers(),
    };
  } else if (type === "SHUFFLE_NUMBERS") {
    return {
      ...prevState,
      numbers: shuffle_array(prevState.numbers),
    };
  } else if (type === "SHUFFLE_COLORS") {
    return {
      ...prevState,
      colors: shuffle_array(prevState.colors),
    };
  }
}

function Numbers2({ title }) {
  const [state, dispatch] = useReducer(reducer, INITAL_STATE);
  return (
    <>
      <div>{title && <h2>useReducer{title}</h2>}</div>
      {zip(state.numbers, state.colors).map(([number, color]) => (
        <Circle number={number} backgroundColor={color} />
      ))}
      <hr />
      <button onClick={() => dispatch({ type: "GENERATE_NUMBERS" })}>
        GENERATE_NUMBERS
      </button>
      <button onClick={() => dispatch({ type: "SHUFFLE_NUMBERS" })}>
        SHUFFLE_NUMBERS
      </button>
      <button onClick={() => dispatch({ type: "SHUFFLE_COLORS" })}>
        SHUFFLE_COLORS
      </button>
    </>
  );
}
export default Numbers2;
