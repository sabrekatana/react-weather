import React from "react";
import "./styles.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-container">
          <Weather defaultCity="New York" />{" "}
        </div>
      </div>
      <p class="footer">
        This project is coded by
        <a
          href="https://linkedin.com/in/sabre-katana"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Sabre Katana
        </a>{" "}
        and is open-sourced on
        <a
          href="https://github.com/sabrekatana/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        and hosted by{" "}
        <a href="https://github.com/sabrekatana/vanilla-weather-app">Netlify</a>
        .
      </p>
    </div>
  );
}
