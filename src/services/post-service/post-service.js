import {axiosService} from "../axios.service";
import {urls} from "../../configs/urls/urls";

export const postService = {
    getPost: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}