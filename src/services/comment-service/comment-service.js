import {axiosService} from "../api.axios";
import {urls} from "../../configs/urls/urls";

export const commentService = {
    getComment:() => axiosService.get(urls.comments)
}