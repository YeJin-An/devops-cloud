import { useState } from "react";
import Circle from "Circle";
import { zip, get_random_lotto_numbers, shuffle_array } from "utils";

const INTIAL_STATE = {
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

function Numbers1({ title }) {
  const [state, setState] = useState(INTIAL_STATE);

  const generateNumbers = () => {
    setState((prevState) => ({
      ...prevState,
      numbers: get_random_lotto_numbers(),
    }));
  };
  const shuffleNumbers = () => {
    setState((prevState) => ({
      ...prevState,
      numbers: shuffle_array(prevState.numbers),
    }));
  };
  const shuffleColors = () => {
    setState((prevState) => ({
      ...prevState,
      colors: shuffle_array(prevState.colors),
    }));
  };

  return (
    <>
      {title && <h2>useState{title}</h2>}
      {zip(state.numbers, state.colors).map(([number, color]) => (
        <Circle number={number} backgroundColor={color} />
      ))}
      <hr />
      <button onClick={generateNumbers}>GENERATE_NUMBERS</button>
      <button onClick={shuffleNumbers}>SHUFFLE_NUMBERS</button>
      <button onClick={shuffleColors}>SHUFFLE_COLORS</button>
    </>
  );
}
export default Numbers1;
