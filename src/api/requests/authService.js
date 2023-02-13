import {axiosService} from "../../utils";
import {urls} from "../endpoints";

const accessToken = 'access'
const refreshToken = 'refresh'

const authService = {

    login: async function (credential){

        const response = await axiosService.post(urls.auth.login, credential);

        if(response.status === 200){
            this.setTokens(response.data)
        }
    },
    refresh: async function(refresh){
        const response = await axiosService.post(urls.auth.refresh, {refresh});


        if(response.status === 200){
            console.log('response-status')
            this.setTokens(response.data)
        }

    },


    me: () => axiosService.get(urls.auth.me),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessToken, access)
        localStorage.setItem(refreshToken, refresh)
    },

    getAccessToken: () => localStorage.getItem(accessToken),
    getRefreshToken: () => localStorage.getItem(refreshToken),

    isAuthenticated: () => !!localStorage.getItem(accessToken),


    deleteTokens: () => {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    }

}

export {
    authService
}