import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city-info">
        <h1 className="text-capitalize city">{props.data.city}</h1>
        <ul>
          <li className="date mb-3">
            <FormattedDate date={props.data.date} />
          </li>
          {/* <li className="text-capitalize">{props.data.description}</li> */}
        </ul>
      </div>

      <div className="row mt-3 temp-info">
        <div className="col-6 mt-3 icon-temp">
          <div className="clearfix ">
            <div className="float-left icon" id="icon">
              <WeatherIcon code={props.data.icon} size={58} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>{" "}
        </div>
        <div className="col-6 mt-3 humidity-info">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
