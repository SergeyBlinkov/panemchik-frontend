export interface ProductItemPriceType {
    productId: number;
    price: number;
    name: string;
    id: number;
}

export interface ProductOneType {
    id: number;
    name: string;
    img: string;
    description: string;
    basketId: null | number;
    price: ProductItemPriceType[];
}

export interface ProductType {
    loading: boolean;
    products: ProductOneType[];
    errs?: string | boolean;
}
