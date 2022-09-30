import {axiosService} from "../axios.service";
import {urls} from "../../configs/urls/urls";

export const userService = {
    getUser: () => axiosService.get(urls.users)
}