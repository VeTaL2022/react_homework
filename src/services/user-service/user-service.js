import {axiosService} from "../api.axios";
import {urls} from "../../configs";

export const userService = {
    getUser:() => axiosService.get(urls.users)
}