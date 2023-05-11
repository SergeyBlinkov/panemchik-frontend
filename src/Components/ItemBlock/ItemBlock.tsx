import React, { useEffect } from 'react';
import './ItemBlock.css';
import { useAppDispatch, useAppSelector } from '../../app/store/ReduxStore';
import { getProductList } from '../../app/store/ApiThunkCalls';
import { ProductItemPriceType, ProductType } from '../../types/ProductType';

type ItemType = {
    img: string;
    description: string;
    title: string;
    price: ProductItemPriceType[];
};

const Item = ({ img, description, title, price }: ItemType) => {
    const link = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${img}`;
    return (
        <li className={'Item'}>
            <h4>{title}</h4>
            <img src={link} alt={title} width={'100%'} height={'100%'} />
            <div className={'Item_TextBlock'}>
                <div className={'Item_TextBlock__item'}>
                    <div>
                        {price.map((data) => (
                            <article key={data.id}>
                                <p>{data.name}</p>
                                <p>{data.price} р</p>
                            </article>
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </li>
    );
};

function ItemBlock() {
    const productList: ProductType = useAppSelector(
        (state) => state.productReducer,
    );
    console.log(productList);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);
    return (
        <ul className={'ItemBlock'}>
            {productList?.products.length > 0 &&
                productList.products.map((data) => (
                    <Item
                        title={data.name}
                        img={data.img}
                        description={data.description}
                        key={data.id}
                        price={data.price}
                    />
                ))}
        </ul>
    );
}

export default ItemBlock;
