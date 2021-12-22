import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentCity: '',
  cityForecast: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeCurrentCity: (state, action) => {
      state.currentCity = action.payload.selectedCity
    },
  },
})

export const { changeCurrentCity } = weatherSlice.actions

export const selectWeather = (state) => state

export default weatherSlice.reducer
