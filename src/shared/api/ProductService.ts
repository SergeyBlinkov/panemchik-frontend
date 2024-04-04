import { AxiosResponse } from 'axios';
<<<<<<< HEAD
import { ProductType } from '../../types/ProductType';
=======
import { ProductOneType, ProductType } from '../../types/ProductType';
>>>>>>> master
import $api from './interceptors';

export default class ProductService {
    static async getProductList(): Promise<AxiosResponse<ProductType>> {
        return $api.get<ProductType>('product/getProduct');
    }
<<<<<<< HEAD
}
=======
    static async getOneProduct (id:number):Promise<AxiosResponse<ProductOneType>> {
        return $api.get<ProductOneType>(`product/item/`,{params: {
            id
        }})

    }
}

>>>>>>> master
