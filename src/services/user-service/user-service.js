import {axiosService} from "../api.axios";
import {urls} from "../../configs/urls/urls";

export const userService = {
    getUser:() => axiosService.get(urls.users)
}