import {axiosService} from "../axiosService/axiosService";

const characterService = {
    getAllCharacter: () => axiosService.get('/character'),
    getOneCharacter: (id) => axiosService.get(`/character/${id}`)
}
export {
    characterService
}