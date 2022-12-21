import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>WEATHER FORECAST</h1>
        <header />
        <Weather />
      </div>
      <div class="contianer text-center">
        <span class="info">
          <small>
            <a
              href="https://github.com/Happiness-code/my--React-Weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-source link
            </a>
            coded by Happy JE     
             <a
              href="https://majestic-sprite-aac581.netlify.app/"
              target="-blank"
              rel="noreferrer"
            >hosted on netlify
            </a>
          </small>
        </span>
      </div>
    </div>
  );
}

export default App;
