import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCity } from './features/weather/weatherSlice'
import './App.css'

function App() {
  const currentCity = useSelector((state) => state.weather.currentCity)
  const weather = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  const [cityInput, setCityInput] = useState('')

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
      {weather ? (
        <div className="forecast">
          <h3 className="temperature"> {weather.main.temp}</h3>
          <h3 className="description"> {weather.weather[0].description} </h3>
        </div>
      ) : null}
    </div>
  )
}

export default App
