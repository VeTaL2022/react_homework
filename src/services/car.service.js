import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const carService = {
    getAll: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    updateById: (id, car) => axiosService.put(urls.cars + '/' +id, car),
    deleteById: (id) => axiosService.delete(urls.cars + '/' +id)
}