import {axiosService} from "./api.axios";
import {todoURL} from "../configs/urls/urls";

export const todoService = {
    getTodo:() => axiosService.get(todoURL.todos)
}