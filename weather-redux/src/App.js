import React from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'

function App() {
  const currentCity = useSelector((state) => state.weather.currentCity)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <input placeholder="enter city name" />
      <button>get weather</button>
      <div className="forecast">
        <div></div>
      </div>
    </div>
  )
}

export default App
