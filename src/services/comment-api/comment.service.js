import {axiosService} from "./comments.api.axios";
import {commentURL} from "../../urls/urls";

export  const commentService = {
    getAll:() => axiosService.get(commentURL.comments),
    createComment:(comment) => axiosService.post(commentURL.comments, comment),
    deleteById:(id) => axiosService.delete(`${commentURL.comments}/${id}`)
}