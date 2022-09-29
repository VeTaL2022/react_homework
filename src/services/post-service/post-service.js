import {axiosService} from "../api.axios";
import {urls} from "../../configs";

export const postService = {
    getPost:() => axiosService.get(urls.posts)
}