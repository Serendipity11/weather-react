import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Wednesday 08:40</li>
        <li>Mostly cloudy</li>
      </ul>
    </div>
  );
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
