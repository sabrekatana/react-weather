import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div class="col-auto">
      <div class="current-forecast card">
        <h3 class="todays-date">
          <FormattedDate date={props.data.date} />
        </h3>
        <p class="current-time">
          <FormattedTime date={props.data.date} />
        </p>
        <div class="row">
          <div class="col">
            <h2 class="city">{props.data.city}</h2>
            <h1 class="current-temp">
              <WeatherTemperature celsius={props.data.temperature} />{" "}
            </h1>
          </div>
          <div className="col conditions-set">
            <p class="conditions">{props.data.description}</p>
            <WeatherIcon code={props.data.icon} class="large" />
          </div>
        </div>
      </div>

      <div class="details-container">
        <div class="row">
          <div class="col-md">
            <div class="details card">
              <p class="small-details">
                Humidity:
                <span id="humidity"> {props.data.humidity}</span>%
              </p>
            </div>
          </div>
          <div class="col-md">
            <div class="details card">
              <p class="small-details">
                Wind:
                <span id="wind"> {props.data.wind}</span> km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
