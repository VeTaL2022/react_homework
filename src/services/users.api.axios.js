import axios from "axios";

import {baseURL} from "../components/urls/urls";

export const axiosInstance = axios.create({baseURL});