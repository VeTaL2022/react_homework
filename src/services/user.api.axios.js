import axios from "axios";

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users"});

export const getUsersAxios = () =>{
    return axiosInstance.get("");
}
export const getPostsAxios = (id) =>{
    return axiosInstance.get(`/${id}/posts`);
}