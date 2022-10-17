import {AxiosResp, axiosService} from "./axios.service";
import {urls} from "../configs";
import {IPost} from "../interfaces";

export const postService = {
    getAll: ():AxiosResp<IPost[]> => axiosService.get(urls.posts),
    createPost: (post: IPost):AxiosResp<IPost> => axiosService.post(urls.posts, post),
    getById: (id:number):AxiosResp<IPost> => axiosService.get(urls.posts + '' + id)
}