import React, {useState}from "react";
import axios from "axios";
import "./App.css";
export default function Weather() {
  const [weatherData, setWeatherData]= useState({ready:false});
const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
  const apiKey ="7e43d835d74dd3d61976169a1cb6ff94";
  let apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&untis=metric`;
  axios.get(apiUrl).then(handleResponse)
  };
  if(weatherData.ready){
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter city.."
              className="form-control shadow-sm"
              autoFocus="on"
              onChange={handleCityChange}
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
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
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
            <a href="/">°C</a>
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
else{
  search();
  return "loading....."
}
}