import {axiosService} from "../../utils";


export const weatherCities = {
    getWeather: (city) => axiosService.get('', {params:{q: city, limit: 5, appid: 'cef90042b4c6a868d1d22fd0296bafd8'}})

}