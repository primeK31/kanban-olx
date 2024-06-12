import axios  from "axios";

export const axiosQueryInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
});
