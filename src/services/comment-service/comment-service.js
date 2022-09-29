import {axiosService} from "../api.axios";
import {urls} from "../../configs";

export const commentService = {
    getComment:() => axiosService.get(urls.comments)
}