import axios from "axios";

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/users", headers: {'Content-Type': 'application/json'}
});

export const getUsersAxios = () =>{
    return axiosInstance.get("");
}
export const getPostsAxios = () =>{
    return axiosInstance.get("1/posts");
}