import {axiosService} from "./api.axios";
import {albumURL} from "../configs/urls/urls";

export const albumService = {
    getAlbum:() => axiosService.get(albumURL.albums)
}