import {axiosService} from "./axios.service";
import {urls} from "../configs";

const accessToken = 'access';
const refreshToken = 'refresh';

export const authService = {
    registerUser: (user) => axiosService.post(urls.users, user),
    loginUser: (user) => axiosService.post(urls.auth.login, user),
    refresh: (token) => axiosService.post(urls.auth.refresh, {refresh:token}),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessToken, access);
        localStorage.setItem(refreshToken, refresh);
    },
    deleteToken: () => {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    },
    getAccessToken: () => localStorage.getItem(accessToken),
    getRefreshToken: () => localStorage.getItem(refreshToken)
}