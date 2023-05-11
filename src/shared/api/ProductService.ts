import { AxiosResponse } from 'axios';
import { ProductType } from '../../types/ProductType';
import $api from './interceptors';

export default class ProductService {
    static async getProductList(): Promise<AxiosResponse<ProductType>> {
        return $api.get<ProductType>('product/getProduct');
    }
}
