import ChCkChocolatePic from './src/Chckshoc.jpg'
import ChCkClassicPic from './src/Chckclassic.jpg'
import ChCkCoffeePic from './src/Chckcoffee.jpg'
import ChCkLimPic from './src/Chcklim.jpg'

const ChCkClassic = {
    id : 1,
    title:'Чизкейк Классический',
    img:ChCkClassicPic,
    description: 'Отпечной чизкейк на песочном сабле. Классическая сырная начинка на основе сливочного сыра, сливок и яиц',
    price:['1250 Гр. - 1488р','120 Гр. (Кусочек) - 156р']
}

const ChCkChocolate = {
    id : 2,
    title: 'Чизкейк Шоколадный',
    img: ChCkChocolatePic,
    description: 'Отпечной чизкейк на шоколадном песочном сабле. Сырная масса на основе сливочного сыра и бельгийского темного шоколада',
    price:['1250 Гр. - 1764р','120 Гр. (Кусочек) - 180р']
}

const ChCkCoffee = {
    id : 3,
    title:'Чизкейк Кофейный',
    img: ChCkCoffeePic,
    description:'Отпечной чизкейк на шоколадном песочном сабле. Сырная масса на основе сливочного сыра и эспрессо',
    price:['1250 Гр. - 1644р','120 Гр. (Кусочек) - 174р']
}

const ChCkLim  = {
    id : 4,
    title:'Чизкейк Малина-Лимон',
    img: ChCkLimPic,
    description: 'Отпечной чизкейк на песочном сабле. Классическая сырная начинка с лимонным вкусом в сочетании с малиновой прослойкой',
    price:['1250 Гр. - 1488р','120 Гр. (Кусочек) - 156р']
}






export const variables = [
    ChCkClassic,
    ChCkChocolate,
    ChCkCoffee,
    ChCkLim
]