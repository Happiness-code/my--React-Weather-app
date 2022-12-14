import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div claasName="contianer">
        <div className="wrapper">
          <h1>WEATHER FORECAST</h1>
          <header />
          <Weather defaultCity="Madrid" />
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
                href="https://curious-fudge-a20a59.netlify.app/"
                target="-blank"
                rel="noreferrer"
              >
                hosted on netlify
              </a>
            </small>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
