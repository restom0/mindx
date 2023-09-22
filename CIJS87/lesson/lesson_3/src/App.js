import NameCard from "./components/NameCard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NameCard name="Alice" age="20" gender="Female" />
      <NameCard name="Bob" age="20" gender="Male" />
      <NameCard name="Hieu" age="18" gender="Male" />
    </div>
  );
}

export default App;
