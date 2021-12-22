import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const currentCity = useSelector((state) => state.weather.currentCity)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <input placeholder="enter city name" />
      <button>Change to this city</button>
    </div>
  )
}

export default App
