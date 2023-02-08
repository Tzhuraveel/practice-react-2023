import {axiosService} from "../../utils";
import {urls} from "../endpoints";

export const usersRequests = {
    getAllUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`)
}