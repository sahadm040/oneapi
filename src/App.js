import "./App.css";
import { Counter } from "./features/counter/Counter";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Counter />
      <Character />
    </div>
  );
}

export default App;
