import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const carService = {
    getCar: (page = 1) => axiosService.get(urls.cars, {params:{page}}),
    createCar:(car) => axiosService.post(urls.cars, car),
    addPhotoById: (id, data) => axiosService.patch(`${urls.cars}/${id}`, data),
    deleteCarById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}