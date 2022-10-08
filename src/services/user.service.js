import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const userService = {
    getUser: () => axiosService.get(urls.users)
}