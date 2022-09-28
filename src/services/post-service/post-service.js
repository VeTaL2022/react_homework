import {axiosService} from "../api.axios";
import {urls} from "../../configs/urls/urls";

export const postService = {
    getPost:() => axiosService.get(urls.posts)
}