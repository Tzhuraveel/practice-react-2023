import {axiosService} from "../../utils";
import {urls} from "../endpoints";


const carService = {
    getAllCar: (page = 1) => axiosService.get(urls.cars.cars, {params: {page}}),
    createCar: (car) => axiosService.post(urls.cars.cars, car),
    deleteCar: (id) => axiosService.delete(urls.cars.getCarById(id)),
    updateCar: (id, car) => axiosService.put(urls.cars.getCarById(id), car)
}

export {
    carService
}