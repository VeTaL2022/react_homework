import {getUsersAxios} from "./users.api.axios";

export const userService = {
    getAll:()=>getUsersAxios.get(),
    create:(user)=>getUsersAxios.post(user),
    deleteById:(id)=>getUsersAxios.delete(`/${id}`)
}