import { axiosQueryInstance } from "./axiosInstance";
import { Product } from "../types/products";
import { useQuery } from "react-query";
import axios from "axios";


/*export const getAllProducts = async (product: Product) => {
    const response = await axiosInstance.get('/products');
    return response.data;
}*/

const getProducts = async () => {
    const { data } = await axiosQueryInstance.get<Product[]>('/products');
    return data;
};

export const createProduct = async (product: {
    title: string;
    price: number;
    category: string;
    description: string;
}) => {
    const response = await axios.post('https://fakestoreapi.com/products', product);
    return response.data;
}

export const useProduct = () => {
    return useQuery('products', getProducts);
};
