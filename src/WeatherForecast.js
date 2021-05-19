import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast.daily[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast.daily[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9f7b34ce1d4954adbe45333199ef6c7a";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
