import {axiosService} from "./cars.api.axios";
import {carURL} from "../../configs/urls/urls";

export const carService = {
    getAll:() => axiosService.get(carURL.cars),
    createCar:(car) => axiosService.post(carURL.cars, car),
    deleteById:(id) => axiosService.delete(`${carURL.cars}/${id}`)
}