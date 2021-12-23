import React from "react";
import { useSelector } from "react-redux";

export default function CityForcast({ currentCity }) {
  const show = useSelector((state) => state.weather.show);
  const forecast = useSelector((state) => state.weather.cityForecast);
  const status = useSelector((state) => state.weather.status);
  console.log("show", show);
  console.log("forecast", forecast);

  if (!show) {
    return "";
  }

  if (
    status === "loading" ||
    status === "error, please try another city name"
  ) {
    return status;
  }

  return (
    <div className="forecast">
      <span>{currentCity}</span>
      <h3 className="temperature"> {forecast.main.temp}</h3>
      <h3 className="description"> {forecast.weather[0].description} </h3>
    </div>
  );
}
