import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches',headers:{'Content-Type': 'application/json'}});

export const getSpaceAxios = () =>{
    return axiosInstance.get("");
}