import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1 className="text-capitalize">{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                className="float-left"
                alt={weatherData.description}
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°</span>
              </div>
            </div>{" "}
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9f7b34ce1d4954adbe45333199ef6c7a";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
// export default function Weather(props) {
//   const [city, setCity] = useState("");
//   const [loaded, setLoaded] = useState(false);
//   const [weather, setWeather] = useState({});

//   function getWeather(response) {
//     console.log(response);
//     setWeather({
//       temperature: response.data.main.temp,
//       wind: response.data.wind.speed,
//       humidity: response.data.main.humidity,
//       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
//       description: response.data.weather[0].description,
//     });
//     setLoaded(true);
//   }

//   function updateCity(event) {
//     setCity(event.target.value);
//     console.log(city);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f7b34ce1d4954adbe45333199ef6c7a&units=metric`;
//     axios.get(url).then(getWeather);
//   }
//   let form = (
//     <form className="form-inline form">
//       <div className="form-group mb-2">
//         <input
//           className="form-control mb-2"
//           id="search"
//           type="search"
//           placeholder="Enter the city"
//           onChange={updateCity}
//         />
//         <input
//           id="search"
//           type="submit"
//           value="Search"
//           onClick={handleSubmit}
//           className="btn btn-secondary form-control mb-2"
//         />
//       </div>
//     </form>
//   );

//   if (loaded) {
//     return (
//       <div className="container Weather">
//         <div>
//           {form}
//           <div>
//             <ul className="weather-info">
//               <li>Temperature: {Math.round(weather.temperature)}</li>
//               <li>Desctiption: {weather.description}</li>
//               <li>Wind: {weather.wind} km/hour</li>
//               <li>Humidity: {weather.humidity}%</li>
//               <li>
//                 {" "}
//                 <img src={weather.icon} alt="Weather icon" />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="container">
//         <div>{form}</div>
//       </div>
//     );
//   }
// }
