import Footer from '#/Components/Footer/Footer'
import Header from '#/Components/Header'
import ProductService from '#/shared/api/ProductService'
import React, { useEffect, useRef, useState } from 'react';
import '../style/ItemPage.css'
import { ProductOneType } from '#/types/ProductType'
import Loader from '#/shared/ui/Loader'

type TItemPage = {
 loading:boolean,
 product:ProductOneType | null,
 errors:any
}


export default function ItemPage ( ) {
    const refBody = useRef<HTMLDivElement | null>(null)
    const [product,setProduct] = useState<TItemPage>({loading:true,product:{name:'',img:'',description:'',price:[],id:0,basketId:0},errors:{}})
    useEffect(() => {
        const id = (window.location.pathname).match(/[0-9]/g)?.join('')
        if(!id) {
            return
        }
        ProductService.getOneProduct(+id).then(data => {
            return setProduct(
                    {loading:false,
                        product:data.data,
                        errors:{}}
                )
            }
            ).catch(e => setProduct(
            {loading:false,product:null,errors:e}))
    },[])


        const link = `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${product.product?.img}`;
        return <div className={'ItemPage'}>
            <Header />
            {product.loading ? <Loader /> : <div className={'ItemPage-body'} ref={refBody} onLoad={() => {
                if(refBody.current) {
                    refBody.current?.classList.add('showElement'
                    )
                }}
            }>
                <img src={link} alt={'product'} width={856} height={856}/>
                <div className='ItemPage-body_info'>
                    <h2>{product.product?.name}</h2>
                    <p>{product.product?.description}</p>
                    <ul>
                        {product.product?.price.map((item,index) => (
                            <li key={index}>{item.name} : {item.price}р</li>
                        ))}
                    </ul>
                </div>
            </div>}
            <Footer />
        </div>
}