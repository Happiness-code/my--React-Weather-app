import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello world my name is happiness .</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
