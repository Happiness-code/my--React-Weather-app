import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [temperature, setTemperature] = useState({});

  function showWeather(response) {
    setResult(true);
    setTemperature({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "7e43d835d74dd3d61976169a1cb6ff94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="Enter city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature.temperature)}°C</li>
          <li>Description: {temperature.description}</li>
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {temperature.wind}km/h</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
