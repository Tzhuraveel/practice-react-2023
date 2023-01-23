import axios from "axios";

const axiosService = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})
export {
    axiosService
}