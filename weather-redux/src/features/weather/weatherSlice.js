import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCity: "London",
  cityForecast: [],
  show: false,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9e86ca2b7c8f8c22a68438aa273a0b2`
    );
    const result = await response.json(response);
    console.log("inthunk", result);
    return result;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    show: (state) => {
      state.show = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(fetchWeather.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.cityForecast = action.payload;
        state.status = "idle";
      })

      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "error, please try another city name";
      });
  },
});

export const changeCity = (city) => {
  return async (dispatch) => {
    dispatch(weatherSlice.actions.changeCurrentCity(city));
    await dispatch(fetchWeather(city));
    dispatch(weatherSlice.actions.show());
  };
};

export const selectWeather = (state) => state;

export const { changeCurrentCity } = weatherSlice.actions;

export default weatherSlice.reducer;
