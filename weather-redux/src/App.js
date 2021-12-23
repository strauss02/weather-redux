import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "./features/weather/weatherSlice";
import "./App.css";
import CityForcast from "./CityForcast";

function App() {
  const currentCity = useSelector((state) => state.weather.currentCity);
  const dispatch = useDispatch();

  const [cityInput, setCityInput] = useState("");

  // useEffect(() => {
  //   dispatch(changeCity(currentCity));
  // }, []);

  return (
    <div className="App">
      <div className="header">
        <input
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="enter city name"
        />
        <button onClick={() => dispatch(changeCity(cityInput))}>
          get weather
        </button>
      </div>
      <CityForcast currentCity={currentCity} />
    </div>
  );
}

export default App;
