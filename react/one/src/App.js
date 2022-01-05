import Wrapper from "./pages/Wrapper";
import Hello from "./pages/Hello";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="lightgreen" isSpecial={true} />
      <Hello color="lightpink" />
    </Wrapper>
  );
}

export default App;
