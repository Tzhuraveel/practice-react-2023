import axios from "axios";

export const axiosService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})