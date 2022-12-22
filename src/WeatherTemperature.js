import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  if (units === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ºC |
          </a>{" "}
          ºF
        </span>
      </div>
    );
  }
}
