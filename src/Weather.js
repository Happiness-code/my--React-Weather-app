import React from "react";
import "./App.css";
export default function Weather() {
  let weatherData = {
    city: "Pamplona",
    date: "Thu,Aug 18,2022 01:51 pm",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png", 
    humidity: 80,
    wind: 0,
    temperature: 30,
  };
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter city.."
              class="form-control shadow-sm"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-primary shadow-sm"
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-success">
              Current
            </button>
          </div>
        </div>
      </form>
      <h2>{weatherData.city}</h2>
      <h3>{weatherData.date}</h3>
      <h4>{weatherData.description}</h4>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature"></div>
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="flex"
          />
          <span className="temperature">{weatherData.temperature}</span>
          <span className="unit">
            <a href="/">°C</a> |<a href="/">°F</a>
          </span>
        </div>
        <div class="col-6">
          <p>
            <em>Humidity:{weatherData.humidity}%</em>
          </p>
          <p>
            <em>Wind: {weatherData.wind}km/h </em>
          </p>
        </div>
      </div>
    </div>
  );
}
