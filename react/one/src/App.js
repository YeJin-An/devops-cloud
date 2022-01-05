import Wrapper from "./pages/Wrapper";
import Hello from "./pages/Hello";
import Counter from "./pages/Counter";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="lightgreen" isSpecial={true} />
      <Hello color="lightpink" />
      <hr />
      <Counter />
    </Wrapper>
  );
}

export default App;
