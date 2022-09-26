import {axiosService} from "../api.axios";
import {postURL} from "../../configs/urls/urls";

export const postService = {
    getPostById:(id) => axiosService.get(`${postURL.posts}/${id}`)
}