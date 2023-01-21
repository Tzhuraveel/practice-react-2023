import {axiosService} from "./axiosService";


const usersService = {
    getUsers: () => axiosService.get('/users'),
    getUser: (id) => axiosService.get(`/users/${id}`)
}

export {
    usersService
}