import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const authService = {
    registerUser: (user) => axiosService.post(urls.users, user),
    loginUser: (user) => axiosService.post(urls.auth.login, user),
    refresh: (token) => axiosService.post(urls.auth.refresh, {token})
}