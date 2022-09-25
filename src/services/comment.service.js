import {axiosService} from "./api.axios";
import {commentURL} from "../configs/urls/urls";

export const commentService = {
    getComment:() => axiosService.get(commentURL.comments)
}