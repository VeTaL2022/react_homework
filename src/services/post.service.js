import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const postService = {
    getPost: () => axiosService.get(urls.posts)
}