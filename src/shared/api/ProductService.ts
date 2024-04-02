import { AxiosResponse } from 'axios';
import { ProductOneType, ProductType } from '../../types/ProductType';
import $api from './interceptors';

export default class ProductService {
    static async getProductList(): Promise<AxiosResponse<ProductType>> {
        return $api.get<ProductType>('product/getProduct');
    }
    static async getOneProduct (id:number):Promise<AxiosResponse<ProductOneType>> {
        return $api.get<ProductOneType>(`product/item/`,{params: {
            id
        }})

    }
}

