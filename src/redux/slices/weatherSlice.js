import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {weatherCities} from "../../api";


const initialState = {
    cities: [],
    error: null,
    loading: null

}
const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getWeatherCity.fulfilled, (state, action) => {
                state.cities = action.payload
            })
            .addCase(getWeatherCity.rejected, (state, action) => {
                console.log(action.payload)
            })
            .addCase(getWeatherCity.pending, (state, action) => {
            })
})

const getWeatherCity = createAsyncThunk(
    'weatherSlice/getWeatherCity',
    async ({city}, thunkAPI) => {
        try {
            const {data} = await weatherCities.getWeather(city);
            return data
        }catch (e){
            console.log(e);
        }
    }

);








const {reducer: weatherReducer} = weatherSlice;

const weatherActions = {
    getWeatherCity
}

export {
    weatherActions,
    weatherReducer
}