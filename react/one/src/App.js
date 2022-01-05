import Wrapper from "./pages/Wrapper";
import Hello from "./pages/Hello";
import Counter from "./pages/Counter";
import InputSample from "./pages/InpputSample";
import UserList from "./pages/UserList";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="lightgreen" isSpecial={true} />
      <Hello color="lightpink" />
      <hr />
      <Counter />
      <hr />
      <InputSample />
      <hr />
      <UserList />
    </Wrapper>
  );
}

export default App;
