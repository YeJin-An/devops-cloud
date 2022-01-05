import Hello from "./pages/Hello";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="react" color="lightgreen" />;
      <Hello color="lightpink" />
    </>
  );
}

export default App;
