import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentCity: 'London',
  cityForecast: [],
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9e86ca2b7c8f8c22a68438aa273a0b2`
    )
    return response
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeCurrentCity: (state, action) => {
      state.currentCity = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.cityForecast = 'loading'
      })

      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.cityForecast = action.payload
      })

      .addCase(fetchWeather.rejected, (state, action) => {
        state.cityForecast = 'error, please try another city name'
      })
  },
})

export const changeCity = (city) => {
  return (dispatch) => {
    dispatch(weatherSlice.actions.changeCurrentCity(city))
    dispatch(fetchWeather(city))
  }
}

export const selectWeather = (state) => state

export const { changeCurrentCity } = weatherSlice.actions

export default weatherSlice.reducer
