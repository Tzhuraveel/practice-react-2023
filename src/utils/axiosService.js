import axios from "axios";

import {authService} from "../api";
import {createBrowserHistory} from "history";

const axiosService = axios.create({baseURL: 'http://owu.linkpc.net/carsAPI/v2'})

const history = createBrowserHistory();

axiosService.interceptors.request.use((config) => {

    if(authService.isAuthenticated()){
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config

})

let isRefreshing = false

axiosService.interceptors.response.use((config) => {
    return config
}, async (error) => {


    const refreshToken = authService.getRefreshToken();
    if(error.response?.status === 401 &&  refreshToken && !isRefreshing){

        isRefreshing = true
       try {
           await authService.refresh(refreshToken)
       }catch (e) {
           authService.deleteTokens()
           history.replace('/login?expSession=true')
       }

        isRefreshing = false
        return axiosService(error.config)

    }
    return Promise.reject(error)
})

export {
    axiosService,
    history
}


