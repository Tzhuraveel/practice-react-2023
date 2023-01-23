import {axiosService} from "./axiosService";


const userService = {
    getUsers: () => axiosService.get(`/users`),
    getUserPost: (id) => axiosService.get(`/users/${id}/posts`)
}
export {
    userService
}