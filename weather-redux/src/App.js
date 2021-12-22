import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCity } from './features/weather/weatherSlice'
import './App.css'

function App() {
  const currentCity = useSelector((state) => state.weather.currentCity)
  const cityForcast = useSelector((state) => state.weather.cityForcast)
  const dispatch = useDispatch()

  const [cityInput, setCityInput] = useState('')

  useEffect(() => {
    dispatch(changeCity(currentCity))
  }, [])

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

      {/* {cityForcast ? (
        <div className="forecast">
          <span>{currentCity}</span>
          <h3 className="temperature"> {weather.main.temp}</h3>
          <h3 className="description"> {weather.weather[0].description} </h3>
        </div>
      ) : null} */}
    </div>
  )
}

export default App
