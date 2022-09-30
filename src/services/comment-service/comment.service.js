import {axiosService} from "../axios.service";
import {urls} from "../../configs";

export const commentService = {
    getComment: () => axiosService.get(urls.comments),
    getById: (id) => axiosService.get(urls.comments + '/'+id)
}