import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }

  return (
    <div className="forecast card">
      <div className="row">
        <div className="col">
          <h3>{day()}</h3>
          <p className="forecast-high details">
            {" "}
            <span>{maxTemperature()}</span> /
            <span className="forecast-low details">{minTemperature()}</span>{" "}
          </p>
          <div class="col">
            <div className="small">
              <WeatherIcon code={props.data.weather[0].icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
