import {axiosService} from "./users.api.axios";
import {userURL} from "../../urls/urls";

export const userService = {
    getAll:()=>axiosService.get(userURL.users),
    createUser:(user)=>axiosService.post(userURL.users, user),
    deleteById:(id)=>axiosService.delete(`${userURL.users}/${id}`)
}