import {axiosInstance} from "./users.api.axios";
import {urls} from "../components/urls/urls";

export const userService = {
    getAll:()=>axiosInstance.get(urls.users),
    create:(user)=>axiosInstance.post(urls.users, user),
    deleteById:(id)=>axiosInstance.delete(`${urls.users}/${id}`)
}