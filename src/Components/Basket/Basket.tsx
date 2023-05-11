import React, {useState} from 'react';
import './Basket.css'
import Footer from "../Footer";
import Header from "../Header";
import ChCkClassicPic from "../ItemBlock/src/Chckclassic.jpg";
import {Button} from "@mui/material";
import ModalForm from "./ModalForm";

const ChCkClassic = {
    title:'Чизкейк Классический',
    img:ChCkClassicPic,
    description: 'Отпечной чизкейк на песочном сабле. Классическая сырная начинка на основе сливочного сыра, сливок и яиц',
    price:['1250 Гр. - 1488р','120 Гр. (Кусочек) - 156р']
}

interface BasketType {
    src:string,
    title:string,
    type:string[],
    price:number,
}
type SubmitEvent = React.SyntheticEvent<HTMLFormElement>;
const BasketItem = ({src,title,type,price}:BasketType) => {


    return <div className={'Basket-Item'}>
        <img src={src} alt={title}/>
        <div className={'Basket-Item_Text'}>
            <h3>{title}</h3>
            <div className={'Basket-Item_Text__amount'}><p>Вы выбрали:</p>{type.map((data) => (<p key={data}>{data}</p>))}</div>
            <span className={'Basket-Item_Text__price'}>Итог: {price}р</span>
        </div>

    </div>
}

function Basket() {
    const [openModal,setOpenModal] = useState<boolean>(false)
    const handleSubmit = (e:SubmitEvent) => {
        e.preventDefault()
        setOpenModal(true)
    }
    const handleClose = () => setOpenModal(false)

    return (
        <div className={'Basket'}>
            <Header />
            <h2>Корзина</h2>
            <div className={'Basket-List'}>
                {
                   [1,2,3,4].map((_,index) => (
                       <BasketItem key={index} src={ChCkClassic.img} type={ChCkClassic.price} price={1200} title={ChCkClassic.title}/>
                   ))
               }
            </div>
            <form  onSubmit={handleSubmit} className={'Basket-SendForm'}>
                <h3>Итоговая сумма:<span>{`Итоговая сумма`}</span></h3>
                <Button type={'submit'}>Сделать заказ</Button>
            </form>
            <ModalForm open={openModal} onClose={handleClose}/>
            <Footer />
        </div>
    );
}

export default Basket;