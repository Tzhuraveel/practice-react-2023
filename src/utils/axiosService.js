import axios from "axios";

export const axiosService = axios.create({baseURL: `https://api.openweathermap.org/geo/1.0/direct`})

axiosService.interceptors.request.use((config) => {

    return config
})

axiosService.interceptors.response.use((config) => {

    return config
})